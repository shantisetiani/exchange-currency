// Define the `exchangeCurrencyApp` module
var exchangeCurrencyApp = angular.module('exchangeCurrencyApp', []);

// Define the `ExchangeCurrencyController` controller on the `exchangeCurrencyApp` module
exchangeCurrencyApp.controller('ExchangeCurrencyController', function PhoneListController($scope, $http) {
    $scope.data = [];
    $scope.allCurrencies = [];
    $scope.currencies = [];
    $scope.number = 10.00;

    var self = this;
    self.defaultCurrencies = ["IDR","EUR","GBP","SGD"];

    $("#currencyCardTemplate").hide();
    $(".select-currency").hide();

    //Get currency data from API
    $http({
        method: 'GET',
        url: 'https://api.exchangeratesapi.io/latest?base=USD'
    }).then(function successCallback(response) {
        $scope.data = response.data;
        
        //Store all data into an array
        angular.forEach($scope.data.rates, function(value, key) {
            $scope.allCurrencies.push({
                currency: key,
                rate: value
            });
        });
        
        //Store the default currency data into an array
        angular.forEach($scope.allCurrencies, function(value) {
            if(jQuery.inArray(value.currency, self.defaultCurrencies) != -1){
                $scope.currencies.push({
                    currency: value.currency,
                    rate: value.rate
                });
            }
        });
    }, function errorCallback(response) {
        alert(response);
    });
    
    //Show select-currency element and the options
    self.showCurrencyOptions = function () {
        $(".select-currency").show();
        $(".btn-add-more").hide();
    }

    //Push currency to defaultCurrency array
    self.submit = function () {
        //Trying to get the selected currency data from allCurrencies that have stored from the API
        angular.forEach($scope.allCurrencies, function(value) {
            if(value.currency == self.selectedCurrency){
                var isExist = 0;
                //Check if the selected currency is already exist in current currency list
                angular.forEach($scope.currencies, function(existingCurrency) {
                    if(existingCurrency.currency == self.selectedCurrency){
                        isExist = 1;
                        return;
                    }
                });

                if(isExist == 0){ //If the selected currency not exist, push the currency
                    $scope.currencies.push({
                        currency: value.currency,
                        rate: value.rate
                    });
                }else{ //If the selected currency is already exist
                    alert("Currency is already exist. Please select the other currencies!");
                }
            }
        });

        self.selectedCurrency = "";

        $(".select-currency").hide();
        $(".btn-add-more").show();
    }
    
    //Delete the selected currency card
    self.deleteCard = function (btn) {
        $(btn).closest(".row.card-currency").remove();
    }
});