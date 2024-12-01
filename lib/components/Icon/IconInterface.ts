import { Blue, Green, Pink, Red, Text0, Text100, Text90, Violet, Yellow } from '@t/colors';
import { l1, l2, l3, l4, l5 } from '@t/levels.ts';


export interface IconInterface {
  path: string;
  /** 
   * Levels for icon
   * - level 1 - `width, height: 248x`
   * - level 2 - `width, height: 32px`
   * - level 3 - `width, height: 22px`
   * - level 4 - `width, height: 16px` 
   * - level 5 - `width, height: 12px` 
   */
  level: l1 | l2 | l3 | l4 | l5;
  /** 
   * Color filters for icon
   * - text-100 - `#ebebeb`
   * - text-90 - `#888888`
   * - text-0 - `#262626`
   * - yellow - `#dab660`
   * - violet - `#9869c6`
   * - red - `#d65f4a`
   * - green - `#3ebb76`
   * - blue - `#648ec0`
   * - pink - `#a758aa`
   */
  filter?: Text100 | Text90 | Text0 | Yellow | Violet | Red | Green | Blue | Pink;
  altText?: string;
}
