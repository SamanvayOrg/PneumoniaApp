import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfFalse} from '../utils';

const key = 'passedUrineInPast6Hours';

const output = form => redIfFalse(form[key]);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
