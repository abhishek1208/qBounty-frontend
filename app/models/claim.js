import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  link: DS.attr('string'),
  claimant: DS.belongsTo('user'),
  task: DS.belongsTo('task')
});
