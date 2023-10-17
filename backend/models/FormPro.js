const mongoose = require("mongoose");

const formProSchema = new mongoose.Schema({

    form_name:{
        type:String,
        default: "",
        unique: true
    },
    first_name:{
        type:String,
        default: ""
    },
    last_name:{
        type:String,
        default: ""
    },
    email:{
        type:String,
        default: ""
    },
    password:{
        type:String,
    },
    username:{
        type:String,
        default: ""
    },
    dob:{
        type: Date,
        default: Date.now,
    },
    gender:{
        type:String,
        default: ""
    },
    phNumber:{
        type: Number,
        default: ""
    },
    address:{
        type: String,
        default: ""
    },
    city:{
        type: String,
        default: ""
    },
    state:{
        type: String,
        default: "",
    },
    postal:{
        type: String,
        default: ""
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isProForm:{
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model("Form", formProSchema);