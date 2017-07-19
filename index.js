/* eslint-env node */
'use strict';

var path = require('path');
var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-credit-card',

  treeForVendor(vendorTree) {
    var cardJs = new Funnel(
      path.join(this.project.root, 'bower_components', '/card/dist/'),
      { files: ['card.js'] }
    );

    cardJs = map(
      cardJs,
      content => `if (typeof FastBoot === 'undefined') { ${content} }`
    );

    return vendorTree ? new MergeTrees([vendorTree, cardJs]) : cardJs;
  },

  included() {
    this.import('vendor/card.js');
  }
};
