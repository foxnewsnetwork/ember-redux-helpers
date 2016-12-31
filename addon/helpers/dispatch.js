import Ember from 'ember';
import { ACTION } from '../-private/internals';

const { inject: { service } } = Ember;

export function dispatch([reduxAction, ...params]) {
  const redux = this.get('redux');

  let emberAction = (...invokeArgs) => {
    const args = params.concat(invokeArgs);

    return Ember.run.join(() => {
      redux.dispatch(reduxAction(...args));
    });
  };

  emberAction[ACTION] = true;

  return emberAction;
}

export default Ember.Helper.extend({
  redux: service('redux'),
  compute: dispatch
});
