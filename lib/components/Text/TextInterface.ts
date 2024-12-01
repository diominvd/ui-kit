import { Text0, Text100, Text90 } from '@/lib/types/colors.ts';
import { l1, l2, l3, l4 } from '@/lib/types/levels.ts';
import { Extrabold, Regular, Semibold } from '@/lib/types/weights.ts';


export interface TextInterface {
  /** 
   * Levels for text
   * - level 1 - `font-size: 20px`
   * - level 2 - `font-size: 16px`
   * - level 3 - `font-size: 14px`
   * - level 4 - `font-size: 12px` 
   */
  level: l1 | l2 | l3 | l4;
  /** 
   * Colors for text
   * - text-100 - `color: #ebebeb`
   * - text-90 - `color: #888888`
   * - text-0 - `color: #181818`
   */
  color: Text100 | Text90 | Text0;
  /** 
   * Weights for text
   * - regular - `font-weight: 400`
   * - semibold - `font-weight: 600`
   * - extrabold - `font-weight: 800`
   */
  weight: Regular | Semibold | Extrabold;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
