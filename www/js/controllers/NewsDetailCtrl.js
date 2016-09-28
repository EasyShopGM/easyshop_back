app.controller('NewsDetailCtrl', function ($scope, $stateParams, $ionicPopup, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

         $scope.newsid =  $stateParams.newsid;
    
         $scope.showDni = function() {
           $ionicPopup.confirm({
             title: 'Confirmame el DNI',
             template: 'Estas Seguro????'
           })
         }
});