angular.module('home.expenseApp', [])
    .controller('loginController', [ '$scope', function ($scope) {
        $scope.avatarUrl = "images/default-avatar.png";
        $scope.login = function () {
            if ($scope.username === "pragnika") {
                $scope.avatarUrl = "images/pragnika.jpg";
            } else if ($scope.username === "bharath") {
                $scope.avatarUrl = "images/bharath.jpg";
            } else if ($scope.username === "anusha") {
                $scope.avatarUrl = "images/anusha.jpg";
            }
        }
    }]);
