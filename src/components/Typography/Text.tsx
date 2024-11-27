import React from 'react';
// Styles;
import '@styles/components/Text.scss';


interface TextInterface {
  /** `20px` | `16px` | `14px` | `12px` */
  level: 1 | 2 | 3 | 4;
  /** `#ebebeb` | `#888888` | `#181818` */
  color: 'light' | 'gray' | 'dark-gray';
  /** `400` | `600` | `800` */
  weight: 'regular' | 'semibold' | 'extrabold';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * @param level size of text 
 * @param color color of text
 * @param weight thickness of text
 * @param style additional CSS properties
 */
export const Text: React.FC<TextInterface> = ({ level, color, weight, style, children }): JSX.Element => {
  return (
    <p className={`text level-${level} color-${color} weight-${weight}`} style={style}>
      { children }
    </p>
  );
};