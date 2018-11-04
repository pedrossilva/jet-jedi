import toastr from 'toastr';

export const Digest = $scope => (!$scope.$$phase) && $scope.$digest($scope);

export const JediStatus = (() => Object.assign({}, {
  "status/jedi": "Jedi",
  "status/youngling": "Youngling",
  "status/padawan": "Padawan",
  "status/trainee": "Jedi Trainee",
  "status/knight": "Jedi Knight",
  "status/master": "Jedi Master",
  "status/grandmaster": "Jedi Grand Master",
  "status/sith": "Sith",
}))();

export const SetError = (error, msg) => {
  if(msg) toastr.error(msg);
  if(error) console.error(error);
}
