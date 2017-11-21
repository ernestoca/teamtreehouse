angular.module('todoListApp')
.directive('todos', function() {
    //Second parameter of your directive is an anonymous call back function. Inside of that function we'll return an object which will be the directive itself.
   return {
       templateUrl: 'templates/todos.html',
       controller: "mainCtrl"       
       //replace: true //Angular will inject the template inside of the <todo></todo> tags and  get rid of the to-do tags themselves.
   } 
});