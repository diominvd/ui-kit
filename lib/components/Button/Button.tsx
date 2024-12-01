// Interfaces;
import { ButtonInterface } from './ButtonInterface.ts';
// Styles;
import './Button.scss';


/**
 * @param disabled
 * @param mode Style of button
 * @param bgColor Color of button background
 * @param icon Recommended icon level: 4 (16px) (optional)
 * @param iconPosition Position of icon (optional)
 * @param style Additional CSS properties (optional)
 * @param children Content
 * @example Without icon
 * ```
 * <Button mode='base' bgColor='light'>ClickMe</Button>
 * ```
 * @example With icon
 * ```
 * <Button mode='base' bgColor='red' icon={<Icon path='some/path/icon.svg' level={5} filter='light' />}>ClickMe</Button>
 * ```
 */
export const Button: React.FC<ButtonInterface> = ({ disabled=false, mode, bgColor='light', icon, iconPosition, style, children }): JSX.Element => {
  return (
    <button disabled={disabled} className={`button mode-${mode} color-${bgColor} icon-position-${iconPosition}`} style={style}>
      { iconPosition === 'left' && icon }
      { children }
      { iconPosition === 'right' && icon }
    </button>
  );
};
