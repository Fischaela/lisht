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
						var that = this;
						// console.log(this);

						// Stops some browsers from redirecting.
						if (e.stopPropagation) {
							e.stopPropagation();
						}

						this.classList.remove('over');

						var item = document.getElementById(e.dataTransfer.getData('Text'));
						console.log(this);
						console.log(item);

						scope.$apply(function () {
							that.appendChild(item);
						});


						return false;
					},
					false
				);
			}
		};
	});
