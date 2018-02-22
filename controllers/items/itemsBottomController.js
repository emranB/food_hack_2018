(function () {

app.controller("itemsBottomController", function (
  $state, $stateParams, $scope, $http, $rootScope, $compile
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


  /******************* Google Maps ***************************/
  var initMapOneItem = function () {
    document.getElementById('map-one-item').innerHTML = '';
    /* Set center of map */
    var nova_scotia = {lat: 44.651070, lng: -63.582687};
    var map = new google.maps.Map(document.getElementById('map-one-item'), {
      zoom: 4,
      center: nova_scotia,
      zoom: 13
    });

    var item = $scope.item;
    var latitude = parseFloat(item.latitude);
    var longitude = parseFloat(item.longitude);

    var coords = {lat: latitude, lng: longitude};

    var contentString = '<h4>' + item.name + '</h4><hr>';
    contentString += '<p>Item: ' + item.item_name + '</p>';
    contentString += '<p>Available: ' + item.item_quantity + ' in stock</p>';
    contentString += '<p>Price: $' + item.item_price + ' each</p>';

    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: item.name
    });

    google.maps.event.addListener(marker, 'click', (function (marker, contentString, infowindow) {
      return function () {
        var infowindow = new google.maps.InfoWindow({
          content: ''
        });
        var contentDiv = angular.element('<div/>');
        contentDiv.append(contentString);
        var compiledContent = $compile(contentDiv)($scope);

        infowindow.setContent(compiledContent[0]);
        infowindow.open($scope.map, marker);
      };
    })(marker, contentString, $rootScope.infowindow));

  }
  /************************************************************/

  var loadPage = function () {
    getData()
      .then(getItem)
      .then(initMapOneItem);
  };
  loadPage();


});

})();
