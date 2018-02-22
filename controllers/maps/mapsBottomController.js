(function () {

app.controller("mapsBottomController", function (
  $state, $stateParams, $scope, $http, $rootScope, $compile, $location
) {

$scope.data = [];
$scope.test = "test top";

var getData = function () {
  return $http.get("/static/data/data.json")
    .then(function (response) {
      $scope.data = response.data;
      return response;
    });
};


/******************* Google Maps ***************************/
var initMap = function () {
  document.getElementById('map-all-items').innerHTML = '';
  
  /* Set center of map */
  var nova_scotia = {lat: 44.651070, lng: -63.582687};
  var map = new google.maps.Map(document.getElementById('map-all-items'), {
    zoom: 4,
    center: nova_scotia,
    zoom: 13
  });

  for (var i=0; i< $scope.data.length; i++) {
    var row = $scope.data[i];
    var latitude = parseFloat(row.latitude);
    var longitude = parseFloat(row.longitude);

    var coords = {lat: latitude, lng: longitude};

    var contentString = '<h4>' + row.name + '</h4><hr>';
    contentString += '<p>Item: ' + row.item_name + '</p>';
    contentString += '<p>Available: ' + row.item_quantity + ' in stock</p>';
    contentString += '<p>Price: $' + row.item_price + ' each</p>';

    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: row.name
    });

    var content = '<a ui-sref="item({itemId:' + row.id + '})" class="btn btn-default">View Item</a>';
    var compiledContent = $compile(content)($scope);
    contentString += content;
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

}
/************************************************************/

var loadPage = function () {
  getData()
    .then(initMap);
};
loadPage();


});

})();
