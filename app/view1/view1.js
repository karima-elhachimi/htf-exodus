'use strict';



var app = angular.module('dashboard', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: '../templates/dashboard/main.html',
        controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
  });
}])

app.controller('DashboardCtrl', ['$http', '$scope', '$q', function($http, $scope, $q) {

    var dashboard = this;
    dashboard.selectedCity = "";
    dashboard.cities;
    dashboard.convoys;
    dashboard.dmv;
    dashboard.help = "yo";

    dashboard.accessTokenMB = 'pk.eyJ1Ijoia2FyaW1hZSIsImEiOiJjamFtZzRqcmwzd25mMndxODk0MG1oNWcwIn0.W61M8fvLE2teV6JgLK1yYA';



    dashboard.myMap = L.map('mapCities');



    dashboard.allCities = [
        {
            "id": "37aa0786-f2bc-4331-aee5-e8b05a8ab90c",
            "name": "Tokyo/Yokohama",
            "population": 33218942,
            "area": 6993,
            "country": "Japan"
        },
        {
            "id": "3fab2c2c-9f03-456b-b1d6-f19c0f77f939",
            "name": "New York Metro",
            "population": 17819965,
            "area": 8683,
            "country": "USA"
        },
        {
            "id": "522a7976-2972-423f-8f51-a6067b030719",
            "name": "Sao Paulo",
            "population": 17717857,
            "area": 1968,
            "country": "Brazil"
        },
        {
            "id": "3c3022fa-ea1d-4ebe-9287-5826199e001b",
            "name": "Seoul/Incheon",
            "population": 17518467,
            "area": 1049,
            "country": "South Korea"
        },
        {
            "id": "9c572cc4-cc33-4391-a8e4-da81d3fe4956",
            "name": "Mexico City",
            "population": 17420527,
            "area": 2072,
            "country": "Mexico"
        },
        {
            "id": "36b314ca-dcf4-4ee6-88ad-b76d1b445180",
            "name": "Osaka/Kobe/Kyoto",
            "population": 16445423,
            "area": 2564,
            "country": "Japan"
        },
        {
            "id": "6c475f9d-738a-4cb7-a3a4-48df86adbdde",
            "name": "Manila",
            "population": 14768745,
            "area": 1399,
            "country": "Philippines"
        },
        {
            "id": "9bcb954c-71e8-4ce8-a096-3094abc067f7",
            "name": "Mumbai",
            "population": 14369999,
            "area": 484,
            "country": "India"
        },
        {
            "id": "6d836848-7952-41f6-b1f9-68194f32a4ab",
            "name": "Delhi",
            "population": 14318842,
            "area": 1295,
            "country": "India"
        },
        {
            "id": "d13132ba-dfd0-4ba5-905c-01ac53891fea",
            "name": "Jakarta",
            "population": 14267451,
            "area": 1360,
            "country": "Indonesia"
        },
        {
            "id": "c42e6d42-c6d2-44fc-9ca8-5939ac2e14c1",
            "name": "Lagos",
            "population": 13420098,
            "area": 738,
            "country": "Nigeria"
        },
        {
            "id": "f7c8ae71-0c0b-4304-8723-3f9141e6bace",
            "name": "Kolkata",
            "population": 12719126,
            "area": 531,
            "country": "India"
        },
        {
            "id": "bbb87e6d-8f7b-4c33-b3ad-ae75c5dc6066",
            "name": "Cairo",
            "population": 12221428,
            "area": 1295,
            "country": "Egypt"
        },
        {
            "id": "b7c3ac89-0847-48e3-b8e1-d34c698b9a1a",
            "name": "Los Angeles",
            "population": 11808224,
            "area": 4320,
            "country": "USA"
        },
        {
            "id": "48b19db4-6a8a-4acf-a4e2-115da17adb17",
            "name": "Buenos Aires",
            "population": 11218978,
            "area": 2266,
            "country": "Argentina"
        },
        {
            "id": "f3cdb672-892f-4567-b462-a2040fd4375f",
            "name": "Rio de Janeiro",
            "population": 10820030,
            "area": 1580,
            "country": "Brazil"
        },
        {
            "id": "a1ed5144-5777-4f99-a468-6ba21cdea560",
            "name": "Moscow",
            "population": 10519380,
            "area": 2150,
            "country": "Russia"
        },
        {
            "id": "1fecbe85-e928-400c-9822-79acdd57b50e",
            "name": "Shanghai",
            "population": 10019790,
            "area": 746,
            "country": "China"
        },
        {
            "id": "2ec9f96c-3cb3-496e-87e4-e5d3e49fd360",
            "name": "Karachi",
            "population": 9819210,
            "area": 518,
            "country": "Pakistan"
        },
        {
            "id": "0d59d128-3c0a-4d2c-9ce9-8e4fd302caf3",
            "name": "Paris",
            "population": 9666151,
            "area": 2723,
            "country": "France"
        },
        {
            "id": "669cab1c-7e64-408c-b9f6-675ea8eba844",
            "name": "Istanbul",
            "population": 9019709,
            "area": 1166,
            "country": "Turkey"
        },
        {
            "id": "c0ff1e41-d4d5-4d58-85b6-d8ddb0c4c8cb",
            "name": "Nagoya",
            "population": 9019927,
            "area": 2875,
            "country": "Japan"
        },
        {
            "id": "37fb2761-d84b-470c-a347-5c102092e8d0",
            "name": "Beijing",
            "population": 8632723,
            "area": 748,
            "country": "China"
        },
        {
            "id": "e0a951d7-b383-4121-8b8e-f0b79b0bbf32",
            "name": "Chicago",
            "population": 8327282,
            "area": 5498,
            "country": "USA"
        },
        {
            "id": "00dbff24-35c8-40c8-98c9-b419907062ff",
            "name": "London",
            "population": 8297651,
            "area": 1623,
            "country": "UK"
        }
    ];


    dashboard.getCities = function(url_) {

//"ttp://cuhnning-convoys.azurewebsites.net/api/Cities";
        var url = url_;


        var settings = {
            "async": false,
            "crossDomain": true,
            "url": url,
            "method": "GET"

        };

        $.ajax(settings).done(function (response) {

            console.log("test");
            console.log("get of cities" + response);
        });

        $http.get(url).then(function onSuccess(r){

          console.log("get "+ r);
          return r;
        });
    };

    //dashboard.getCities("http://cunning-convoys.azurewebsites.net/api/Cities");

    dashboard.showMap = function(city){


        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyaW1hZSIsImEiOiJjamFtZzRqcmwzd25mMndxODk0MG1oNWcwIn0.W61M8fvLE2teV6JgLK1yYA', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapCities',
            accessToken: dashboard.accessTokenMB
        }).addTo(dashboard.myMap);
        dashboard.myMap.setView([37.8, -96.9], 4);


    };


    dashboard.getLL = function(city){

        var lat ='';
        var long = '';


        var key = "902c66876b694fecaf38ed7322e5a75c";

        var url = 'https://api.opencagedata.com/geocode/v1/json?q='+city+'&key='+key;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url":url,
            "method": "GET"

        };

        $.ajax(settings).done(function (response) {


            console.log("cage get ll+" +angular.fromJson(response).results[0].annotations.DMS.lat);

             lat = angular.fromJson(response).results[0].annotations.DMS.lat;
             long = angular.fromJson(response).results[0].annotations.DMS.lng;

        });

        return [lat, long];

    };

    dashboard.updateCities = function() {

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://cunning-convoys.azurewebsites.net/api/Cities",
            "method": "GET"

        };
        $.ajax(settings).done(function (response) {

            return response;
        });
/*
        $http.get("http://cunning-convoys.azurewebsites.net/api/Convoys").then(function onSuccess(r){
            dashboard.convoys = r;          
        });
        $http.get("http://cunning-convoys.azurewebsites.net/api/Dmv").then(function onSuccess(r){
            dashboard.dmv = r;          
        });                */
    }

        dashboard.getCities = function () {
            var q = $q.defer(); // maakt object aan voor promise
            $http.get('http://cunning-convoys.azurewebsites.net/api/Cities')
                .then(function (response) {
                    // Success
                    q.resolve(response.data);
                }, function (response) {
                    // ERROR
                    q.reject(response.error);
                });
            return q.promise;
        }

    dashboard.setCity = function (name) {
        //dashboard.selectedCity = name;
        for(var i = 0; i <= dashboard.cities.length; i+=1) {
            if (dashboard.cities[i].name == name) {
                dashboard.selectedCity = dashboard.cities[i];
                dashboard.apply();
                return;
            }
        }
    }

    dashboard.getCities().then(cities => {
        dashboard.cities = cities;
    });


    console.log(dashboard.cities);
    dashboard.showMap("Tokyo");


}]);