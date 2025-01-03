
const { MongoClient } = require('mongodb');

const logActivity = async (data) => {

    // MongoDB URI and Database Details
    const mongouri = process.env.MONGODB_URI; // Replace with your MongoDB URI
    const dbName = 'test';       // Replace with your database name
    const collectionName = 'activity'; // Replace with your collection name

    const mongodbclient = new MongoClient(mongouri);

    try {
        // Connect to the MongoDB cluster
        await mongodbclient.connect();
        console.log('Connected to MongoDB.');

        // Select the database and collection
        const database = mongodbclient.db(dbName);
        const collection = database.collection(collectionName);

        const chatCompletion = {
        userId: data.useremail,
        prompt: data.prompt,
        completion: data.completion,
        datetime: new Date()
        };

        // Insert the chatCompletion object
        const result = await collection.insertOne(chatCompletion);
        console.log(`New document inserted with _id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error inserting document:', error);
    } finally {
        // Close the connection
        await mongodbclient.close();
    }

};

module.exports = {
    logActivity
};
