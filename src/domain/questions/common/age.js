import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'age';

export default {
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'years',
  show: alwaysShow,
  output: alwaysGreen,
};
