
var app = angular
			.module("myModule",[])
			.controller("myController",function($scope){
				
				var technologies = [
				
				{name: "C#", likes: 0, dislike: 0 },
				{name : "ASP.NET", likes:0 , dislike:0},
				{name: "SQL Server", likes: 0, dislike: 0 },
				{name : "ASP.NET", likes:0 , dislike:0}
				
				];
				
				$scope.techno = technologies;
				
				$scope.incrementLikes = function(technology){
					technology.likes++;
					
				}
				
				$scope.incrementDisLikes = function(technology){
					technology.dislike++;
					
				}
				
				$scope.msg = "working";
				
				
			});