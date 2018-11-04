import { Digest, JediStatus } from '../util/util'
import toastr from 'toastr'

const providers = ['$scope']

const db = firebase.firestore();

const controller = $scope => {

  $scope.jedis = [];
  $scope.edit = null;
  $scope.order = {
    key: null,
    sort: null
  };
  $scope.jediStatus = JediStatus;

  const getJedis = ({limit = 10, key, sort} = {}) => {
    $scope.$emit('overlay', true);
    const fire = key ? db.collection("jedi").orderBy(key, sort || 'asc') : db.collection("jedi");
    fire.get().then((querySnapshot) => {
      const str = data => (data && typeof data === 'object' ? data.path : data) || null;
      const jedis = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        const jedi = Object.assign(data, {id: doc.id, status: str(data.status)});
        jedis.push(jedi);
      })
      $scope.jedis = jedis;
      console.log('JEDIS >>>', $scope.jedis);
      Digest($scope);
      $scope.$emit('overlay', false);
    });
  }

  getJedis();

  $scope.title = "Jedis";

  $scope.setOrder = keySort => {
    const {key, sort} = $scope.order;
    const invert = sort => sort === 'asc' ? 'desc' : 'asc';
    $scope.order = {
      key: keySort,
      sort:  keySort === key ? invert(sort) : 'asc'
    };
    getJedis($scope.order)
  }

  $scope.remove = jedi => {
    if(!jedi || !jedi.id) return;
    $scope.jediRemove = jedi;
    $('#modalConfirm').modal();

    $('#modalConfirm').on('hide.bs.modal', () => {
      $scope.jediRemove = null;
    })
  }

  $scope.confirmRemove = jedi => {
    if(!jedi || !jedi.id) return;
    db.collection('jedi').doc(jedi.id).delete()
      .then(() => {
        toastr.success("Jedi removido com sucesso!");
        $scope.jediRemove = null;
        $('#modalConfirm').modal('hide');
        getJedis();
      })
      .catch(e => {
        console.error(e);
        toastr.error('Erro ao remover jedi');
      });
  }
}

export const Jedis = [...providers, controller];