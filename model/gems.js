Gems = new Mongo.Collection("gems");

if (Meteor.isServer) {
    Gems._ensureIndex({
        "name": "text",
        "description": "text"
    });
}

//add permission for the user operations
Gems.allow({
  insert: function (userId, gem) {
    return userId;
  },
  update: function (userId, gem, fields, modifier) {
    return userId;
  },
  remove: function (userId, gem) {
    return userId;
  }
});