angular.module('home.expenseApp', [])
    .controller('loginController', function($scope, avatarService) {
        $scope.avatarUrl = "images/default-avatar.png";
        $scope.showMenu = false;
        $scope.login = function () {
            $scope.avatarUrl = avatarService.getAvatarUrl($scope.username);
            $scope.showMenu = true;
        }
    });
