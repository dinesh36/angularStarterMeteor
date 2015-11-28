// //set the model logic in server if you don't want to show this logic in server side scripts
// Meteor.publish("findModel1", function (searchString) {
//   if (searchString == null)
//     searchString = '';

//   return Model1.find({
//     'name' : { '$regex' : '.*' + searchString || '' + '.*' }
//     // $or:[
//     //   {$and:[
//     //     {"public": true},
//     //     {"public": {$exists: true}}
//     //   ]},
//     //   {$and:[
//     //     {owner: this.userId},
//     //     {owner: {$exists: true}}
//     //   ]},
//     //   {$and:[
//     //     {invited: this.userId},
//     //     {invited: {$exists: true}}
//     //   ]}
//     // ]
//     }, options);
// });