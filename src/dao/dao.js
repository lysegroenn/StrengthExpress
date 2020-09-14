const mongodb = require('mongodb');

let Strength

module.exports = {
    injectDB: async (client) => {
        if (Strength) {
            return;
        }
        try {
            console.log("injecting db..")
            Strength = await client.db("Strength").collection("test");
        } catch (e) {
            console.log(`Error connecting to database: ${e}`)   
        }
    },
    testGet: () => (
        new Promise((resolve, reject) => {
            Strength.find({}, (err, data) => {
                err ? reject(err) : resolve(data.toArray());
            })
        })
    ),
    addRecord: (user, stats) => (
        new Promise((resolve, reject) => {
            Strength.insertOne({googleId: user, stats: stats}, (err, data) => {
                err ? reject(err) : resolve(data);
            })
        })
    )
}
