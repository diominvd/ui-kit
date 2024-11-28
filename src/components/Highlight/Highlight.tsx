import React from 'react';
// Styles;
import '@styles/components/Highlight.scss';


interface HighlightInterface {
  /** `20px` | `16px` | `14px` | `12px` */
  level: 1 | 2 | 3 | 4;
  /** `#888888` | `#997624` | `#713ea3` | `#812c1d` | `#1e5c3a` | `#2f4f74` | `#562d58` */
  color: 'gray' | 'yellow' | 'violet' | 'red' | 'green' | 'blue' | 'pink';
  /** `400` | `600` | `800` */
  weight: 'regular' | 'semibold' | 'extrabold';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * @param level size of highlight text
 * @param color color of highlight background
 * @param weight thickness of text
 * @param style additional CSS properties (optional)
 * @example
 * ```
 * <Highlight level={1} color={red}>HighlightedText</Highlight>
 * ```
 */
export const Highlight: React.FC<HighlightInterface> = ({ level, color, weight, children, style }): JSX.Element => {
  return (
    <span className={`highlight level-${level} color-${color} weight-${weight}`} style={style}>
      { children }
    </span>
  );
};