const mongoose = require('mongoose');

//console.log(process.env.MONGO_URI)
const connectDB = mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Mongo connecté')
    })
    .catch(error => {
        console.error('Erreur lors de la connection : ', error)
    })

module.exports = connectDB;

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         mongoose.connect(process.env.MONGO_URI, () => console.log("Mongo connecté"));
//     } catch (err) {
//         console.log(err);
//         process.exit()
//     }
// }
