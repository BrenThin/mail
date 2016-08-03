/**
 * ownCloud - Mail
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Tahaa Karim <tahaalibra@gmail.com>
 * @copyright Tahaa Karim 2016
 */

define(function(require) {
	'use strict';

	var Marionette = require('marionette');
	var SignatureView = require('views/signature-view');

	return Marionette.CollectionView.extend({
		collection: null,
		tagName: 'table',
		childView: SignatureView,
		currentAccount: null,
		initialize: function(options) {
			this.currentAccount = options.currentAccount;
			this.collection = this.currentAccount.get('aliases');
		}
	});
});
