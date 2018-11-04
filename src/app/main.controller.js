import { Digest } from './util/util'

const providers = ['$scope'];

const controller = ($scope) => {
  $scope.overlay = false;
  const $self = $scope;
  $scope.$on('overlay', (e, data) => {
    $scope.overlay = !!data;
    Digest($scope);
    setTimeout(() => {
      $self.overlay = false;
      Digest($scope);
    }, 27*1000)
  });
}

export const MainController = [...providers, controller]