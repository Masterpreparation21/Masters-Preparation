var contents = document.querySelectorAll(".dropdown_content");
var heads = document.querySelectorAll(".drop_down");

for (let i = 0; i < heads.length; i++) {
  const head = heads[i];
  const content = contents[i];
  head.addEventListener("click", function () {
    content.classList.toggle("active");
  });
}
