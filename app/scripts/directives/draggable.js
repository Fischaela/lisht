'use strict';

angular.module('lishtApp')
	.directive('draggable', function () {
		return {
			scope: {
				hyperlink: '=draggable',
				parentList: '=parent'
			},
			link: function (scope, element) {
				// this gives us the native JS object
				var el = element[0];

				el.draggable = true;

				el.addEventListener(
					'dragstart',
					function(e) {
						var index = this.id;
						console.log(index);

						e.dataTransfer.effectAllowed = 'move';

						e.dataTransfer.setData('text', JSON.stringify(scope.hyperlink));

						this.classList.add('drag');
						scope.parentList.hyperlinks.splice(index, 1);

						return false;
					},
					false
				);

				el.addEventListener(
					'dragend',
					function() {
						// console.log(e);
						this.classList.remove('drag');
						return false;
					},
					false
				);
			}
		};
	});
