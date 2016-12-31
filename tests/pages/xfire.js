import {
  create,
  visitable,
  fillable,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/xfire'),
  writeNickname: fillable('.testspace-nickname'),
  nickname: text('.testspace-nickname-display')
});
