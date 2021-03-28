export async function get(request) {
	fandango = [{ username: 'Arne' }, { username: 'Tammer' }];
	return {
		status: 200,
		body: {
			fandango
		}
	};
}
