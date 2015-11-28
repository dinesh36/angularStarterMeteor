// Model1 = new Mongo.Collection("model1");

// if (Meteor.isServer) {
//     Model1.allow({
//         insert: function(userId) {
//             return (userId ? true : false);
//         },
//         remove: function(userId) {
//             return (userId ? true : false);
//         },
//         download: function() {
//             return true;
//         },
//         update: function(userId) {
//             return (userId ? true : false);
//         }
//     });

//     Meteor.publish('model1', function() {
//         return Model1.find({});
//     });
// }
