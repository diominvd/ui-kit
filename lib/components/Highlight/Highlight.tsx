// Interfaces;
import { HighlightInterface } from './HighlightInterface.ts';
// Styles;
import './Highlight.scss';


/**
 * @param level Size of highlight text
 * @param bgColor Color of highlight background
 * @param weight Thickness of text
 * @param style Additional CSS properties (optional)
 * @param children Content
 * @example
 * ```
 * <Highlight level={1} bgColor={red}>HighlightedText</Highlight>
 * ```
 */
export const Highlight: React.FC<HighlightInterface> = ({ level, bgColor, weight, style, children }): JSX.Element => {
  return (
    <span className={`highlight level-${level} color-${bgColor} weight-${weight}`} style={style}>
      { children }
    </span>
  );
};
