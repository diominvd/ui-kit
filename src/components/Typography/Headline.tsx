import React from 'react';
// Styles;
import '@styles/components/Headline.scss';


interface HeadlineInterface {
  /** `48px` | `32px` | `22px` | `18px` */
  level: 1 | 2 | 3 | 4;
  /** `#ebebeb` | `#888888` | `#181818` */
  color: 'light' | 'gray' | 'dark-gray';
  /** `400` | `600` | `800` */
  weight: 'regular' | 'semibold' | 'extrabold';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * @param level size of headline 
 * @param color color of headline
 * @param weight thickness of headline
 * @param style additional CSS properties
 */
export const Headline: React.FC<HeadlineInterface> = ({ level, color, weight, style, children }): JSX.Element => {
  return (
    <p className={`headline level-${level} color-${color} weight-${weight}`} style={style}>
      { children }
    </p>
  );
};