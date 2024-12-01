import { l1, l2, l3, l4 } from '@/lib/types/levels.ts';
import { Blue, Green, Pink, Red, Text100, Text90, Violet, Yellow } from '@t/colors.ts';


export interface LinkInterface {
  href: string;
  /** 
   * Levels for text
   * - level 1 - `font-size: 20px`
   * - level 2 - `font-size: 16px`
   * - level 3 - `font-size: 14px`
   * - level 4 - `font-size: 12px` 
   */
  level: l1 | l2 | l3 | l4;
    /** 
   * Color filters for link
   * - text-100 - `#ebebeb`
   * - text-90 - `#888888`
   * - yellow - `#dab660`
   * - violet - `#9869c6`
   * - red - `#d65f4a`
   * - green - `#3ebb76`
   * - blue - `#648ec0`
   * - pink - `#a758aa`
   */
  color: Text100 | Text90 | Yellow | Violet | Red | Green | Blue | Pink;
  underline?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}
