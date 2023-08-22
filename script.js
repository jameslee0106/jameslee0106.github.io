const toggleNav = () => {
  const iconContainer = document.getElementById("icon-container");
  const body = document.body;

 
  body.dataset.nav = body.dataset.nav === "true" ? "false" : "true";

 
  if (body.dataset.nav === "true") {
    iconContainer.classList.add("open");
  } else {
    iconContainer.classList.remove("open");
  }
};

