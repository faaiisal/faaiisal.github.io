import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-build-maintainable-frontend-interfaces',
    title: 'How to Build Maintainable Frontend Interfaces',
    description: 'A practical look at component boundaries, naming conventions and folder structure that keep growing frontends easy to reason about.',
    date: '2026-08-03',
    readingTime: '8 min read',
    tags: ['Frontend', 'Architecture'],
    content: [
      { type: 'paragraph', text: 'A maintainable interface is not built by writing clever code; it is built by creating clear boundaries and predictable patterns that scale with product complexity.' },
      { type: 'heading', level: 2, text: 'Draw component boundaries around data, not pixels' },
      { type: 'paragraph', text: 'The cleanest frontends begin by understanding the data model before choosing markup. If a component knows too much about the way a screen is laid out, it becomes difficult to reuse anywhere else.' },
      { type: 'heading', level: 2, text: 'Naming is a design decision, not a chore' },
      { type: 'paragraph', text: 'Scope, intent, and lifecycle matter more than some arbitrary syntax convention. Good naming reduces the amount of verbal explanation needed during code review.' },
      { type: 'list', items: ['Keep files aligned with product concepts, not presentation details.', 'Separate layout primitives from domain-specific UI blocks.', 'Give components one primary responsibility and a clear contract.'] },
      { type: 'heading', level: 2, text: 'Folder structure should mirror how you think about the product' },
      { type: 'paragraph', text: 'Your folder tree should help you find business concepts quickly, not just asset files. If the structure feels arbitrary, it will eventually drift and create more friction than it solves.' }
    ]
  },
  {
    slug: 'figma-to-production-workflow',
    title: 'Figma to Production: A Practical Frontend Workflow',
    description: 'The handoff steps that prevent drift between a Figma file and the shipped interface — tokens, spacing scales and review checkpoints.',
    date: '2026-07-27',
    readingTime: '7 min read',
    tags: ['Workflow', 'Figma'],
    content: [
      { type: 'paragraph', text: 'The gap between “looks right in Figma” and “looks right in the browser” is where most design handoff pain lives. It is rarely one big mistake — it is a slow accumulation of small measurement drifts, missing states, and assumptions that never got written down.' },
      { type: 'heading', level: 2, text: 'Start with tokens, not pixels' },
      { type: 'paragraph', text: 'Before I touch a single component, I pull the color, spacing, and type values out of the Figma file and turn them into CSS custom properties. This forces early conversations about inconsistencies in the design file itself.' },
      { type: 'heading', level: 2, text: 'Build the states nobody designed' },
      { type: 'paragraph', text: 'Most design files cover the happy path beautifully and skip loading states, empty states, and error states entirely. I treat these as a checklist item before development starts.' },
      { type: 'list', items: ['Empty state — what does a new user see before any data exists?', 'Loading state — skeleton, spinner, or nothing at all?', 'Error state — what does a failed request actually communicate?', 'Overflow state — what happens with a name that is 40 characters long?'] },
      { type: 'heading', level: 2, text: 'Review against the design at every breakpoint, not just desktop' },
      { type: 'paragraph', text: 'A lot of review cycles only check the interface at the exact viewport width used in the design file. I build a habit of resizing the browser slowly from 320px to 1440px during review.' }
    ]
  },
  {
    slug: 'elementor-vs-custom-wordpress-development',
    title: 'Elementor vs Custom WordPress Development',
    description: 'When a page builder speeds up delivery, and when hand-written templates are the better long-term investment for a client.',
    date: '2026-07-18',
    readingTime: '6 min read',
    tags: ['WordPress', 'Elementor'],
    content: [
      { type: 'paragraph', text: 'Elementor is excellent when the goal is flexibility and speed for content teams. A custom WordPress implementation is better when the product expects performance, consistency, and a stronger long-term technical boundary.' },
      { type: 'heading', level: 2, text: 'Elementor earns its place when the client edits often' },
      { type: 'paragraph', text: 'It gives marketing teams a fast way to ship landing pages and edit blocks without touching code. This is especially valuable when content is changing constantly and there is not a large engineering team behind the project.' },
      { type: 'heading', level: 2, text: 'Custom templates earn their place when performance or precision matters' },
      { type: 'paragraph', text: 'When a site has a strong design system, a narrow set of templates, or a need for predictable performance and maintainability, custom builds are the better long-term investment.' },
      { type: 'heading', level: 2, text: 'The real answer is usually a mix' },
      { type: 'paragraph', text: 'The strongest projects are usually not pure page-builder or pure custom-code builds. They use the builder for flexibility where it helps and custom code where product quality matters most.' }
    ]
  },
  {
    slug: 'improving-wordpress-frontend-performance',
    title: 'Improving WordPress Frontend Performance',
    description: 'The highest-impact, lowest-risk changes for speeding up a WordPress site’s frontend without breaking the editing experience.',
    date: '2026-07-09',
    readingTime: '9 min read',
    tags: ['WordPress', 'Performance'],
    content: [
      { type: 'paragraph', text: 'Most performance problems in WordPress are not exotic; they are a mix of oversized media, unnecessary scripts, and plugins that continue loading assets on every page.' },
      { type: 'heading', level: 2, text: 'Fix images before anything else' },
      { type: 'paragraph', text: 'A site can feel slow even when the code is fine if hero images are too large, classic layouts are loading full-size assets, or conversion blur is never addressed.' },
      { type: 'heading', level: 2, text: 'Audit plugins before optimizing code' },
      { type: 'paragraph', text: 'Plugin behavior often creates the biggest regression in performance. If a plugin enqueues scripts globally or adds render-blocking CSS, that is always more impactful than micro-optimizing a stylesheet.' },
      { type: 'heading', level: 2, text: 'Measure before and after, on real conditions' },
      { type: 'paragraph', text: 'The right performance work is measurable work. I like to establish the current Core Web Vitals, record the most impactful issues, and then verify improvements on a real production-like environment.' }
    ]
  },
  {
    slug: 'building-responsive-interfaces-with-modern-css',
    title: 'Building Responsive Interfaces with Modern CSS',
    description: 'How container queries, clamp() and modern grid features reduce the number of breakpoints a layout actually needs.',
    date: '2026-06-30',
    readingTime: '7 min read',
    tags: ['CSS', 'Frontend'],
    content: [
      { type: 'paragraph', text: 'Responsive design used to be a list of breakpoints, fixed measurements, and carefully engineered hacks. Modern CSS gives us cleaner tools to build interfaces that adjust based on content and context.' },
      { type: 'heading', level: 2, text: 'clamp() replaces most of your font-size media queries' },
      { type: 'paragraph', text: 'Instead of hardcoded size jumps, clamp() lets typography scale smoothly across a range of screen widths. The result is often less brittle and more readable.' },
      { type: 'heading', level: 2, text: 'Container queries fix the component-in-isolation problem' },
      { type: 'paragraph', text: 'The best responsive systems respond to the component’s own available space, not just the viewport. This makes UI patterns more reusable and more dependable.' },
      { type: 'heading', level: 2, text: 'Grid’s auto-fit and minmax() remove entire categories of breakpoints' },
      { type: 'paragraph', text: 'A layout built from fluid rules often works across several screen sizes without needing to be re-laid out by hand. That reduces maintenance and keeps the code easier to reason about.' }
    ]
  },
  {
    slug: 'what-makes-a-good-ui-engineer',
    title: 'What Makes a Good UI Engineer?',
    description: 'The overlap between design sensitivity and engineering discipline that separates UI engineering from general frontend work.',
    date: '2026-06-20',
    readingTime: '5 min read',
    tags: ['Career', 'UX'],
    content: [
      { type: 'paragraph', text: 'A UI engineer notices when the design is wrong, not just when the code is. That difference matters because real product work is about more than “it renders correctly.”' },
      { type: 'heading', level: 2, text: 'A UI engineer notices when the design is wrong, not just when the code is' },
      { type: 'paragraph', text: 'Good UI engineering combines design sensibility with implementation discipline. You can write code that works in a browser and still miss the product goal if the balance, spacing, hierarchy, or interaction behavior is off.' },
      { type: 'heading', level: 2, text: 'Systems thinking over one-off implementation' },
      { type: 'paragraph', text: 'Strong UI engineers look for the reusable pattern rather than the one-off fix. That is what keeps products coherent as they scale and teams change.' },
      { type: 'heading', level: 2, text: 'It is a discipline you build through repetition' },
      { type: 'paragraph', text: 'The best UI engineers are not the ones with the most opinions — they are the ones with the most tuned instincts built from shipping, reviewing, and refining real interfaces.' }
    ]
  },
  {
    slug: 'ai-assisted-frontend-development',
    title: 'AI-Assisted Frontend Development in Practice',
    description: 'Where tools like Claude, Cursor and Copilot genuinely speed up frontend work, and where human review still matters most.',
    date: '2026-06-08',
    readingTime: '8 min read',
    tags: ['AI', 'Frontend'],
    content: [
      { type: 'paragraph', text: 'AI tools are not replacing frontend judgment; they are accelerating the repetitive parts of the work. The interesting shift is that more time is being spent on decisions, trade-offs, and product clarity.' },
      { type: 'heading', level: 2, text: 'Where it genuinely helps' },
      { type: 'paragraph', text: 'It is especially useful for generating rough draft code, creating boilerplate, brainstorming naming, and handling repetitive UI scaffolding. This makes it easier to move from concept to first working draft more quickly.' },
      { type: 'heading', level: 2, text: 'Where it still needs a careful human review' },
      { type: 'paragraph', text: 'Large language models can create plausible code quickly, but they can also miss accessibility issues, misuse edge cases, or generate architecture that looks neat while being weak in real product contexts.' },
      { type: 'heading', level: 2, text: 'The actual shift: less typing, more decision-making' },
      { type: 'paragraph', text: 'The most meaningful gain is not faster code generation. It is faster iteration cycles and more space for meaningful product choices, which creates better final outcomes.' }
    ]
  },
  {
    slug: 'wordpress-to-frontend-engineering',
    title: 'Moving From WordPress Development to Modern Frontend Engineering',
    description: 'Notes on expanding from WordPress and Elementor into React, Next.js and TypeScript without losing WordPress fluency.',
    date: '2026-05-28',
    readingTime: '6 min read',
    tags: ['Career', 'WordPress'],
    content: [
      { type: 'paragraph', text: 'WordPress instincts transfer surprisingly well into modern frontend work. You still think in terms of component structure, constraints, content flexibility, and shipping value quickly.' },
      { type: 'heading', level: 2, text: 'The underlying skills transfer more than people expect' },
      { type: 'paragraph', text: 'A lot of the core habits — semantic HTML, debugging, performance awareness, accessibility, responsive UIs — carry directly into React and Next.js work.' },
      { type: 'heading', level: 2, text: 'TypeScript rewards the instincts WordPress punishes you for skipping' },
      { type: 'paragraph', text: 'The move to TypeScript forces better contracts, clearer boundaries, and fewer assumptions. Those are exactly the habits good WordPress developers usually build from necessity.' },
      { type: 'heading', level: 2, text: 'Where I have landed' },
      { type: 'paragraph', text: 'I see my work as a blend: WordPress fluency for business and content needs, frontend engineering for modern interfaces, and a growing comfort with React, Next.js, and TypeScript as the product layer.' }
    ]
  }
];

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<string, BlogPost>;

export const blogTags = ['AI', 'Architecture', 'CSS', 'Career', 'Elementor', 'Figma', 'Frontend', 'Performance', 'UX', 'WordPress', 'Workflow'];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogBySlug[slug];
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];

  const related = blogPosts.filter((item) => item.slug !== slug && item.tags.some((tag) => post.tags.includes(tag)));
  return related.slice(0, 3);
}
