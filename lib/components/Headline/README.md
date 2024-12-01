# Headline

### Supported props
- level: `1` | `2` | `3` | `4`
- color: `'text-100'` | `'text-90'` | `'text-0'`
- weight: `'regular'` | `'semibold'` | `'extrabold'`
- style?: `React.CSSProperties`
- children: `React.ReactNode`

### Useful tips

- Sizes of levels: `48px` | `32px` | `22px` | `18px`
- It is recommended to use the headline level together with the corresponding text level

**Example of using the component:**

```tsx
import { Headline } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  const styles: React.CSSProperties = {
    backgroundColor: 'red'
  }

  return (
    <>
      <Headline level={1} color='light' weight='regular' style={styles}>
        Some headline text
      </Headline>
    </>
  )
}
```