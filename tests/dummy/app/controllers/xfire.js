import Ember from 'ember';

export default Ember.Controller.extend({
  updateModel: (key, value) => ({
    type: 'UPDATE_MODEL',
    payload: { key, value }
  }),
  callMe(v) {
    Ember.Logger.warn('[callMe]: ', v);
  }
});
