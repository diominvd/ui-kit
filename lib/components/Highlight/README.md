# Highlight

### Supported props
- level: `1` | `2` | `3` | `4`
- bgColor: `'surface-90'` | `'dark-yellow'` | `'dark-violet'` | `'dark-red'` | `'dark-green'` | `'dark-blue'` | `'dark-pink'`
- weight: `'regular'` | `'semibold'` | `'extrabold'`
- style?: `React.CSSProperties`
- children: `React.ReactNode`

### Useful tips

- Sizes of levels: `20px` | `16px` | `14px` | `12px`
- The levels correspond to the levels of the `<Text />` component

**Example of using the component:**

```tsx
import { Highlight } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  const styles: React.CSSProperties = {
    color: 'black'
  }

  return (
    <>
      <Highlight level={1} bgColor={red} weight='extrabold' style={styles}>
        Highlighted Text
      </Highlight>
    </>
  )
}
```