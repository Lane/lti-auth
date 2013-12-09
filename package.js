Package.describe({
  summary: "LTI Authentication"
});

/**
 * Ex: Some NPM Dependencies
 */
Npm.depends({
  'querystring': '0.2.0',
  'crypto': '0.0.3',
  'url': '0.7.9',
  'request': '2.29.0'
});

/**
 * On use we'll add files and export our tool
 */
Package.on_use(function (api) {

  api.add_files(['lib/lti-auth.js'],'server'); // Can be 'server', 'client' , ['client','server']

  if (typeof api.export !== 'undefined') {
    api.export(['Provider'], 'server');
  }
});