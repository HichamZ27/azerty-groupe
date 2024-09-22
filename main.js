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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Youtube vidéo
document.getElementById("open-popup").addEventListener("click", function () {
  var popup = document.getElementById("popup-video");
  var videoSrc = "https://www.youtube.com/embed/oM9NZ4B8d_E"; // Format URL d'intégration correct
  document.getElementById("youtube-video").src = videoSrc;
  popup.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  var popup = document.getElementById("popup-video");
  popup.style.display = "none";
  document.getElementById("youtube-video").src = ""; // Arrête la vidéo
});

window.onclick = function (event) {
  var popup = document.getElementById("popup-video");
  if (event.target === popup) {
    popup.style.display = "none";
    document.getElementById("youtube-video").src = ""; // Arrête la vidéo
  }
};
