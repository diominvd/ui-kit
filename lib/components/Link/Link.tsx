// Interfaces;
import { LinkInterface } from './LinkInterface.ts';
// Styles;
import './Link.scss';


/**
 * @param href Text of link
 * @param level Size of link
 * @param color Link color
 * @param underline Decorate link text (optional)
 * @param icon Display link icon (optional)
 * @param children Content
 * @example
 * ```
 * <Link href='https://google.com' color='blue' underline icon>SomeTextHere</Link>
 * ```
 */
export const Link: React.FC<LinkInterface> = ({ href, level, color, underline=false, icon=false, children }): JSX.Element => {
  const iconLevels: Record<number, string> = {
    1: '20px',
    2: '16px',
    3: '14px',
    4: '12px'
  };

  return (
    <div className='link__wrapper'>
      <a className={`link level-${level} color-${color} underline-${underline}`} href={href}>
        { children }
      </a>
      { 
        (icon === true) ? ( 
          <div className='link__icon'>
            <svg width={iconLevels[level]} height={iconLevels[level]} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M30 6H42M42 6V18M42 6L20 28M36 26V38C36 39.0609 35.5786 40.0783 34.8284 40.8284C34.0783 41.5786 33.0609 42 32 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V16C6 14.9391 6.42143 13.9217 7.17157 13.1716C7.92172 12.4214 8.93913 12 10 12H22' stroke='#888888' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </div>
        ) : null
      }
    </div>
  );
};
