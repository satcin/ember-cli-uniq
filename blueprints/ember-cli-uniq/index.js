/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addBowerPackageToProject('uniq');
  }
};