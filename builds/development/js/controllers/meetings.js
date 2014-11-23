myApp.controller('MeetingsController', 
  function($scope, $firebase) {

  var ref = new Firebase('https://goldenstrawberries.firebaseio.com/');
  var meetings = $firebase(ref);

  $scope.meetings = meetings.$asObject();//This method pulls from DB


//Push info to DB with addmeetings()

$scope.addMeeting=function(){

	meetings.$push({

		name: $scope.meetingname,
		date: Firebase.ServerValue.TIMESTAMP
	}).then (function(){

		$scope.meetingname='',
		$scope.today = new Date();

	});
}//ADD MEETING

}); //MeetingsController

//Adding Date controller




