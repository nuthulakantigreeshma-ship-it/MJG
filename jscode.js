let menuicon = document.querySelector(".servies-container");
  document.getElementsByClassName("menuicon").addEventListener("click", () => {
    if (menuicon) {
      menuicon.classList.toggle("showData");
    } else {
      console.error("Element not found!");
    }
  });