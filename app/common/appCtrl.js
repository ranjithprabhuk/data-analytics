/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 03 Jan 2017
    Description : Controller to handle main application
    
    Change Log
    s.no      date    author     description     
 ===========================================================*/

app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'appSettings',
    function ($rootScope, $scope, $state, $location, appSettings) {


        var vm = this;

        vm.options = { legend: { display: true } };
        vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];


        console.log('getting in to the app controller');

    }]);
