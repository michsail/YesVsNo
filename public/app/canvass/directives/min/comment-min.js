!function(){var e=angular.module("yvn.canvass");e.directive("comments",["getComments",function(e){return{restrict:"E",scope:{data:"=?"},templateUrl:"app/canvass/directives/comment.html",controller:function(n){if(n.data)n.comments=n.data;else{var t=function(e){var n=_.orderBy(e,["tier"],["desc"]);_.each(n,function(n){var t=_.filter(e,function(e){return e.comment_id==n.comment_parent_id});t[0]&&(t[0].comments=[],t[0].comments.push(n))});var t=_.filter(e,function(e){return 0==e.comment_parent_id});return t};n.comments=[];var m=function(){e.comments().success(function(e){n.comments=t(e)})};m()}n.addPostComment=function(){if(n.userComment&&""!==n.userComment){var e={user:n.userName,comment:n.userComment,level:0,tier:1,vote:n.userVote,date:new Date};$http.post("/api/comments/new",e).then(function t(e){m()},function o(e){console.log("Error In Posting?")}),n.userComment=""}},n.toggleCommentMenu=function(e){void 0==e.commentMenuVisible||0==e.commentMenuVisible?e.commentMenuVisible=!0:1==e.commentMenuVisible&&(e.commentMenuVisible=!1)}}}}])}();