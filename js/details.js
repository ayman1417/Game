import { UI } from "./Ui.js";
export class Details {
  constructor(idGame) {
    this.displayDetails(idGame);
  }

  async displayDetails(idGame) {
    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let apiDetails = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`,
      options
    );

    let dataDetails = await apiDetails.json();
    console.log(dataDetails);

    let ui = new UI();
    ui.showDetails(dataDetails);

    loading.classList.add("d-none");
  }
}
