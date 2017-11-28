app.controller("myctrl", ($scope, myfactory) => {
    
    
                $scope.compute = () => {
                    $scope.result = myfactory.compute($scope.salary);
                    // $scope.result = $scope.price * $scope.quantity;
                }
    
            });
    