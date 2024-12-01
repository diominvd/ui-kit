# Text

### Supported props
- level: `1` | `2` | `3` | `4`
- color: `'text-100'` | `'text-90'` | `'text-0'`
- weight: `'regular'` | `'semibold'` | `'extrabold'`
- style?: `React.CSSProperties`
- children: `React.ReactNode`

### Useful tips

- Sizes of levels: `20px` | `16px` | `14px` | `12px`
- It is recommended to use the text level together with the corresponding headline level

**Example of using the component:**

```tsx
import { Text } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  const styles: React.CSSProperties = {
    backgroundColor: 'green'
  }

  return (
    <>
      <Text level={1} color='light' weight='regular' style={styles}>
        Some text can be placed here
      </Text>
    </>
  )
}
```