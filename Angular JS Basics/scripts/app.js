'use strict';

angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
    
    $scope.addTodo = function() {
        var todo = {name: "This is a new todo."};
//        $scope.todos.push(todo);
        $scope.todos.unshift(todo);//unshift add element at the begining of the list
    };
    
    //$scope.todo = dataService.getTodos; This won't work because $scope.todo is created empty before the asynchronous invocation has the response from the servive.
    // We have to create a callback method:
    dataService.getTodos(function(response) {
       console.log(response.data);
       $scope.todos = response.data;//We attach the response to todos
    });
    
    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
    
    $scope.saveTodo = function(todo) {
      dataService.saveTodo(todo);
    };
})
//prototypical inheritance
// Using ng-inspector, I see that there are now three scopes. There's the root scope, the main controller scope, and the cool controller scope.
// Keep in mind, all the scopes phototypically inherit from the root scope and there's only one root scope in an angular application.
// generally best practice to not use the root scope directly in your application. The major reason is because any function or value you create in the root scope // is available in every other scope. Creating functions and values at the root level, will quickly clutter your application.
// Because of prototypical inheritance, the cool controller inherits functions and values from the main controller. 
// Only when they don't already exist within the cool controller's scope.
// Prototypical inheritance only flows from parent to children
.controller('coolCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("This is not the main Controller");
    }
})
//Sibling controllers are totally assolated     
.controller('imASibling', function($scope) {
    $scope.helloWorld = function() {
        console.log("This is not the main Controller");
    }
})
.service('dataService', function($http) {
    /* this.getTodos = $http.get('mock/todos.json')
        .then(function(response) {
       //The then method is used to execute code after a response has been received from the server. The first parameter in then is going 
       //to be the callback function that's executed when a successful response is received.
        console.log(response.data);
        return response.data;
    })*/
    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback);
    };
    
    this.deleteTodo = function(todo) {
      console.log("The " + todo.name + " has been deleted!");      
    };
    
    this.saveTodo = function(todo) {
      console.log("The " + todo.name + " was saved!");
    };  
    
});
