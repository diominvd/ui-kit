# Icon

### Supported props
- path: `string`
- level: `1` | `2` | `3` | `4` | `5`
- filter: `'text-100'` | `'text-90'` | `'text-0'` | `'yellow'` | `'violet'` | `'red'` | `'green'` | `'blue'` | `'pink'`
- altText?: `React.CSSProperties`
- children: `React.ReactNode`

### Useful tips

- Sizes of levels: `48px` | `32px` | `22px` | `16px` | `12px`

**Example of using the component:**

```tsx
import { Icon } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  return (
    <>
      <Icon path='path/to/image/cat.svg>' level={2} filter='red' altText='cat icon'>
    </>
  )
}
```