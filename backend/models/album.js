const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        type: String,
        required: false,
    },
    prix:{
        type:Number,
        required:true
    },
    

});
module.exports = mongoose.model("album", albumSchema);