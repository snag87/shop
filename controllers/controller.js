/**
 * Created by itc_user on 7/17/2016.
 */

(function () {
    angular.module("shopApp").controller("mainController", function ($scope, $http, $routeParams) {

        $scope.prodId = $routeParams.prodId;

        if (!($scope.products)) { //only do an HTTP request if it's the first time calling the function
            $http.get("https://api.myjson.com/bins/3t3od")
                .then(function (response) {
                    if (!($scope.products)) {
                        console.log("accessing site");
                        $scope.products = response.data['storeItems'];
                    }
                });
        }

        $scope.addBoughtItem = function (x) {
            x.numBought = parseInt(x.numBought) + 1;
            x.totalCost = parseInt(x.numBought) * parseInt(x.price);
        };

        $scope.subtractBoughtItem = function (x) {
            if (x.numBought > 1) {
                x.numBought = parseInt(x.numBought) - 1;
            }
            x.totalCost = parseInt(x.numBought) * parseInt(x.price);
        };

        $scope.subtractBoughtItemDashboard = function (x) {
            if (x.numBought > 0) {
                x.numBought = parseInt(x.numBought) - 1;
            }
        };

        $scope.deleteBoughtItem = function (x) {
            x.numBought = 0;
            x.totalCost = 0;
        };

        $scope.sum = function (property) {
            //function that sums up all values of a certain property in arr that holds multiple objects
            var arr = $scope.products;
            if (arr && arr.hasOwnProperty(length)) {
                var retNum = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].hasOwnProperty(property)) {
                        retNum += parseInt(arr[i][property]);
                    }
                }
                return retNum;
            }
            return 0;
        }

    });
})();