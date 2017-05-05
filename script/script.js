
var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];
	$scope.oldList = [{todoText:'Clean House', done:true}];
	$scope.removeList = [{todoText:'Buy groceries', done:true}];
	$scope.archiveList = [{todoText:'Hit gym', done:true}];
	$scope.completedList = [{todoText:'Clean car', done:true}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };
	
	//Function for adding task to the task list
      $scope.addImgTask = function() {
        
        $scope.todoList.push({todoText:$scope.todoInput, done:false, img:'images/mini.jpg'});
        $scope.todoInput = "";
      };

    $scope.remove = function() {
        $scope.oldList = $scope.todoList;//copy lists 
        $scope.todoList = [];
        angular.forEach($scope.oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);//based on done criteria push back to todo list
			if (x.done) $scope.removeList.push(x);
        });
    };
	
	$scope.archive = function() {
        $scope.oldList = $scope.todoList;//copy lists 
        $scope.todoList = [];
        angular.forEach($scope.oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);//based on done criteria push back to todo list
			if (x.done) $scope.archiveList.push(x);
        });
    };
	
	$scope.complete = function() {
        $scope.oldList = $scope.todoList;//copy lists 
        $scope.todoList = [];
        angular.forEach($scope.oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);//based on done criteria push back to todo list
			if (x.done) $scope.completedList.push(x);
        });
    };
	
	
	
	
});
