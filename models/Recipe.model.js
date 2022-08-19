const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: Schema.Types.String,
    unique :true
  },
  level: {
    type: Schema.Types.String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },

  ingredients: {
    type: [Schema.Types.String],
    required:true
  },
  cuisine: {
    type: Schema.Types.String,
  },
  dishType: {
    type: Schema.Types.String,
  },
  image: {
    type: Schema.Types.String,
  },
  duration: {
    type: Schema.Types.Number,
    min:0
  },
  creator: {
    type: Schema.Types.String,
  },
  created: {
    default: new Date,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
