(function () {

app.controller("itemsTopController", function (
  $state, $stateParams, $scope, $http
) {

$scope.data = [];
$scope.item = {};
$scope.test = "test top";

var getData = function () {
  return $http.get("/static/data/data.json")
    .then(function (response) {
      $scope.data = response.data;
      return response;
    });
};

var getItem = function () {
  var id = $stateParams.itemId;
  var item = {};
  for (var i=0; i<$scope.data.length; i++) {
    if ($scope.data[i].id == id) {
      $scope.item = $scope.data[i];
    }
  }
  return $scope.item;
};

var loadPage = function () {
  getData()
    .then(getItem);
};
loadPage();


});

})();
