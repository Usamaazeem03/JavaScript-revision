document.getElementById("jokeBtn").addEventListener("click", getJoke);
function getJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch((error) => {
      console.log("Error fetching joke:", error);
      document.getElementById("joke").textContent =
        "Oops! Coulsn't fetch a joke.";
    });
}
