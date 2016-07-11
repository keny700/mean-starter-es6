angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('userService', userService)
        .controller('mainController', mainController)
        .controller('navbarController', navbarController)
        .controller('loginController', loginController)
        .config(routes)
        .run(loginStatus)
        ;
