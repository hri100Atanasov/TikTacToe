import gamesService from "./services/gamesService.js";

new gamesService().getAllGames().then((games) => {
  games.forEach((game) => {
    console.log(game);
  });
});
