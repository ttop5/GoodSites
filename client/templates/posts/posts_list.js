var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'Blog',
    url: 'https://github.com/ttop5/blog/issues'
  }
];

Template.postsList.helpers({
  posts: postsData
});
