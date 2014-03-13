'use strict';

angular.module('lishtApp')
	.directive('draggable', function () {
		return {
			restrict: 'A',
			link: function (scope, element) {

				var el = element[0];

				el.draggable = true;

				el.addEventListener(
					'dragstart',
					function(e) {
						e.dataTransfer.effectAllowed = 'move';
						this.classList.add('drag');
						scope.handleDragStart(e);
						return false;
					},
					false
				);

				el.addEventListener(
					'dragend',
					function(e) {
						this.classList.remove('drag');
						scope.handleDragEnd(e);
						return false;
					},
					false
				);
			}
		};
	});