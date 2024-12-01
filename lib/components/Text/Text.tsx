// Interfaces;
import { TextInterface } from './TextInterface.ts';
// Styles;
import './Text.scss';


/**
 * @param level Size of text 
 * @param color Color of text
 * @param weight Thickness of text
 * @param style Additional CSS properties
 * @param children Content
 */
export const Text: React.FC<TextInterface> = ({ level, color, weight, style, children }): JSX.Element => {
  return (
    <p className={`text level-${level} color-${color} weight-${weight}`} style={style}>
      { children }
    </p>
  );
};
