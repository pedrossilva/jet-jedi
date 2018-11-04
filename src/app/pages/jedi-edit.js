import { Digest, JediStatus, SetError } from '../util/util'
import toastr from 'toastr'
import { JediNormalize } from '../util/url-normal.filter'

const providers = ['$scope', '$routeParams', '$location'];
const db = firebase.firestore();

const controller = ($scope, $routeParams, $location) => {
  $scope.jedi = $routeParams.id ? undefined : JediNormalize()($routeParams);
  $scope.status = JediStatus;
  $scope.statusKeys = Object.keys(JediStatus);
  $scope.form = {
    name: null,
    planet: null,
    master: null,
    status: null
  };

  const getJedi = id => {
    if(!id) return;
    db.collection('jedi').doc(id).get().then(qs => {
      $scope.jedi = qs.data() || null;
      Digest($scope)
    })
  }

  $scope.id = $routeParams.id;
  getJedi($routeParams.id);

  $scope.save = () => {
    const promisse = $scope.jedi.id ?
      db.collection('jedi').doc($scope.jedi.id).update($scope.jedi) :
      db.collection('jedi').add($scope.jedi);
    promisse
      .then(() => {
        $location.path('/jedis');
        toastr.success('Jedi salvo com sucesso!')
      })
      .catch(e => SetError(e, 'Falha ao gravar'))
    $location.path('/jedis');
  }

  $scope.cancel = () => {
    $location.path('/jedis');
  }

}

export const JediEdit = [...providers, controller];