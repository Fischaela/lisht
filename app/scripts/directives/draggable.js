'use strict';

angular.module('lishtApp')
	.directive('draggable', function () {
		return {
			scope: {
				hyperlink: '=draggable'
			},
			link: function (scope, element) {
				// this gives us the native JS object
				var el = element[0];

				el.draggable = true;

				el.addEventListener(
					'dragstart',
					function(e) {
						console.log(scope.hyperlink);
						e.dataTransfer.effectAllowed = 'move';
						e.dataTransfer.setData('text', JSON.stringify(scope.hyperlink));
						this.classList.add('drag');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragend',
					function(e) {
						// console.log(e);
						this.classList.remove('drag');
						return false;
					},
					false
				);
			}
		};
	});
