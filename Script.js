
	var myApp = angular.module("myModule",[]);
	
	var myController  = function($scope){
		
		$scope.msg = "AngularJS Tutorial";
	};
	 
	myApp.controller("nameOfController",myController);
	
	
	var myApp2 = angular
	.module("secondModule",[])
	.controller("myController2",function($scope){
	
		var employee = {
			
			firstName: "David",
			latName: "Hastings",
			gender: "Male"
			
		};
		
		$scope.employee = employee;
		
	});
	
	
	var myImg = angular
	.module("imgModule",[])
	.controller("imgController",function($scope){
		
		var pic = {
			
			name : "ScreenShot",
			brand : "dell",
			img : "img.png"
			
		};
		
		$scope.pic = pic ;
		
		
	});
	
	
	var twoWayApp = angular
	.module("twowayModule",[])
	.controller("twowayController",function($scope){
		$scope.msg = "Hello js";
		
		var employee = {
			
			firstName : "Ben",
			lastName : "Cutting",
			gender : "Male"
			
		};
		
		$scope.employee = employee;
		
	});
	
	
	
