const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => { 
  if (document.cookie.includes("cookie")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
 
      if (button.id == "acceptBtn") { 
        //365 days
        document.cookie = "cookieBy= cookie; max-age=" + 365;
      }
    });
  });
};
 
window.addEventListener("load", executeCodes);
