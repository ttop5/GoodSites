Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waiteOne: function() {
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {name: 'postsList'});
