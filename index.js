const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(async () => {
    const myFuckingNewReceipe = await Recipe.create({
      title: "create my fucking receipe",
      level: "UltraPro Chef",
      ingredients: [
        "1/2 cup water",
        "5 tablespoons water",
        "1/3 cup curry sauce ",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs",
      ],
      cuisine: "Martian",
      dishType: "full your body",
      image:
        "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Not a chef but better",
    });
    const myNewFuckingReceipe = await Recipe.insertMany(data);
    const myUpdate = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );
    const iWantToDeleteYou = await Recipe.findOne({ title: "Carrot Cake" });
    const youMayBeDeleted = await Recipe.deleteOne(iWantToDeleteYou);

    mongoose.connection.close();
  })

  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
