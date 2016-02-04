'use strict';

angular.module('lishtOptionsApp')
	.controller('OptionsCtrl', function ($scope) {

		var jsonColorData = localStorage.getItem('GEILDANKE-options');

		if (jsonColorData !== null) {
			$scope.activeClass = jsonColorData;
		} else {
			$scope.activeClass = 'pink';
		}

		console.log(jsonColorData);

		$scope.colors = [
			{
				color: 'pink-dark'
			},
			{
				color: 'pink'
			},
			{
				color: 'red-dark'
			},
			{
				color: 'red'
			},
			{
				color: 'orange-dark'
			},
			{
				color: 'orange'
			},
			{
				color: 'yellow-dark'
			},
			{
				color: 'yellow'
			},
			{
				color: 'green-dark'
			},
			{
				color: 'green'
			},
			{
				color: 'blue-dark'
			},
			{
				color: 'blue'
			},
			{
				color: 'black-dark'
			},
			{
				color: 'black'
			},
			{
				color: 'black-light'
			}
		];

		$scope.setActiveClass = function(index) {
			var jsonColorData = '';
			$scope.activeClass = $scope.colors[index].color;
			jsonColorData = $scope.activeClass;
			// console.log(jsonColorData);
			localStorage.setItem('GEILDANKE-options', jsonColorData);
		};
	});
