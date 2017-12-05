app.factory("shopfactory",(PRODUCT_URL,$http,$q)=>{
    return {
        getProducts(){
               var promiseObject = $q.defer(); 
               $http.get(PRODUCT_URL).then((data)=>{
                    promiseObject.resolve(data);
               },(err)=>{
                    promiseObject.reject(err);
               }); 
               return promiseObject.promise;
            }
    }
})