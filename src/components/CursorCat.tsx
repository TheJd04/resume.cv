import { useEffect, useRef } from 'react';

// Sprite positions from the original oneko.js
// Each entry is [col, row] in tile units; background-position = col*32 row*32 (px)
const SPRITE_SETS: Record<string, [number, number][]> = {
  idle:         [[-3, -3]],
  alert:        [[-7, -3]],
  scratchSelf:  [[-5, 0], [-6, 0]],
  tired:        [[-3, 2]],
  sleeping:     [[-2, 0], [-2, -1]],
  N:  [[-1, -2], [-2, -2]],
  NE: [[0,  -2], [-1, -2]],
  E:  [[-3,  0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S:  [[-6, -3], [-7, -3]],
  SW: [[-5, -3], [-6, -3]],
  W:  [[-4, -2], [-4, -3]],
  NW: [[-1, -3], [-2, -3]],
};

function direction(dx: number, dy: number): string {
  const a = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (a > -22.5  && a <= 22.5)   return 'E';
  if (a > 22.5   && a <= 67.5)   return 'SE';
  if (a > 67.5   && a <= 112.5)  return 'S';
  if (a > 112.5  && a <= 157.5)  return 'SW';
  if (a > 157.5  || a <= -157.5) return 'W';
  if (a > -157.5 && a <= -112.5) return 'NW';
  if (a > -112.5 && a <= -67.5)  return 'N';
  return 'NE';
}

const TILE = 32;
const SPEED = 2;

export default function CursorCat() {
  const elRef    = useRef<HTMLDivElement>(null);
  const posRef   = useRef({ x: 100, y: 100 });
  const mouseRef = useRef({ x: 300, y: 300 });
  const idleRef  = useRef(0);
  const tickRef  = useRef(0);
  const frameRef = useRef(0);
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      idleRef.current = 0;
    };
    window.addEventListener('mousemove', onMove);

    function setSprite(name: string, frame: number) {
      const el = elRef.current;
      if (!el) return;
      const set = SPRITE_SETS[name] ?? SPRITE_SETS['idle'];
      const [col, row] = set[frame % set.length];
      el.style.backgroundPosition = `${col * TILE}px ${row * TILE}px`;
    }

    function loop() {
      tickRef.current++;
      const anim = tickRef.current % 14 === 0;
      if (anim) frameRef.current++;

      const { x: cx, y: cy } = posRef.current;
      const { x: mx, y: my } = mouseRef.current;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < SPEED + 2) {
        // ── idle state machine ──
        idleRef.current++;
        const idle = idleRef.current;

        if      (idle < 60)         setSprite('idle', 0);
        else if (idle < 90)         setSprite('alert', 0);
        else if (idle < 160)       { if (anim) setSprite('scratchSelf', frameRef.current); }
        else if (idle < 200)        setSprite('tired', 0);
        else                       { if (anim) setSprite('sleeping', frameRef.current); }
      } else {
        // ── chase cursor ──
        idleRef.current = 0;
        const nx = cx + (dx / dist) * SPEED;
        const ny = cy + (dy / dist) * SPEED;
        posRef.current = { x: nx, y: ny };

        const el = elRef.current;
        if (el) {
          el.style.left = `${nx - TILE / 2}px`;
          el.style.top  = `${ny - TILE / 2}px`;
        }
        if (anim) setSprite(direction(dx, dy), frameRef.current);
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      id="cursor-cat"
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: TILE,
        height: TILE,
        /* Local sprite served from /public */
        backgroundImage: 'url(/oneko.gif)',
        backgroundRepeat: 'no-repeat',
        /* Initial frame: idle */
        backgroundPosition: `${-3 * TILE}px ${-3 * TILE}px`,
        imageRendering: 'pixelated',
        left: 100,
        top: 100,
        zIndex: 99999,
        pointerEvents: 'none',
        transform: 'scale(1.25)',
        transformOrigin: 'top left',
      }}
    />
  );
}
