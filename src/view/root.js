const $ = document.querySelector.bind(document);
import navigation from "./layouts/navigation.js";
import mainview from "./layouts/mainview.js";
function root() {
  const rootRender = [
    `<div class="app">
        <div class="grid">
          <div class="row">
            ${navigation()}
            ${mainview()}
            </div>
          </div>
        </div>
      </div>`,
  ];
  $("#root").innerHTML = rootRender;
}
export default root;
