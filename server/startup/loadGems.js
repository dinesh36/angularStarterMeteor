Meteor.startup(function() {
	//insert the gems data at startup
    if (Gems.find().count() === 0) {
        var gemsData = [{
            'name': 'Dimond',
            'description': 'This is the heighest price gem'
        }, {
            'name': 'Pearl',
            'description': 'A rare gem'
        }, {
            'name': 'Coral',
            'description': 'This gem is found from sea'
        }];
        for (var i = 0; i < gemsData.length; i++)
            Gems.insert({name: gemsData[i].name, description: gemsData[i].description});            
    }
});
