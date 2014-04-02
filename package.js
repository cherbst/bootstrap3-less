Package.describe({ summary: 'Bootstrap 3, with Less files.' });

Package.on_use(function (api) {
  api.use('less', 'client');

  // fonts
  api.add_files('lib/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('lib/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('lib/fonts/glyphicons-halflings-regular.ttf', 'client');
  api.add_files('lib/fonts/glyphicons-halflings-regular.woff', 'client');
});
