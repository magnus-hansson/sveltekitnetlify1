export async function get(request, context) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js

  users = [{ username: "Arne" }, { username: "Tammer" }];
  return {
    body: {
      users,
    },
  };
}
