import pkg from 'mongodb';
const { MongoClient } = pkg;
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);
const uri =
	
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
	try {
		await client.connect();
		const database = client.db('garagedb');
		const movies = database.collection('People');
		// Query for a movie that has the title 'Back to the Future'
		const query = { name: 'Arne' };
		const movie = await movies.findOne(query);
		console.log(movie);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);
