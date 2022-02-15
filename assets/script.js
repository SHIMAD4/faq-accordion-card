let intervalId;
let dropDown = document.querySelectorAll(".js_dropDown");
let image = document.querySelectorAll(".js_drop--icon");
let title = document.querySelectorAll(".js_dropDown--title");
let subTitle = document.querySelectorAll(".js_drop--subtitle");

dropDown.forEach(e => {
  e.addEventListener("click", e => {
    const menu = e.currentTarget.dataset.path;
    let boldTarget = document.querySelector(`[data-bold=${menu}]`);
    let dataTarget = document.querySelector(`[data-target=${menu}]`);
    let imageTarget = document.querySelector(`[data-img=${menu}]`);

    title.forEach(e => {
      if (!boldTarget.classList.contains("open")) {
        boldTarget.classList.toggle("bold");
      }
    });
    
    subTitle.forEach(e => {
      if (!dataTarget.classList.contains("open")) {
        dataTarget.classList.toggle("show");
      }
    });
    
    image.forEach(e => {
      if(!imageTarget.classList.contains("img-rotate-end")) {
        intervalId = setTimeout(() => {
          imageTarget.classList.add("img-rotate-end");
        }, 0);
      }else {
        intervalId = setTimeout(() => {
          imageTarget.classList.remove("img-rotate-end");
          imageTarget.classList.add("img-rotate-start");
        }, 0);
      }
    })
  })
});