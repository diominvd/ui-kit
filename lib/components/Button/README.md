# Button

### Supported props
- disabled?: `boolean`
- mode: `'base'` | `'outline'`
- bgColor: `'surface-0'` | `'yellow'` | `'violet'` | `'red'` | `'green'` | `'blue'` | `'pink'`
- icon?: `React.ReactNode`
- iconPosition?: `'left'` | `'right'`
- style?: `React.CSSProperties`
- children: `React.ReactNode`

### Useful tips

- By default, the `bgColor` attribute has the value `'surface-0'`
- When using an icon, specifying the `iconPosition` parameter is mandatory
- If you decide to implement the icon through the `<Icon />` component, it is recommended to set the size to `4 (16px)`

**Example of using the component:**

```tsx
import { Button, Icon } from '@diominvd/ui-kit';

export const MyComponent: React.FC = () => {
  return (
    <>
      <Button mode='base' bgColor='blue' iconPosition='left' icon={
        <Icon path='path/to/icon.svg' level={4} filter='surface-0' altText='some alt text' />
      }>
        Some button text
      </Button>
    </>
  )
}
```