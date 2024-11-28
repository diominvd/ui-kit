import React from 'react';
// Styles;
import '@styles/components/Button.scss';


interface ButtonInterface {
  disabled?: boolean;
  mode: 'base' | 'outline';
  /** `#ebebeb` | `#dab660` | `#9869c6` | `#d65f4a` | `#3ebb76` | `#648ec0` | `#a758aa` */
  color?: 'light' | 'yellow' | 'violet' | 'red' | 'green' | 'blue' | 'pink';
  /** must be realized with \<Icon /> or \<img /> */
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * @param disabled
 * @param mode style of button
 * @param color color of button background
 * @param icon recommended icon level: 5 (12px) (optional)
 * @param iconPosition position of icon (optional)
 * @param style additional CSS properties (optional)
 * @example Without icon
 * ```
 * <Button mode='base' color='light'>ClickMe</Button>
 * ```
 * @example With icon
 * ```
 * <Button mode='base' color='red' icon={<Icon path='some/path/icon.svg' level={5} filter='light' />}>ClickMe</Button>
 * ```
 */
export const Button: React.FC<ButtonInterface> = ({ disabled, mode, color='light', icon, iconPosition, style, children }): JSX.Element => {
  return (
    <button disabled={disabled} className={`button mode-${mode} color-${color} icon-position-${iconPosition}`} style={style}>
      { iconPosition === 'left' && icon }
      { children }
      { iconPosition === 'right' && icon }
    </button>
  );
};