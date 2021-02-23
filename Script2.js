
var app = angular
				.module("repeatModule",[])
				.controller("repeatController",function($scope){
					
					var employee = [
					
					{firstName: "Ben", lastName: "Stokes" , gender:"Male", salary: 55000},
					{firstName: "Rashid", lastName: "khan" , gender:"Male", salary: 333500},
					{firstName: "Ben", lastName: "Cutting" , gender:"Male", salary: 25000},
					{firstName: "Rishabh", lastName: "Panr" , gender:"Male", salary: 15000}
					
					]
					$scope.emp = employee;
					
				});
				
	var app2 = angular
				.module("repeatMod",[])
				.controller("repitController",function($scope){
					
					var countries = [
					
					{
						name: "UK",
						cities:[
						
						{name: "London"},
						{name: "Manchester"},
						{name:	"Bimrmingham"}
					
						]
						
					},
					
					{
						name: "USA",
						cities:[
						
						{name: "Los Angeles"},
						{name: "Chicago"},
						{name:	"Houston"}
					
						]
						
					},
					
					{
						name: "India",
						cities:[
						
						{name: "Hyderabad"},
						{name: "Chennai"},
						{name:	"Mumbai"}
					
						]
						
					}
					
					
					];
					
					$scope.countries = countries;
					
					$scope.msg = "hello";
					
				});