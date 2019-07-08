
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
	{
		name: "Cloud's Rest", 
		image: "https://images.unsplash.com/photo-1545572695-789c1407474c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: " exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui qui dolorem eum fugiat quo voluptas nulla pariatur exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui qui dolorem eum fugiat quo voluptas nulla pariatur?"
	},
	{
		name: "Desert Mesa", 
		image: "https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: " exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui qui dolorem eum fugiat quo voluptas nulla pariatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem eum fugiat quo voluptas nulla pariatur?"
	},
	{
		name: "Canyon Floor", 
		image: "https://images.unsplash.com/photo-1536334312886-fca859112566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui qui dolorem eum fugiat quo voluptas nulla pariaturaut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem eum pariatur?"
	}
];

function seedDB(){
	// REMOVE ALL CAMPGROUNDS
	Campground.remove({},function(err){
		if (err){
		console.log(err);
		} 
			console.log("removed campground");
			// add a few campground
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if (err){
						console.log(err);
					} else {
						console.log("added a campground");
						// create a comment
						Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"		
						}, function(err, comment){
							if (err){
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment.");	
							}
						});
					}		
				});
			});		
		});
	};

module.exports = seedDB;


