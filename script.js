let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("Active");
};
const outerAccordions = document.querySelectorAll(".outer-accordion-item");
const innerAccordions = document.querySelectorAll(".inner-accordion-item");

outerAccordions.forEach((outerAccordion) => {
  const outerHeader = outerAccordion.querySelector(
    ".outer-accordion-item-header"
  );
  const outerBody = outerAccordion.querySelector(".outer-accordion-item-body");

  outerHeader.addEventListener("click", function () {
    outerAccordion.classList.toggle("active");
  });

  outerBody.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

innerAccordions.forEach((innerAccordion) => {
  const innerHeader = innerAccordion.querySelector(
    ".inner-accordion-item-header"
  );
  const innerBody = innerAccordion.querySelector(".inner-accordion-item-body");

  innerHeader.addEventListener("click", function (event) {
    event.stopPropagation();
    innerAccordion.classList.toggle("active");
  });

  innerBody.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwb7cyYxVqLA1HeVPZ5tBpl5HqekA5GD-sFobzJ952q-y0MmiiwatiARgQ5EYjai_jl/exec";

const form = document.forms["contact-form"];
const submit = document.querySelector("#submit-btn");
const successMessage = document.querySelector(".successMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit.innerHTML = "Sending...";
  submit.disabled = true;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      successMessage.classList.add("show")
      submit.innerHTML = "Submit";
      form.reset();
      setTimeout(() => {
        window.location.reload();
        submit.disabled = false;
        successMessage.classList.remove("show");
      }, 5000);
    });
  });

enableBtn = () => {
  if(
      document.querySelector("#name").value &&
      document.querySelector("#email").value &&
      document.querySelector("#message").value && 
      document.querySelector("#subject").value && 
      document.querySelector("#phone").value
    ) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
}
form.addEventListener("keyup", enableBtn);
