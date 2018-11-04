import { Digest } from '../util/util'

const providers = ['$scope'];
const db = firebase.firestore();

const controller = ($scope) => {

  $scope.jedis = [];

  const setChart = ({selector, labels, series}) => {
    new Chartist.Pie(selector, {labels, series}, {
      chartPadding: 30,
      showLabel: false,
      plugins: [
        Chartist.plugins.legend()
      ]
    })
  }

  $scope.$emit('overlay', true);
  db.collection("jedi").get().then(qs => {
    const str = data => (typeof data === 'object' ? data.path : data) || null;
    const jedis = [];
    const jedisStatus = {};
    const jedisPlanet = {};
    const setIfNot = (base, key, to) => !base[key] ? base[key] = to : null;

    qs.forEach(doc => {
      const data = doc.data();
      const jedi = Object.assign(data, {id: doc.id, status: str(data.status)});

      setIfNot(jedisStatus, jedi.status, []);
      setIfNot(jedisPlanet, jedi.planet, []);
      jedisStatus[jedi.status].push(jedi);
      jedisPlanet[jedi.planet].push(jedi);

      jedis.push(jedi);
    })
    $scope.jedis = jedis;
    Digest($scope);
    $scope.$emit('overlay', false);

    const keysStatus = Object.keys(jedisStatus);
    setChart({
      selector: '#statusJedis',
      labels: keysStatus.map(k => k.replace('status/', '')),
      series: keysStatus.map(k => jedisStatus[k].length)
    })

    const keysPlanets = Object.keys(jedisPlanet);
    setChart({
      selector: '#planetsJedis',
      labels: keysPlanets,
      series: keysPlanets.map(k => jedisPlanet[k].length)
    })

  });

};

export const Dashboard = [...providers, controller];