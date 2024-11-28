import React from 'react';
// Styles;
import '@styles/components/Icon.scss';


interface IconInterface {
  path: string;
  /** `48px` | `32px` | `22px` | `16px` | `12px` */
  level: 1 | 2 | 3 | 4 | 5;
  /** `#ebebeb` | `#181818` | `#888888` | `#dab660` | `#9869c6` | `#d65f4a` | `#3ebb76` | `#648ec0` | `#a758aa` */
  filter?: 'light' | 'dark' | 'gray' | 'yellow' | 'violet' | 'red' | 'green' | 'blue' | 'pink';
  altText?: string;
}

/**
 * @param path path to icon
 * @param level size of icon
 * @param filter color of icon filter (optional)
 * @param altText alternative text (optional)
 * @returns 
 */
export const Icon: React.FC<IconInterface> = ({ path, level, filter, altText }): JSX.Element => {
  return (
    <div className='icon__wrapper'>
      <img className={`icon level-${level} filter-${filter}`} src={path} alt={altText} />
    </div>
  );
};