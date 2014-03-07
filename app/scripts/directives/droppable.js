'use strict';

angular.module('lishtApp')
	.directive('droppable', function () {
		return {
			scope: {
				list: '=',
				drop: '&'
			},
			link: function (scope, element) {
				// again we need the native object
				var el = element[0];
				// console.log(el);

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
					function(e) {
						// console.log(e);
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragleave',
					function(e) {
						// console.log(e);
						this.classList.remove('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'drop',
					function(e) {
						var hyperlink;

						// Stops some browsers from redirecting.
						if (e.stopPropagation) {
							e.stopPropagation();
						}

						this.classList.remove('over');

						hyperlink = JSON.parse(e.dataTransfer.getData('text'));
						scope.$apply(function () {
							scope.list.hyperlinks.push(hyperlink);
						});

						return false;
					},
					false
				);
			}
		};
	});
