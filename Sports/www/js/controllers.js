angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.index = 0;
    $scope.go = function(index){
      $ionicSlideBoxDelegate.slide(index);
    }
})

.controller('ChatsCtrl',['$scope','$timeout' ,'$http',function($scope,$timeout,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.items=[
      {
        "name":"HTML5"
      },
      {
        "name":"JavaScript"
      },
      {
        "name":"Css3"
      }
    ];

    $scope.doRefresh = function() {
      $http.get('http://192.168.3.7')   //注意改为自己本站的地址，不然会有跨域问题
        .success(function(newItems) {
          console.log("newItems" + newItems);
          $scope.items = newItems;
        })
        .error(function (newItems) {
          console.log("error" + newItems);
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
  }])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.user = Chats.getone();
})

.controller('AccountCtrl', function($scope,$http, $stateParams, Chats) {
        $scope.ctrlScope = $scope;
        $scope.register=function(){
            var url = 'http://192.168.3.7:3000/reg';
            var Userinfo = {name: $scope.uname, password: $scope.passwd, email: $scope.email};
            $http.post(url, Userinfo,{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
              .success(function(data, status, headers, config) {
                console.log("success" + Userinfo.name);

                //console.log("success" + data + "status" + status+"headers"+headers+"config"+config);
                if(status == '200'){
                  console.log("ok_______-");
                  Chats.set(Userinfo);
                  location.href="#/tab/account/userinfo";
                }
            }).error(function (data, status, headers, config) {
                console.log("error" + data + "status" + status);
                //if(status == "404"){
                    //scope.visible = true;
                    //scope.info_show = data;
                    //scope.pwd = "";
                    //$('#ConfirmPassword').val("");
                    //location.href='login';
                //}
            });
        }
});
