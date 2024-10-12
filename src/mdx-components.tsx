import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    li: ({children}) => (
      <li>
        {"• " + children}
      </li>
    ),
    ...components,
  }
}