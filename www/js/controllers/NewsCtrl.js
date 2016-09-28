app.controller('NewsCtrl', function ($scope, $ionicLoading, $http, $ionicPopup, $stateParams, SrvCall,$interval, ionicMaterialInk, ionicMaterialMotion) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
   
    //inicia el evento cargando y bloquea la pantalla
    $ionicLoading.show({
        template: '<ion-spinner icon="android"></ion-spinner>'
    }); 
    SrvCall.async('dummy/productos.json', 'GET', '').success(function(resp) {
     console.log(resp)
     //Apaga el evento cargando
     $ionicLoading.hide();
     $scope.novedades = resp.productos;
    }).error(function(resp){
            //Apaga el evento cargando
            $ionicLoading.hide();
                $ionicPopup.alert({
                        title: 'Ups!',
                        template: resp,
                        okText: 'OK!'
                });     
    });
    
    $interval(function(){
      SrvCall.async('dummy/productos.json', 'GET', '').then(function(resp) {
       console.log(resp)
       $scope.novedades = resp.data.productos;
      });
    },60000);
      
      
    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };      
      
    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();
    
        //   //inicia el evento cargando y bloquea la pantalla
        //   $ionicLoading.show({
        //       template: '<ion-spinner icon="android"></ion-spinner>'
        //   }); 
        
        // $http({
        //     method: 'GET',
        //     url: 'dummy/productos.json',
        //     headers: {'Accept': 'application/json'}
        // }).success(function(response){
        //     $scope.novedades = response.productos;
        //     console.log(response);
        //     //Apaga el evento cargando
        //     $ionicLoading.hide();
        // }).error(function(data, status){
        //     //Apaga el evento cargando
        //     $ionicLoading.hide();
        //         $ionicPopup.alert({
        //                 title: 'Ups!',
        //                 template: data.error,
        //                 okText: 'OK!'
        //         });     
        // });
  
  
});