import Ember from 'ember';
// casually stolen from ember-route-action-helper
let ClosureActionModule;

if ('ember-htmlbars/keywords/closure-action' in Ember.__loader.registry) {
  ClosureActionModule = Ember.__loader.require('ember-htmlbars/keywords/closure-action');
} else if ('ember-routing-htmlbars/keywords/closure-action' in Ember.__loader.registry) {
  ClosureActionModule = Ember.__loader.require('ember-routing-htmlbars/keywords/closure-action');
} else {
  ClosureActionModule = { };
}

export const ACTION = ClosureActionModule.ACTION;
