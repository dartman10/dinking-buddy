import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-5xl tracking-wider text-brand-green mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl tracking-wider text-brand-green mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl tracking-wider text-brand-green mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brand-green underline hover:text-brand-yellow transition-colors"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
