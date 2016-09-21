/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-credit-card',
  included: function(app) {
    this._super.included(app);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/card/dist/card.js');
    }
  }
};
