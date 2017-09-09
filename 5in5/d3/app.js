



var phonecatApp = angular.module('phonecatApp', [])
phonecatApp.controller('selection',function($scope,$rootScope,$timeout){
  // $scope.phones = [
  // {'image/ardunio.jpg'}
// };
// $('#startModal').modal('show');
$scope.answers= [{index:0,q:"be real",po:"right"},
                  {index:1,q:"height",po:"right"},
                  {index:2,q:"sensitiveness",po:"right"},
                  {index:3,q:"indecision",po:"right"},
                  {index:4,q:" none",po:"right"},
                  {index:5,q:" into DT",po:"right"},
                  {index:6,q:" nervous ",po:"right"},
                  {index:7,q:"optimism",po:"right"},
                  {index:8,q:"when i want",po:"right"},
                  {index:9,q:"nose",po:"right"},
                  {index:10,q:" myself",po:"right"},
                  {index:11,q:" real",po:"right"},
                  {index:12,q:" real",po:"right"},
                  {index:13,q:"indecision",po:"right"},
                  {index:14,q:" none",po:"right"},
                  {index:15,q:" into DT",po:"right"},
                  {index:16,q:" nervous ",po:"right"},
                  {index:17,q:"optimism",po:"right"},
                  {index:18,q:"when i want",po:"right"},
                  {index:19,q:"nose",po:"right"},
                  {index:20,q:" myself",po:"right"},
                  {index:21,q:" real",po:"right"},
                  {index:22,q:" real",po:"right"}
                  {index:23,q:"indecision",po:"right"},
                  {index:24,q:" none",po:"right"},
                  {index:25,q:" into DT",po:"right"},
                  {index:26,q:" nervous ",po:"right"},
                  {index:27,q:"optimism",po:"right"},
                  {index:28,q:"when i want",po:"right"},
                  {index:29,q:"nose",po:"right"},
                  {index:30,q:" myself",po:"right"},
                  {index:31,q:" real",po:"right"},
                  {index:32,q:" real",po:"right"},
                  {index:33,q:" real",po:"right"},
                  {index:34,q:" real",po:"right"}
];

$scope.questions= [{index:0,q:"1.What is your idea of perfect happiness?",po:"left"},
                  {index:1,q:"2.What is your greatest fear? ",po:"left"},
                  {index:2,q:" 3.What is the trait you most deplore in yourself? ",po:"left"},
                  {index:3,q:" 4.What is the trait you most deplore in others?  ",po:"left"},
                  {index:4,q:" 5.Which living person do you most admire?  ",po:"left"},
                  {index:5,q:" 6.What is your greatest extravagance?  ",po:"left"},
                  {index:6,q:" 7.What is your current state of mind?  ",po:"left"},
                  {index:7,q:" 8.What do you consider the most overrated virtue?",po:"left"},
                  {index:8,q:" 9.On what occasion do you lie?",po:"left"},
                  {index:9,q:" 10.What do you most dislike about your appearance?",po:"left"},
                  {index:10,q:" 11.Which living person do you most despise?",po:"left"},
                  {index:11,q:" 12.What is the quality you most like in a man?",po:"left"},
                  {index:12,q:" 13.What is the quality you most like in a woman?",po:"left"},
                  {index:13,q:" 14.Which words or phrases do you most overuse?",po:"left"},
                  {index:14,q:" 15.What or who is the greatest love of your life?",po:"left"},
                  {index:15,q:" 16.When and where were you happiest?",po:"left"},
                  {index:16,q:" 17.Which talent would you most like to have?",po:"left"},
                  {index:17,q:" 18.If you could change one thing about yourself, what would it be?",po:"left"},
                  {index:18,q:" 19.What do you consider your greatest achievement?",po:"left"},
                  {index:19,q:" 20.If you were to die and come back as a person or a thing, what would it be?",po:"left"},
                  {index:20,q:" 21.Where would you most like to live?",po:"left"},
                  {index:21,q:" 22.What is your most treasured possession?",po:"left"},
                  {index:22,q:" 23.What do you regard as the lowest depth of misery?",po:"left"},
                  {index:23,q:" 24.What is your favorite occupation?",po:"left"},
                  {index:24,q:" 25.What is your most marked characteristic?",po:"left"},
                  {index:25,q:" 26.What do you most value in your friends?",po:"left"},
                  {index:26,q:" 27.Who are your favorite writers?",po:"left"},
                  {index:27,q:"28.Who is your hero of fiction?",po:"left"},
                  {index:28,q:"29.Which historical figure do you most identify with?",po:"left"},
                  {index:29,q:" 30.Who are your heroes in real life?",po:"left"},
                  {index:30,q:" 31.What are your favorite names?",po:"left"},
                  {index:31,q:" 32.What is it that you most dislike?",po:"left"},
                  {index:32,q:" 33.What is your greatest regret?",po:"left"},
                  {index:33,q:" 34.How would you like to die?",po:"left"},
                  {index:34,q:" 35.What is your motto?",po:"left"}];
$scope.count=0;
$scope.ques=[];
$scope.message="";

$scope.ques.push($scope.questions[0]);
// $scope.svens=[];
$scope.makeanswer=function(){
$scope.count+=1;
$scope.type="";
// if ($scope.type == ""){

// } else{
//  $scope.message="in progress";
//    $timeout(function(){
//               $scope.message +=". "
//               },500) 
// };
$scope.ques.push($scope.questions[$scope.count]);
$('#chatbox')[0].scrollTop = $('#chatbox')[0].scrollHeight + 200;
// $('#chatbox')[0].scrollIntoView(); 
 console.log($('#chatbox'),$('#chatbox')[0].scrollTop);
  
}
$scope.myKeyup = function(e){
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                console.log('test');
                $scope.type="";
                $scope.message="";
         
              $scope.ques.splice($scope.count*2+1,0,$scope.answers[$scope.count]);
              
           
         $timeout(function(){
              
              $('#chatbox')[0].scrollTop = $('#chatbox')[0].scrollHeight + 200;
            },10)
          $timeout(function(){
              $scope.count+=1;
              $scope.ques.push($scope.questions[$scope.count]);
               $timeout(function(){
              $('#chatbox')[0].scrollTop = $('#chatbox')[0].scrollHeight + 200;
              },10) 
            },1500)

        $('#chatbox')[0].scrollTop = $('#chatbox')[0].scrollHeight + 200;
           } else{
            $scope.message="Code-switching in progress";
              $timeout(function(){
              $scope.message +=" ."
              },300)
           }
  
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
    //    $scope.save();
  // }; // end hitEnter



  // parseInt(5/2)2
}) // end whatsYourNameCtrl



// end run / module