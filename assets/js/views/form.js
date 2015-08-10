//for my entire form
var Formview = Backbone.View.extend({
  template: AppTemplates.app,

  //call my target
  el: '#target',

  initialize:function() {
    this.render();
  },

  events: {
    'submit form': 'createPerson'
  },
  createPerson: function(ev) {
    ev.preventDefault();

    var firstName = this.$('.first-name').val();
    var lastName = this.$('.last-name').val();
    var address = this.$('.address').val();
    var phone = this.$('.phone').val();

    this.model.save({
      firstname: firstName,
      lastName: lastName,
      address: address,
      phone: phone
    });
    this.$('.firstname').val('');
    this.$('.lastname').val('');
    this.$('.address').val('');
    this.$('.phone').val('');

    this.model = new Person();
  },

  //onSubmit, always call render at end
  render: function() {

    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }

});
