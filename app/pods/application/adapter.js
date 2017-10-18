import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://cb-qbounty.herokuapp.com',
  namespace: 'api',
  pathForType: type => type
});
