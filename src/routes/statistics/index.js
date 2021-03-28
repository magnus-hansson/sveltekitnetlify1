export async function get(request) {
	users = [{ username: 'Arne' }, { username: 'Tammer' }];
	return {
		status: 200,
		body: {
			users
		}
	};
}
