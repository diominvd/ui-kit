// Interface;
import { IconInterface } from './IconInterface.ts';
// Styles;
import './Icon.scss';


/**
 * @param path Path to icon
 * @param level Size of icon
 * @param filter Color of icon filter (optional)
 * @param altText Alternative text (optional)
 * @returns 
 */
export const Icon: React.FC<IconInterface> = ({ path, level, filter, altText }): JSX.Element => {
  return (
    <div className='icon__wrapper'>
      <img className={`icon level-${level} filter-${filter}`} src={path} alt={altText} />
    </div>
  );
};
