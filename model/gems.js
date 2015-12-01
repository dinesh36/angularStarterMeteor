Gems = new Mongo.Collection("gems");

if (Meteor.isServer) {
    Gems._ensureIndex({
        "name": "text",
        "description": "text"
    });
}
