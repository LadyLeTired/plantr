const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr", {});

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

const Plot = db.define("plot", {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
});

const Vegetable = db.define("vegetable", {
  //other tables DON'T depend on veg, so we work on it first
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
});

Plot.belongsTo(Gardener);

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });

Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" }); //TO-DO figure out as vs. foreignkey

module.exports = {
  db,
  Vegetable,
  Plot,
  Gardener
};
