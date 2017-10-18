import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  instances: DS.attr('number'),
  owner: DS.belongsTo('users'),
  claims: DS.hasMany('claims')
});
