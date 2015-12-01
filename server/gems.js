Meteor.publish("gems", function(options, searchTerm) {
    Counts.publish(this, 'numberOfGems', Gems.find({
        'name': {
            '$regex': '.*' + searchTerm || '' + '.*',
            '$options': 'i'
        }
    }), {
        noReady: true
    });
    
    return Gems.find({
        'name': {
            '$regex': '.*' + searchTerm || '' + '.*',
            '$options': 'i'
        }
    }, options);
});
