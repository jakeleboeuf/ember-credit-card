/* jshint node: true */
'use strict';
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-credit-card',

  treeForVendor(defaultTree) {
    var browserVendorLib = new Funnel(app.bowerDirectory + '/card/dist/card.js');

    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([defaultTree, browserVendorLib]);
  }

  included() {
    // this file will be loaded in FastBoot but will not be eval'd
    app.import(app.bowerDirectory + '/card/dist/card.js');
  }

};
