// images.ts
import Images from '../../resource/**/*.png';
import { iterate } from './utils';

export default Object.assign(...iterate(Images, ''));
