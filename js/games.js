import { Details } from "./details.js";
import { UI } from "./Ui.js";
export class Games {
  constructor() {
    this.show("mmorpg");
    this.getCategory();
    this.showHome();
  }
  getCategory() {
    let category = document.querySelectorAll(".nav-link");
    for (let i = 0; i < category.length; i++) {
      category[i].addEventListener("click", () => {
        this.show(category[i].innerHTML);
      });
    }
  }

  showHome() {
    let btn_Close = document.querySelector(".close");
    btn_Close.addEventListener("click", () => {
      let home = document.querySelector("#home");
      let details = document.querySelector("#details");

      home.classList.remove("d-none");
      details.classList.add("d-none");
    });
  }

  showDetails(data) {
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        let home = document.querySelector("#home");
        let details = document.querySelector("#details");
        let D = new Details(data[i].id);
        home.classList.add("d-none");
        details.classList.remove("d-none");
        console.log(data[i].id);
      });
    }
  }
  async show(cat) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "384d21589dmsh6fcb75046aa83fdp1c427ajsncabce55b3beb",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    // let card_Item = document.querySelector(".row");
    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    let data = await api.json();
    console.log(data);

    let ui = new UI();
    ui.showGames(data);

    loading.classList.add("d-none");

    this.showDetails(data);
  }
}
