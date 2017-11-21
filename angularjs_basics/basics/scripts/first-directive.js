angular.module('todoListApp').directive('firstDirective', function() {
    
 //This callback function return an object, which is the directive
    return {
        template: "This is the first directive"
    }    
});