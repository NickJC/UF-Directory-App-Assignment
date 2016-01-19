angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.sortType = "code";
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var newItem = createItem();
        newItem.code = $scope.itemCode;
        newItem.name = $scope.itemName;
        newItem.coordinates.latitude=$scope.itemLat;
        newItem.coordinates.longitude=$scope.itemLong;
        newItem.address=$scope.itemAdd;
        $scope.listings.push(newItem);
        $scope.itemCode = "";
        $scope.itemName = "";
        $scope.itemLat="";
        $scope.itemLong="";
        $scope.itemAdd="";
    };
      
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
        $scope.detailedInfo = undefined;
    };
      

  $scope.showDetails = function(index) {
    $scope.detailedInfo = $scope.listings[index];
    var latLng = {
        lat: Number($scope.detailedInfo.coordinates.latitude), 
        lng: Number($scope.detailedInfo.coordinates.longitude)
      }; 
    };
  }
]);

function createItem(){
    var item = {
        code : '', 
        name:  '',
        coordinates: {
                latitude: 0, 
                longitude: 0
            }, 
        address: ''
    };
    return item;
};