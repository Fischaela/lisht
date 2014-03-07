'use strict';

angular.module('lishtApp')
	.directive('droppable', function () {
		return {
			scope: {
				list: '=',
				drop: '&',
				all: '='
			},
			link: function (scope, element) {
				// again we need the native object
				var el = element[0],
					jsonListData = localStorage.getItem('GEILDANKE-lisht');

				el.addEventListener(
					'dragover',
					function(e) {
						e.dataTransfer.dropEffect = 'move';
						// allows us to drop
						if (e.preventDefault) {
							e.preventDefault();
						}
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragenter',
					function() {
						// console.log(e);
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragleave',
					function() {
						// console.log(e);
						this.classList.remove('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'drop',
					function(e) {
						var hyperlink,
							index = scope.all.indexOf(scope.list);

						// Stops some browsers from redirecting.
						if (e.stopPropagation) {
							e.stopPropagation();
						}

						this.classList.remove('over');

						hyperlink = JSON.parse(e.dataTransfer.getData('text'));
						scope.$apply( function () {
							scope.all[index].hyperlinks.push(hyperlink);
						});

						jsonListData = JSON.stringify(scope.all);
						localStorage.setItem('GEILDANKE-lisht', jsonListData);

						return false;
					},
					false
				);
			}
		};
	});
