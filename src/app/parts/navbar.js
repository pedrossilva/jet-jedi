const providers = ['$scope', '$element']

const controller = $scope => {
  $scope.menus = [
    {label: 'Home', link: '/'},
    {label: 'Jedis', link: '/jedis'}
  ];
}

export const Navbar = () => ({
  restrict: 'E',
  transclude: true,
  scope: {},
  controller: [...providers, controller],
  template:
    `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <svg width="24px" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:#FFFFFF;}
            </style>
            <path class="st0" d="M12.4,16.3l1.7-2.4L13,16.8l3.3,0.5L13,17.8l1.3,2.5c0,0-1.6-1.7-1.8-1.9c0.1,3.6,0.1,4.5,0.1,4.5
              s8.2-3.8,3.6-12.1c0,0,5.6-6.2,0.5-10.1c0,0,8.7,5.3,3.2,14.3c0,0,4.6-4.5,2.2-9c0,0,4.2,5.9-0.9,12.3c0,0,1.4-0.9,2.6-4.1
              c0,0-0.9,9.7-11.7,9.8v0h-0.2v0C1.1,23.9,0.2,14.2,0.2,14.2c1.2,3.2,2.6,4.1,2.6,4.1C-2.3,11.9,1.9,6,1.9,6c-2.4,4.5,2.2,9,2.2,9
              C-1.5,6,7.3,0.7,7.3,0.7C2.1,4.5,7.8,10.7,7.8,10.7c-4.5,8.4,3.6,12.1,3.6,12.1s0-0.9,0.1-4.5l-1.8,1.9l1.3-2.5l-3.3-0.5l3.3-0.5
              l-1.1-2.9l1.7,2.4C11.7,11.7,12,0.2,12,0.1L12,0L12,0L12,0l0,0.1C12,0.2,12.3,11.7,12.4,16.3L12.4,16.3z"/>
          </svg>
          JetJedi
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li ng-repeat="menu in menus" class="nav-item">
              <a class="nav-link" href="{{menu.link}}">{{menu.label}} <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <!--<form class="form-inline my-2 my-lg-0">-->
            <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
            <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
          <!--</form>-->
        </div>
      </div>
     </nav>`,
  replace: true
})

