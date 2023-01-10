
//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
},
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({

  rating: 10,
  review: "Peaches are so yummy!"
});

// fruit.save()



const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const plum = new Fruit({
  name: 'Plum',
  score: 9,
  review: "Very Good"
});

plum.save();

const person = new Person ({
  name: "Finn",
  age: 21,
});

person.save()

Person.updateOne({name: "Finn"}, {favouriteFruit: plum}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});



Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }
});

// Fruit.updateOne({_id: "636721aa700e12583db140cd"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });













//fruit.save();
