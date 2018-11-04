import 'angular';
import 'angular-route'
import { MainController } from './app/main.controller'
import { Navbar } from './app/parts/navbar'
import { Config } from './app-config'
import { Jedis } from './app/pages/jedis'
import { SortClass } from './app/util/sort-class.filter'
import { JediEdit } from './app/pages/jedi-edit'
import { JediUrl } from './app/util/url-normal.filter'
import { Dashboard } from './app/pages/dashboard'

angular.module('app', ['ngRoute'])
  .controller('main', MainController)
  .controller('dashboard', Dashboard)
  .controller('jedis', Jedis)
  .controller('jediEdit', JediEdit)
  .directive('navbar', Navbar)
  .filter('sortClass', SortClass)
  .filter('jediUrl', JediUrl)
  .config(Config)