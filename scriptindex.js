let content = document.getElementById("content");
let showmore = document.getElementById("show-more");

showmore.onclick = function () {
  if (content.className == "open") {
    content.className = "";
    showmore.innerHTML = "show more";
  } else {
    content.className = "open";
    showmore.innerHTML = "show less";
  }
};
