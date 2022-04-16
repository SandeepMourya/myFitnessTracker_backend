var moment = require('moment'); 
const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    calories: {
        type: Number,
        required:true,
        trim: true
    },
    protein: {
        type: Number,
        required:true,
        trim: true
    },
    carbohydrates: {
        type: Number,
        required:true,
        trim: true
    },
    fats: {
        type: Number,
        
        trim: true
    },
    fibres: {
        type: Number,
        
        trim: true
    },
    
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date:{
        type:String,
        default:moment().format('L')
        
    }
},
{
    timestamps:true
}
  
)

const Food = mongoose.model('Food',foodSchema )

module.exports = Food