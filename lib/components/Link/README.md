# Link

### Supported props
- href: `string`
- level: `1` | `2` | `3` | `4`
- color: `'text-100'` | `'text-90'` | `'yellow'` | `'violet'` | `'red'` | `'green'` | `'blue'` | `'pink'`
- underline?: `boolean`
- icon?: `boolean`
- children: `React.ReactNode`

### Useful tips

- Sizes of levels: `20px` | `16px` | `14px` | `12px`
- When hovering over the link, the color changes by changing the transparency level to 70%
- The thickness of the underline line is 1px

**Example of using the component:**

```tsx
import { Link } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  return (
    <>
      <Link href='https://somelink.com' level={} filter='red' altText='cat icon'>
    </>
  )
}
```