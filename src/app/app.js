import 'angular'

angular.module('app', ['components'])

  .controller('BeerCounter', function($scope, $locale) {
    $scope.beers = [0, 1, 2, 3, 4, 5, 6];
    if ($locale.id == 'en-us') {
      $scope.beerForms = {
        0: 'no beers',
        one: '{} beer',
        other: '{} beers'
      };
    } else {
      $scope.beerForms = {
        0: 'žiadne pivo',
        one: '{} pivo',
        few: '{} pivá',
        other: '{} pív'
      };
    }
  });


// import { dashboardComponent } from './dashboard/dashboard.component'
//
// class IndexController {
//   constructor () {
//     this.addValue = 3
//     this.fancyValue = 1337
//   }
// }
//
// angular.module('app', ['dashboard'])
//   .component('dashboardComponent', dashboardComponent)
//   .controller('IndexController', IndexController)