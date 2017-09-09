

var phonecatApp = angular.module('phonecatApp', [])
phonecatApp.controller('selection',function($scope,$rootScope){
  // $scope.phones = [
  // {'image/ardunio.jpg'}
  // ];

//   for(var i= 0; i <100; i++){
//   $scope.images.push("image/ardunio.jpg");

// };
$('#startModal').modal('show');
$scope.isHide= true;
$scope.isStupid= true;
$scope.items=[];
$scope.images = [];
$scope.errors=[];
$scope.svens=[];
// $scope.please = ' <h3>Good choice !<font class=" text-success"> Go back and find another one</font></h3>';

 for(var i= 0; i <1000; i++){
   $scope.items.push({src:'image/ardunio.jpg',
   	intro:'Elegoo UNO Project Super Starter Kit with Tutorial for Arduino',
   	seller:'by Elegoo',
   	sales:Math.floor((Math.random()*2000) +200),
    nprice:Math.floor((Math.random()*29) +30),
    oprice:Math.floor((Math.random()*99) +50),
    star: Math.floor((Math.random()* 11) )});
 };
 for(var i= 0; i <100; i++){
   $scope.errors.push({name:'Error'});

 };
 for(var i= 0; i <100; i++){
   $scope.svens.push({src:'image/sven'+ Math.floor((Math.random()*8) +1) +'.jpg'});
   // console.log(parseInt(Math.random(1,8)));
 };
 $scope.images = $scope.items;
  $scope.clear = function(){
	$scope.images = [];
};
  $scope.reset = function(){
	 $scope.images = $scope.items;
};

  $scope.showHide = function(){
	$scope.isHide= false;
};
 $scope.stupid = function(){
	$scope.isStupid= false;
	// console.log('test');
	$scope.images = [];
};

$scope.lowPr = function(){

	$scope.images = [];
	for(var i= 0; i <1000; i++){
   $scope.images.push({src:'image/ardunio.jpg',
   	intro:'Elegoo UNO Project Super Starter Kit with Tutorial for Arduino',
   	seller:'by Elegoo',
   	sales:Math.floor((Math.random()*20) +6),
    nprice:Math.floor((Math.random()*29) +10),
    oprice:Math.floor((Math.random()*99) +50),
    star: Math.floor((Math.random()* 5) )});
 };
  $('#myModal2').modal('hide');
};
$scope.hiEv = function(){

	$scope.images = [];
	for(var i= 0; i <1000; i++){
   $scope.images.push({src:'image/ardunio.jpg',
   	intro:'Elegoo UNO Project Super Starter Kit with Tutorial for Arduino',
   	seller:'by Elegoo',
   	sales:Math.floor((Math.random()*20) +6),
    nprice:Math.floor((Math.random()*29) +100),
    oprice:Math.floor((Math.random()*99) +200),
    star: Math.floor((Math.random()* 3) + 7)});
 };
  $('#myModal2').modal('hide');
};

$scope.moreSales = function(){
    // $scope.please="Flitering starts";
     // console.log($scope.please);
	$scope.images = [];
	for(var i= 0; i <1000; i++){
   $scope.images.push({src:'image/ardunio.jpg',
   	intro:'Elegoo UNO Project Super Starter Kit with Tutorial for Arduino',
   	seller:'by Elegoo',
   	sales:Math.floor((Math.random()*2000) +600),
    nprice:Math.floor((Math.random()*29) +100),
    oprice:Math.floor((Math.random()*99) +200),
    star: Math.floor((Math.random()* 5) )});
 };
 $('#myModal2').modal('hide');
};




}) // end dialogsServiceTest
.controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
  // $scope.user = {name : ''};

  // $scope.cancel = function(){
  //   $modalInstance.dismiss('canceled');  
  // }; // end cancel
  
  // $scope.save = function(){
  //   $modalInstance.close($scope.user.name);
  // }; // end save
  
  // $scope.hitEnter = function(evt){
  //   if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
		// 		$scope.save();
  // }; // end hitEnter



  // parseInt(5/2)2
}) // end whatsYourNameCtrl



// end run / module