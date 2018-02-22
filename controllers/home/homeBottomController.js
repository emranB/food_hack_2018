(function () {

app.controller("homeBottomController", function (
  $state, $stateParams, $scope, $http
) {

  $scope.data = [];
  $scope.test = "test top";

  var getData = function () {
    return $http.get("/static/data/data.json")
    .then(function (response) {
      $scope.data = response.data;
      console.log($scope.data);
      return response;
    });
  };

  var loadPage = function () {
    getData();
  };
  loadPage();


});

})();
