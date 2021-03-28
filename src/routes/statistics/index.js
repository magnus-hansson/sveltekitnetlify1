export async function get(request) {
	let fandango = [{ username: 'Arne' }, { username: 'Tammer' }];
	return {
		status: 200,
		body: {
			fandango
		}
	};
}
