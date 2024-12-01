// Interfaces;
import { HeadlineInterface } from './HeadlineInterface.ts';
// Styles;
import './Headline.scss';


/**
 * @param level Size of headline 
 * @param color Color of headline
 * @param weight Thickness of headline
 * @param style Additional CSS properties (optional)
 * @param children Content
 * @example
 * ```
 * <Headline level={1} color='light' weight='regular' style={{backgroundColor: 'red'}}>Some headline text</Headline>
 * ```
 */
export const Headline: React.FC<HeadlineInterface> = ({ level, color, weight, style, children }): JSX.Element => {
  return (
    <p className={`headline level-${level} color-${color} weight-${weight}`} style={style}>
      { children }
    </p>
  );
};
