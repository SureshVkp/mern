const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	email:{
		type:String,
		required: [true, "Please provide a E-Mail"],
		unique: [true, "E-Mail Exist"]
	},
	password:{
		type: String,
		require: [true, "Please provide a Password"],
		unique: false
		
	}
});

module.exports = mongoose.model.users || mongoose.model("users", UserSchema);
