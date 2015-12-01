Meteor.publish("gems", function (searchTerm) {
	return Gems.find({'name' : { '$regex' : '.*' + searchTerm || '' + '.*', '$options' : 'i' }});
});