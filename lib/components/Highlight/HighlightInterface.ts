import { DarkBlue, DarkGreen, DarkPink, DarkRed, DarkViolet, DarkYellow, Surface90 } from '@t/colors.ts';
import { l1, l2, l3, l4 } from '@t/levels.ts';
import { Extrabold, Regular, Semibold } from '@t/weights.ts';


export interface HighlightInterface {
  /** 
   * Levels for highlight
   * - level 1 - `font-size: 20px`
   * - level 2 - `font-size: 16px`
   * - level 3 - `font-size: 14px`
   * - level 4 - `font-size: 12px` 
   */
  level: l1 | l2 | l3 | l4;
  /** 
   * Colors for highlight
   * - surface-90 - `background-color: #262626`
   * - dark-yellow - `background-color: #997624`
   * - dark-violet - `background-color: #713ea3`
   * - dark-red - `background-color: #812c1d`
   * - dark-green - `background-color: #1e5c3a`
   * - dark-blue - `background-color: #2f4f74`
   * - dark-pink - `background-color: #562d58`
   */
  bgColor: Surface90 | DarkYellow | DarkViolet | DarkRed | DarkGreen | DarkBlue | DarkPink;
  /** 
   * Weights for highlight
   * - regular - `font-weight: 400`
   * - semibold - `font-weight: 600`
   * - extrabold - `font-weight: 800`
   */
  weight: Regular | Semibold | Extrabold;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
