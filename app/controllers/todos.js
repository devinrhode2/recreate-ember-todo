import Ember from "ember";

console.log('Todos controller');

export default Ember.ArrayController.extend({
  randomNumber: function(){
    console.log('computed args',arguments,this);
    return parseInt(Math.random() * 100);
  }.property(),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title) { return false; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });
      console.log('BOOM', this.store);

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});