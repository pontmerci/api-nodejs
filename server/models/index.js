const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(
        config.database, config.username, config.password, config
    );
}


// fs
//     .readdirSync(__dirname)
//     .filter((file) =>
//         (file.indexOf('.') !== 0) &&
//         (file !== basename) &&
//         (file.slice(-3) === '.js'))
//     .forEach((file) => {
//         const model = sequelize.import(path.join(__dirname, file));
//         db[model.name] = model;
//
//     });


const Product = sequelize.define('product', {
    title: Sequelize.STRING
});
const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    age: Sequelize.INTEGER,
});
const Address = sequelize.define('address', {
    type: Sequelize.STRING,
    line_1: Sequelize.STRING,
    line_2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
});

Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
db['User'] = User;
db['Product'] = Product;
db['Address'] = Address;


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


Object.keys(db).forEach((modelName) => {

    db[modelName].sync();

});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;