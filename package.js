Package.describe({
  summary: "Bean - an events api for javascript, packaged for Meteor",
  version: "0.0.1",
  git: "https://github.com/Agnito/meteor-bean.git",
  name: "agnito:bean"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.addFiles('bean.js', 'client');
});

