import { MongoClient, ServerApiVersion } from 'mongodb';
const dbPass = 'cattTT2017';
const dbURI = `mongodb+srv://damir:${dbPass}@cluster0.bhj4q.mongodb.net/?retryWrites=true&w=majority`;
const dbName = `mongodb-test`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db(dbName).command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        let connection = client.db(dbName)
        // let 

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
