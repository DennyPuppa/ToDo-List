const mongoose = require('mongoose');

const dbName = 'ToDoList';

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB + dbName);
        console.log('Database connesso!');        
    } catch (err) {
        console.log(err);        
    }
}

module.exports = start;