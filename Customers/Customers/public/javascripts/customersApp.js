var app = angular.module('app', ['ui.router', 'angularUtils.directives.dirPagination']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('home', {
        url: '/home',
        controller: 'customerController',
        templateUrl: '/home.html'
    })
    .state('customers', {
        url: '/customers',
        controller: 'customerController',
        templateUrl: '/customers.html'
    });
    
    $urlRouterProvider.otherwise('/home');

});

app.controller('customerController', ['$scope', '$http', customerController]);

// angularjs customer controller method ------------------------------------------
function customerController($scope, $http) {
    
    // declare variable for main ajax load and entry or edit mode
    $scope.loading = true;
    $scope.addMode = false;
    
    // get all customer information
    $http.get('/customers/').success(function (data) {
        $scope.customers = data;
        $scope.loading = false;
    }).error(function () {
        $scope.error = "An error has occured while loading customers!";
        $scope.loading = false;
    });
    
    // by pressing toggleEdit button ng-click in html, this method will be hit
    $scope.toggleEdit = function () {
        this.customer.editMode = !this.customer.editMode;
    };
    
    // by pressing toggleAdd button ng-click in html, this method will be hit
    $scope.toggleAdd = function () {
        $scope.addMode = !$scope.addMode;
    };
    
    // Insert Customer
    $scope.add = function () {
        $scope.loading = true;
        $http.post('/customers/', this.newcustomer).success(function (data) {
            alert("Added Sucessfully!!");
            $scope.addMode = false;
            $scope.customers.push(data);
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An error has occured while Adding Customer! " + data;
            $scope.loading = false;
        });
    };
    
    // Update Customer
    $scope.saveCustomer = function () {
        var cstmr = this.customer;
        $http.put('/customers/' + cstmr._id, cstmr).success(function (data) {
            alert("Saved Successfully!!");
            cstmr.editMode = false;
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving customer! " + data;
            $scope.loading = false;
        });
    };
    
    // Delete Customer
    $scope.deleteCustomer = function () {
        $scope.loading = true;
        var Id = this.customer._id;
        $http.delete('/customers/' + Id).success(function (data) {
            alert("Deleted Sucessfully!!");
            $.each($scope.customers, function (i) {
                if ($scope.customers[i].Id === Id) {
                    $scope.customers.splice(i, 1);
                    return false;
                }
            });
            $scope.loading = false;
        }).error(function (data) {
            $scope.error = "An error occured while Deleting Customer! " + data;
            $scope.loading = false;
        });
    };
    
    // Sort Customers - using angular-utils-pagination
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
}