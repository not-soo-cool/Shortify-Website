const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({

    detail_name:{
        type:String,
        default: "",
    },
    first_name:{
        type:String,
        default: "",
    },
    middle_name:{
        type:String,
        default: "",
    },
    last_name:{
        type:String,
        default: "",
    },
    preferred_name:{
        type:String,
        default: "",
    },
    dob:{
        type: Date,
        default: Date.now,
    },
    address:{
        type: String,
        default: "",
    },
    city:{
        type: String,
        default: "",
    },
    state:{
        type: String,
        default: "",
    },
    postal:{
        type: Number,
        default: null,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    ssn:{
        type: Number,
        default: null,
    },
    id:{
        type: Number,
        default: null,
    },
    gender:{
        type:String,
        default: "",
    },
    ssn:{
        type: Number,
        default: null,
    },
    id:{
        type: Number,
        default: "",
    },
    marital:{
        type: String,
        default: "",
    },
    phNumber:{
        type: Number,
        default: "",
    },
    email:{
        type:String,
        default: "",
    },
    emergency:{
        name:{
            type: String,
            default: "",
        },
        relation:{
            type: String,
            default: "",
        },
        phNum:{
            type: Number,
            default: null,
        },
    },
    isDetailPro:{
        type: Boolean,
        default: false,
    }
    
});


module.exports = mongoose.model("Detail", detailSchema);