angular.module('todoListApp')
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
    
    $scope.saveTodos = function() {
      var filteredTodos = $scope.todos.filter(function(todo) {
        if(todo.edited) {
          return todo;
        }
      });    
      dataService.saveTodos(filteredTodos);
    };
});