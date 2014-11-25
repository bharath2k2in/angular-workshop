angular.module('home.expenseApp').service('avatarService', function () {

    this.getAvatarUrl = function(username) {
        if (username === "pragnika") {
            return "images/pragnika.jpg";
        } else if (username === "bharath") {
            return "images/bharath.jpg";
        } else if (username === "anusha") {
            return "images/anusha.jpg";
        }
    }
});