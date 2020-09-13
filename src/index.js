const express = require('express');
const { MongoClient } = require('mongodb');
const morgan = require('morgan');
const routes = require('./api/routes');
const dao = require('./dao/dao');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.disable('x-powered-by')

app.use(morgan('dev'))



const ConnectApp = async () => {
    try {
        const client = await MongoClient.connect(
            "mongodb+srv://project-user:deathwing00@todos-buwxe.mongodb.net/test?retryWrites=true&w=majority",
            { useNewUrlParser: true }
        )
        console.log('Got client.')

        app.use(routes)

        //inject DB
        await dao.injectDB(client);

        app.listen(5001, () => {
            console.log('Listening on port 5001')
        })

    } catch (error) {
        console.error(err.stack)
        process.exit(1)
    }
}

ConnectApp();
