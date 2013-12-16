/* angular-ui-semweb-label Controller */

var app = angular.module("app", []);

app.directive("semwebLabel", function() {
  return {
    restrict: "E",
    link: function(scope, element, attributes) {
      var longUri = element.text();
      if (longUri.lastIndexOf('#') > -1) {
        var label = longUri.substr(longUri.lastIndexOf('#') + 1);
      } else {
        var label = longUri.substr(longUri.lastIndexOf('/') + 1);
      }
      element.text(label);
    }
  }
});
