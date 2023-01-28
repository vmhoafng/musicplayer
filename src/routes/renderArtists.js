const $ = document.querySelector.bind(document);
import rooter from "../view/root.js";
import artists from "../public/artists.js";
rooter();
function renderArtists() {
  const artistlistRender = artists.map((artist) => {
    return `
    <div class="content-artist__item">
    <div class="content-artist__img-item">
      <a
        title="${artist.name}"
        href="./client.html"
        class="content-artist__album-link">
        <img src="${artist.image}" alt="" class="content-artist__img" />
      </a>
      <img src="${artist.image}" alt="" class="content-artist__img--blur" />
    </div>
    <a href="#" class="content-artist__album-name">
      <span>${artist.name}</span>
    </a>
    <a href="#" class="content-artist__artist-name">
      <span>${artist.singer}</span>
    </a>
  </div>`;
  });
  $(".content-artist__description").innerHTML = `- top ${artists.length}`;
  return artistlistRender;
}
export default renderArtists;
