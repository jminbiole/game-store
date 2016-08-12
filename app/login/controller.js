import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login(user) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator,
        { identification: user.email, password: user.password });
    },
  },
});
