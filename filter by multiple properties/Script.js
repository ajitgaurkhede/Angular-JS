
var app = angular
		.module("myModule",[])
		.controller("myController",function($scope){
			
			var employees = [
			
			{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.778},
			{ name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000},
			{ name: "Marky", dateOfBirth: new Date("August 15, 1974"), gender: "Female", salary: 5700011},
			{ name: "herry", dateOfBirth: new Date("October 27, 1979"), gender: "Male", salary: 550},
			{ name: "Nobita", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 1000000000000}
			
			];
			
			$scope.emp = employees;
	
			$scope.search = function(item){
				if($scope.searchText == undefined){
					return true;
				}
				else{
					
					if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
					{
						
						return true;
					}
					
					
				}
				
				return false;
				
			}

			
		});