import { connectToDatabase } from '$lib/db';

export async function get(request, context) {
	try {
		console.log('1');
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection('People');
		const query = { name: 'Arne' };
		const person = await collection.findOne(query);

		return {
			status: 200,
			body: { person }
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				error: 'Error occured'
			}
		};
	}
}
