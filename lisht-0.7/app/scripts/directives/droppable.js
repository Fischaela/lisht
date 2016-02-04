'use strict';

angular.module('lishtApp')
	.directive('droppable', function () {
		return {
			restrict: 'A',
			link: function (scope, element) {
				var el = element[0];

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
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragleave',
					function() {
						this.classList.remove('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'drop',
					function(e) {

						// Stops some browsers from redirecting.
						if (e.stopPropagation) {
							e.stopPropagation();
						}

						this.classList.remove('over');
						scope.handleDrop(e);

						return false;
					},
					false
				);
			}
		};
	});
