import React from 'react';
// Styles;
import '@styles/components/Link.scss';


interface LinkInterface {
  href: string;
  /** `#ebebeb` | `#888888` | `#dab660` | `#9869c6` | `#d65f4a` | `#3ebb76` | `#648ec0` | `#a758aa` */
  color: 'light' | 'gray' | 'yellow' | 'violet' | 'red' | 'green' | 'blue' | 'pink';
  underline?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

/**
 * @param href link
 * @param color link color
 * @param underline optional for decorate link text
 * @param icon optional for display link icon
 * @example
 * ```
 * <Link href='https://google.com' color='blue' underline icon>SomeTextHere</Link>
 * ```
 */
export const Link: React.FC<LinkInterface> = ({ href, color, underline=false, icon=false, children }): JSX.Element => {
  return (
    <div className='link__wrapper'>
      <a className={`link color-${color} underline-${underline}`} href={href}>
        { children }
      </a>
      { icon && 
        <img className='link__icon' src='/src/assets/icons/external-link.svg' alt='link-icon' /> 
      }
    </div>
  );
};