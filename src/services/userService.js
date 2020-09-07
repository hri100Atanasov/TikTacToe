export default class UserService {
  async getAllUsers() {
    let result = await fetch(
      "https://tiktactoe-9da9e.firebaseio.com/Users.json"
    );
    return result.json();
  }

  async createNewUser(id, username) {
    let data = {
      games: [],
      name: username,
    };
    return await fetch(
      "https://tiktactoe-9da9e.firebaseio.com/Users/" + id + ".json",
      {
        method: "PUT",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  }
}
