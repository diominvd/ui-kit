import { l1, l2, l3, l4 } from '@t/levels.ts';
import { Text0, Text100, Text90 } from '@t/colors.ts';
import { Extrabold, Regular, Semibold } from '@t/weights.ts';


export interface HeadlineInterface {
  /** 
   * Levels for headline
   * - level 1 - `font-size: 48px`
   * - level 2 - `font-size: 32px`
   * - level 3 - `font-size: 22px`
   * - level 4 - `font-size: 18px` 
   */
  level: l1 | l2 | l3 | l4;
  /** 
   * Colors for headline
   * - text-100 - `color: #ebebeb`
   * - text-90 - `color: #888888`
   * - text-0 - `color: #181818`
   */
  color: Text100 | Text90 | Text0;
  /** 
   * Weights for headline
   * - regular - `font-weight: 400`
   * - semibold - `font-weight: 600`
   * - extrabold - `font-weight: 800`
   */
  weight: Regular | Semibold | Extrabold;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
