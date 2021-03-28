export async function get(request, context) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js

  let users = [{ username: "Arne" }, { username: "Tammer" }];
  return {
    body: {
      users,
    },
  };
}

export async function post(request, context) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js

  let users = [{ username: "Arne" }, { username: "Tammer" }];
  return {
    body: {
      users,
    },
  };
}