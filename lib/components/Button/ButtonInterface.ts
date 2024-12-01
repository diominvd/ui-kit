import { Blue, Green, Pink, Red, Surface0, Violet, Yellow } from '@t/colors.ts';
import { Left, Right } from '@t/positions.ts';


export interface ButtonInterface {
  /**
   * By default, the button is active
   */
  disabled?: boolean;
  mode: 'base' | 'outline';
  /** 
   * Colors for button
   * - surface-0 - `background-color: #ebebeb`
   * - yellow - `background-color: #dab660`
   * - violet - `background-color: #9869c6`
   * - red - `background-color: #d65f4a`
   * - green - `background-color: #3ebb76`
   * - blue - `background-color: #648ec0`
   * - pink - `background-color: #a758aa`
   */
  bgColor?: Surface0 | Yellow | Violet | Red | Green | Blue | Pink;
  /** 
   * Icon must be realized with `<Icon />` from this library or default HTML tag `<img />`
   */
  icon?: React.ReactNode;
  /**
   * Position for button icon
   * - left - icon before button text
   * - right - icon after button text
   */
  iconPosition?: Left | Right;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
