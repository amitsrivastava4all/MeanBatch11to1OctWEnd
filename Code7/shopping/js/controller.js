app.controller("shopctrl",($scope,shopfactory)=>{
    var products = [];
    $scope.loadProducts=()=>{
        var promise= shopfactory.getProducts();
        promise.then((data)=>{
              $scope.result = data.data;
              products = $scope.result;
              
              console.log("Products::: ",products);  
        },(err)=>{
            $scope.error = err;
        });
    }
    $scope.addItToCart=(product)=>{
        console.log("Array is ",products);
        var foundProduct = products.filter(singleProduct=>singleProduct.id==product.id);
        foundProduct = foundProduct[0];
        foundProduct.added = true;
        console.log("Added ",foundProduct);
        $scope.addedProducts = products.filter(singleProduct=>singleProduct.added);
        
    }
    $scope.loadProducts();
});