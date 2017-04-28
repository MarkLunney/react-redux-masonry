import {combineReducers} from 'redux';
import content from './content';
import header from './header';

export default combineReducers({
  content, header
});
