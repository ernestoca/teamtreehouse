'use strict';

angular.module('todoListApp')
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
    
    this.saveTodos = function(todo) {
      console.log(todos.length + " todos have benn saved!");
    };  
    
});