//this is where i put each person in a form
//this is where i do my model

var Person = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  },
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/ab-form'
});
