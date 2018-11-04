const providers = ['$routeProvider', '$locationProvider']
const routes = [
  { path: "/", templateUrl: "/src/app/pages/dashboard.html" },
  { path: "/jedis", templateUrl: "/src/app/pages/jedis.html" },
  { path: "/jedi", templateUrl: "/src/app/pages/jedi-edit.html" },
  { path: "/jedi/:id", templateUrl: "/src/app/pages/jedi-edit.html" },
  { path: "/jedi/:name/:master/:planet/:status", templateUrl: "/src/app/pages/jedi-edit.html" }
]

const config = ($routeProvider, $locationProvider) => {
  routes.forEach(r => $routeProvider.when(r.path, r))
  $locationProvider.html5Mode(true);
}

export const Config = [...providers, config]