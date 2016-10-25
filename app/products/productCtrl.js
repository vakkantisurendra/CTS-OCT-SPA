(function () {
    angular.module("ctsApp")
        .controller("productCtrl", ["$scope", "$state",
                                    function ($scope, $state) {
                var cart = [];
                $scope.products = [
                    {
                        "id": 1,
                        "category": "Men",
                        "brand": "Pepe",
                        "price": 1000,
                        "image": "image8"

       },
                    {
                        "id": 2,
                        "category": "Men",
                        "brand": "Pepe",
                        "price": 1200,
                        "image": "image9"

       },

                    {
                        "id": 3,
                        "category": "Men",
                        "brand": "Levis",
                        "price": 1200,
                        "image": "image10"

       },

                    {
                        "id": 4,
                        "category": "Women",
                        "brand": "biba",
                        "price": 3000,
                        "image": "image1"

       },
                    {
                        "id": 5,
                        "category": "Women",
                        "brand": "kaira",
                        "price": 6000,
                        "image": "image2"

       },
                    {
                        "id": 6,
                        "category": "Women",
                        "brand": "Melange",
                        "price": 8000,
                        "image": "image3"

       },
                    {
                        "id": 7,
                        "category": "Women",
                        "brand": "Melange",
                        "price": 8000,
                        "image": "image4"

       },
                    {
                        "id": 8,
                        "category": "Women",
                        "brand": "Melange",
                        "price": 8000,
                        "image": "image5"

       }, {
                        "id": 9,
                        "category": "Women",
                        "brand": "Melange",
                        "price": 9000,
                        "image": "image6"

       }];
                $scope.addProductToCart = function (product) {
                    cart.push(product);
                };

                $scope.viewName = "Products";
                $scope.goToCart = function () {
                    $state.go("cart", {
                        data: cart
                    });
                };



}]);
})
();
