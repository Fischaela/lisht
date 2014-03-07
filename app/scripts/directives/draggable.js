'use strict';

angular.module('lishtApp')
	.directive('draggable', function () {
		return {
			scope: {
				hyperlink: '=draggable',
				parentList: '=parent',
				all: '='
			},
			link: function (scope, element) {
				// this gives us the native JS object
				var el = element[0],
					jsonListData = localStorage.getItem('GEILDANKE-lisht');

				// console.log(jsonListData);

				el.draggable = true;

				el.addEventListener(
					'dragstart',
					function(e) {
						var index = this.id;
						// console.log(index);

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

				// WHY IS THE SCOPE UNDEFINED?!
				scope.deleteListItem = function (parentIndex, index) {
					console.log(scope.all[parentIndex]);

					scope.all[parentIndex].hyperlinks.splice(index, 1);
					// scope.lists[parentIndex].hyperlinks.splice(index, 1);

					jsonListData = JSON.stringify(scope.all);
					localStorage.setItem('GEILDANKE-lisht', jsonListData);
				};
			}
		};
	});
