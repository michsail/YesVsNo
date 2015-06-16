(function() {

    var module = angular.module('yvn.home');

    module.factory('getList', [
	    
	    function() {
		    var ob = {
						philosophical: [
							{
								_id: 1,
								title: "Do Electric Sheep Dream",
								level: 0,
								user: "Jim Jones",
								votes: 200
							},
							{
								_id: 2,
								title: "Does a rolling stone gather moss?",
								level: 0,
								user: "Jim Jones",
								votes: 200
							}
							],
						political: [
							{
								_id: 3,
								title: "Who should be the next Prime Minister?",
								level: 0,
								user: "Jim Jones",
								votes: 200
							},
							{
								_id: 4,
								title: "Should Russia Invade Ukraine?",
								level: 0,
								user: "Jim Jones",
								votes: 200
							}
							]
					};
		    return ob;
	    }
    ]);
    
})();