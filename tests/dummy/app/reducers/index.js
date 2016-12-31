import Ember from 'ember';

const DEFAULT_PET = { nickname: 'rover' };
export default {
  pet(state, { type, payload }) {
    if(Ember.isBlank(state)) {
      state = DEFAULT_PET;
    }
    if(type === 'UPDATE_MODEL') {
      const { key, value } = payload;
      Ember.set(state, key, value);
    }
    return state;
  }
};
