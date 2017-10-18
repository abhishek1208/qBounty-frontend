import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  instances: DS.attr('number'),
  owner: DS.belongsTo('user'),
  claims: DS.hasMany('claim')
});
