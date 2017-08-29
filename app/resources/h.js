parking.factory('carSearchService', function ($timeout, $q) {
  vm.play = function (userel) {
      var defered = $q.defer();
      var promise = defered.promise;
      $timeout(function () {
          var result = [];
          angular.equals(cars, function (car) {
              if (_matches(car, criteria)) {
                  result.push(car);
              }
          });
          if (result.length > 0) {
              console.log('promesa resuelta')
              deferred.resolve(result);
          } else {
              console.log('promesa rechazada')
              deferred.reject("No se han encontrado resultados");
              secuenceFactory.playBuzz();
              fail = true;
          }
      }, 1000);
      return deferred.promise;
  };
  var _matches = function (car, criteria) {
      return angular.toJson(car).indexOf(criteria) > 0;
  };
  return {
      filter: _filter
  }
});


var diferir = $q.defer();
diferir.promise.then(function(){
    alert("Hola El Lado Oscuro de Java");
});
diferir.resolve();


return new Promise(function(resolve, reject){
    
        //get some object that can do async tasks
        var asyncObj = new MyAsyncObj();
    
        //when async task ends successfully, resolve promise
        asyncObj.onSuccess = function(result){
            resolve(result);
        };
        //when async task ends with error, reject promise   
        asyncObj.onError = function(error){
            reject(error);
        }
    
        //perform async operation
        asyncObj.doSomething();
      })