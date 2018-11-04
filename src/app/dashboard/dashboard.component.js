import template from './dashboard.template.html'
import DashboardController from './dashboard.controller'

const bindings = {
  someInput: '<',
  someOutput: '&'
}

export const dashboardComponent = {
  controller: DashboardController,
  template,
  bindings
}

angular.module('dashboard', [])
  .component('dashboardComponent', dashboardComponent)
  .controller('dashboardController', DashboardController)


