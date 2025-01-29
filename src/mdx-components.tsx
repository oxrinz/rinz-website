import type { MDXComponents } from 'mdx/types'
import Divider from './components/divider'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    li: ({children}) => (
      <li>
        {"• " + children}
      </li>
    ),
    hr: ({children}) => (
      <Divider />
    ),
    ...components,
  }
}