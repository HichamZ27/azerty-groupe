let form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.classList.add("success");
      status.innerHTML = "Votre message a été envoyé avec succès!";
      form.reset();
    })
    .catch((error) => {
      status.classList.add("error");
      status.innerHTML = "Oops! Une erreur s'est produite veuillez réessayer!";
    });
}
form.addEventListener("submit", handleSubmit);

function myFunction(x) {
  x.classList.toggle("change");
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
let mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}
x.classList.toggle("none");
