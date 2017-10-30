angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello There");
    }
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
.service('dataService', function() {
    
});
