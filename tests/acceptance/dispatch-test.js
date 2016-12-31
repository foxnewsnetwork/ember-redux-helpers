import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Page from '../../tests/pages/xfire';

function idleFor(time) {
  return new Ember.RSVP.Promise((resolve) => window.setTimeout(resolve, time));
}

moduleForAcceptance('Acceptance | dispatch');

test('handling dispatches', function(assert) {
  Page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/xfire');
    assert.equal(Page.nickname, 'rover');
    Page.writeNickname('edward');
    return idleFor(15);
  });

  andThen(function() {
    assert.equal(Page.nickname, 'edward');
  });
});
