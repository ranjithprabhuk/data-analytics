/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 03 Jan 2017
    Description : Base for Data Analytics Module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var login = angular.module('login', ['ui.router', 'ngResource', 'ngAnimate']);


login.config(["$stateProvider", function ($stateProvider) {

    //login page state
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/index.html',
        controller: 'loginCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Login'
        }
    });

}]);

