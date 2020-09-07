export default class gamesService {
  async getAllGames() {
    let result = await fetch(
      "https://tiktactoe-9da9e.firebaseio.com/Games.json"
    );
    return result.json();
  }
}
