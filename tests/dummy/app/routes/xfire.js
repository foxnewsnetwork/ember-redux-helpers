import Ember from 'ember';
import connect from 'ember-redux-route-connect';

function statesC({ pet }) {
  return { pet };
}

const TestspaceRoute = Ember.Route.extend({});

export default connect(statesC)(TestspaceRoute);
