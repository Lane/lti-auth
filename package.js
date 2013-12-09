Package.describe({
  summary: "LTI Authentication"
});

/**
 * Ex: Some NPM Dependencies
 */
Npm.depends({
  'querystring': {},
  'crypto': {},
  'fs': {},
  'https': {},
  'url': {},
  'request': {}
});

/**
 * On use we'll add files and export our tool
 */
Package.on_use(function (api) {
  /**
   * Add all the files, in the order of their dependence (eg, if A.js depends on B.js, B.js must be before A.js)
   */
  api.add_files(['lib/lti-auth.js'],'server'); // Can be 'server', 'client' , ['client','server']

  /**
   * Only expose the My constructor, only export if meteor > 6.5
   */
  if (typeof api.export !== 'undefined') {
    api.export(['Provider'], 'server'); // 1st arg can be array of exported constructors/objects, 2nd can be 'server', 'client', ['client', 'server']
  }
});