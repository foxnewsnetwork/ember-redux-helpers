import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Page from '../../tests/pages/xfire';

moduleForAcceptance('Acceptance | dispatch');

test('handling dispatches', function(assert) {
  Page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/xfire');
    assert.equal(Page.nickname, 'rover');
    Page.writeNickname('edward');
  });

  andThen(function() {
    assert.equal(Page.nickname, 'edward');
  });
});
