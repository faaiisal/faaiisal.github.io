export type BlogTag =
  | 'AI'
  | 'Architecture'
  | 'CSS'
  | 'Career'
  | 'Elementor'
  | 'Figma'
  | 'Frontend'
  | 'Performance'
  | 'UX'
  | 'WordPress'
  | 'Workflow';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: BlogTag[];
  content: Array<{
    type: 'paragraph' | 'heading' | 'list';
    text?: string;
    level?: 2 | 3;
    items?: string[];
  }>;
};
