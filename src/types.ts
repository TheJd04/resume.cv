/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Tab = 'project_cv' | 'portfolio' | 'blog' | 'contact';

export interface SkillItem {
  name: string;
  category: string;
}

export interface WidgetData {
  title: string;
  content: string | string[];
  isList?: boolean;
}

export interface TabData {
  id: Tab;
  label: string;
  title: string;
  subtitle: string;
  highlightText: string;
  widgets: {
    about: WidgetData;
    skills: WidgetData;
    experience: WidgetData;
    contact: WidgetData;
  };
}
