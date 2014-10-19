angular.module('home.expenseApp', [])
    .controller('loginController', [ '$scope', function ($scope) {
        $scope.avatarUrl = "images/default-avatar.png";
        $scope.login = function () {
            $scope.avatarUrl = getAvatarUrl($scope.username);
        }

        var getAvatarUrl = function (username) {
            if (username === "pragnika") {
                return "images/pragnika.jpg";
            } else if (username === "bharath") {
                return "images/bharath.jpg";
            } else if (username === "anusha") {
                return "images/anusha.jpg";
            }
        }
    }]);
