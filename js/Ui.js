export class UI {
  constructor() {}

  showGames(data) {
    let card_Item = document.querySelector(".row");

    let cardContainer = "";
    for (let i = 0; i < data.length; i++) {
      cardContainer += `
                <div class=" item col-md-6  col-lg-4 col-xl-3   ">
                    <div class="card bg-main">
                       <img src="${
                         data[i].thumbnail
                       }" class="card-img-top w-100" alt="..." />
                         <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                      <h5 class="card-title text-white f ">${data[i].title}</h5>
                      <p  class=" p-1 rounded-2 f  free">Free</p>
                    </div>
                    <p class="card-text text-center text-white-50 bg-main f-14 f ">
                    ${data[i].short_description.split(" ", 8)}
                    </p>
                  </div>
                  <div class="card-footer ">
                    <div class="d-flex justify-content-between align-items-center ">
                      <p class="bg-box p-1 rounded-2">MMORPG</p>
                      <p class="bg-box p-1 rounded-2">PC (Windows)</p>
                    </div>
                  </div>
                </div>
              </div>
                  `;
    }

    card_Item.innerHTML = cardContainer;
  }

  showDetails(dataDetails) {
    let detailsContent = document.querySelector(".details-content");

    detailsContent.innerHTML = ` <h1>Details Game</h1>
            <div class="col-md-4">
              <div class="">
                <img src="${dataDetails.thumbnail}" alt="" class="w-100 " />
              </div>
            </div>
            <div class="col-md-8">
              <div class="">
                <h3 class=" mb-2 ">Title: ${dataDetails.title}</h3>
                <div class="d-flex align-items-center">
                  <p>Category:</p>
                  <p class="bg-details fw-bold p-1 ms-1 rounded-2">MMORPG</p>
                </div>
                <div class="d-flex align-items-center">
                  <p>Platform:</p>
                  <p class="bg-details fw-bold p-1 ms-1 rounded-2">${dataDetails.platform}</p>
                </div>
                <div class="d-flex align-items-center">
                  <p>Status:</p>
                  <p class="bg-details fw-bold p-1 ms-1 rounded-2">${dataDetails.status}</p>
                </div>
                <p class="mb-4 f-14">
                ${dataDetails.description}
                </p>
                <a class="show-game rounded-3 p-2 " href="${dataDetails.game_url}"> Show Game </a>
              </div>
            </div>`;
  }
}
