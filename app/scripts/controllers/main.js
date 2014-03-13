'use strict';

angular.module('lishtApp')
	.controller('ListCtrl', function ($scope) {

		var jsonListData = localStorage.getItem('GEILDANKE-lisht'),
			jsonColorData = localStorage.getItem('GEILDANKE-options');

		if (jsonColorData !== null) {
			$scope.activeClass = jsonColorData;
		} else {
			$scope.activeClass = 'pink';
		}

		if (jsonListData !== null) {
			$scope.lists = JSON.parse(jsonListData);
			// Debugging
			// console.log(jsonListData);
			// localStorage.clear();
		} else {
			// Debugging
			// console.log('JSON data loaded');
			$scope.lists = [
				{
					'hyperlinks': [
						{
							'name': 'twitter',
							'url': 'http://www.twitter.com'
						},
						{
							'name': 'dribbble',
							'url': 'http://dribbble.com'
						},
						{
							'name': 'codepen',
							'url': 'http://codepen.io'
						}
					]
				},
				{
					'hyperlinks': [
						{
							'name': 'Designer News',
							'url': 'https://news.layervault.com'
						},
						{
							'name': 'Smashing Magazine',
							'url': 'http://www.twitter.com'
						},
						{
							'name': 'Hackernews',
							'url': 'http://news.ycombinator.com'
						}
					]
				},
				{
					'hyperlinks': [
						{
							'name': 'Mail',
							'url': 'https://mail.google.com'
						},
						{
							'name': 'Kalender',
							'url': 'https://www.google.com/calendar'
						},
						{
							'name': 'kippt',
							'url': 'https://kippt.com/feed'
						}
					]
				}
			];
		}

		$scope.addListItem = function (index) {
			var newListItem = {
					name: $scope.lists[index].newItemName,
					url: $scope.lists[index].newItemURL
				},
				jsonListData = '';
			$scope.lists[index].hyperlinks.push(newListItem);
			$scope.lists[index].newItemName = '';
			$scope.lists[index].newItemURL = '';
			jsonListData = JSON.stringify($scope.lists);
			localStorage.setItem('GEILDANKE-lisht', jsonListData);
		};

		$scope.handleDragStart = function (e) {
			var listItem = JSON.stringify(this.hyperlink);

			e.dataTransfer.setData('text/plain', listItem);
		};

		$scope.handleDragEnd = function (e) {
			var index = this.$index,
				parentIndex = this.$parent.$index;

			// Check if dragging was successful
			if (e.dataTransfer.dropEffect !== 'none') {
				$scope.$apply( function () {
					$scope.lists[parentIndex].hyperlinks.splice(index, 1);
				});
			}

			jsonListData = JSON.stringify($scope.lists);
			localStorage.setItem('GEILDANKE-lisht', jsonListData);
		};

		$scope.handleDrop = function(e) {
			var newItem = JSON.parse(e.dataTransfer.getData('text/plain')),
				listIndex = this.$index;

			$scope.lists[listIndex].hyperlinks.push(newItem);
			jsonListData = JSON.stringify($scope.lists);
			localStorage.setItem('GEILDANKE-lisht', jsonListData);
		};
	});