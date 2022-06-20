const app = require("./app.js");
const sequelize = require("./infrastructure/persistence/sequelize/sequelize.config");

async function main() {
  await sequelize.authenticate();
  app.listen(3000);
  console.log("server is listening on port", 3000);
}

main();
