const models = require("./models.js");
const { Vegetable, Plot, Gardener } = require("./models.js");

models.db
  .sync({ force: true })
  .then(() => {
    const newVeg = Vegetable.create({
      name: "carrot",
      color: "orange",
      planted_on: "12 Nov 2018"
    });
    console.log(newVeg.name);
    return newVeg;
  })
  .then(() => {
    const newGardener = Gardener.create({
      name: "Ralph",
      age: 45,
      favoriteVegetableId: vegetable.id
    });
    return newGardener;
  })
  .then(() => {
    const newPlot = Plot.create({
      size: 9,
      shaded: true,
      gardenerId: gardener.id
    });
    return newPlot;
  })
  .then(() => {
    console.log("Database synced!");
    // models.db.close();
  })
  .catch(err => {
    console.log("Something went wrong");
    console.log(err);
    models.db.close();
  });

module.exports = {
  models
};
