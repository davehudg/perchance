var app = angular.module('newApp, []')
app.controller('personCtrl', function($scope){
    $scope.Person = [{
        name: "",
        age: "",
        gender: "",
        hairColor: "",
        eyeColor: "",
        skinColor: "",
        height: ""
    }];

    function setPerson (){
        let person = [{
            name: "John Doe",
            age: "21",
            gender: "male",
            hairColor: "blonde",
            eyeColor: "brown",
            skinColor: "fair",
            height: "180"
        }]; 
    }
});