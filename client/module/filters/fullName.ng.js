angular.module('app').filter('fullName', function () {
  return function (user) {
    if (!user)
      return;
    else
      return 'User Name is : ' + user;
  };
});
