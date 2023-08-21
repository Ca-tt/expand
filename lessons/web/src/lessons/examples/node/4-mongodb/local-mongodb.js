import { MongoClient } from 'mongodb';

/* local development */
const url = `mongodb://localhost:27017/`;
const dbName = 'myProject';
const collectionName = 'documents';

const client = new MongoClient(url);

connectToDB(client, dbName)
    .then(async (dbConnection) => {
        await getCollection(dbConnection, collectionName)
    })
    .catch((error) => {
        console.log('error: ', error);
    })
    .finally(() => {
        client.close()
    })


async function connectToDB(client, dbName) {
    try {
        // console.log('text');
        await client.connect();
        console.log('MongoDB server connected');

        const dbConnection = await client.db(dbName);
        console.log(`Database connection established`);

        return dbConnection;
    }
    catch (error) {
        console.log('error: ', error);
    }
}

async function getCollection(db, collectionName) {
    // console.log('db: ', db);
    try {
        let collection = db.collection(collectionName);
        
        let insertIsAllowed = false;
        
        let usersDB = db.collection('users');
        
        if (insertIsAllowed) {
            usersDB.insertOne({ name: 'Damir Ruslanovich', age: 10 })
            // await usersDB.insertMany([
            //     { "_id": 1, "name": "apples", "qty": 5, "rating": 3 },
            //     { "_id": 2, "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
            //     { "_id": 3, "name": "oranges", "qty": 6, "rating": 2 },
            //     { "_id": 4, "name": "avocados", "qty": 3, "rating": 5 },
            // ])
        }

        let searchCriteria = { age: { $lt: 11 }};

        let documents = usersDB.find(searchCriteria);
        
        for await (const document of documents) {
            console.log('documents: ', document);
        }

        // let collections = usersDB.find();

        // for await (let doc of collections) {
        //     console.log(doc);
        // }

        // console.log('usersDB: ', usersDB);




        return collection;
    } catch (error) {
        console.log('error: ', error);
    }
}
