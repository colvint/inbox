Package.describe({
  name: 'tauruscolvin:inbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:collection2@2.5.0', 'server');

  api.addFiles('server/inbox.js', 'server');

  api.use('tauruscolvin:meteor-react-bootstrap@0.0.1', 'client');
  api.use('fortawesome:fontawesome@4.3.0', 'client');

  api.addFiles([
    'lib/inbox.js',
    'lib/components/mini-inbox.jsx'
  ], 'client');

  api.export('MiniInbox', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tauruscolvin:inbox');
  api.addFiles('inbox-tests.js');
});
