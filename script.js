const button = document.getElementById("get-joke");
const jokedisplay = document.getElementById("joke-here");

//displaying a joke on page load
window.onload = generatejoke;

//displaying a joke on button click
button.addEventListener("click", generatejoke);

//using async await

async function generatejoke() {
  //setting headers as a variable(accept is used here because it allows us to fetch data in json format in this api)
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //fetching data
  const response = await fetch("https://icanhazdadjoke.com", config);

  //storing json data fetched
  const data = await response.json();

  //displaying joke
  jokedisplay.innerHTML = data.joke;
}

//using .then

//function generatejoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokedisplay.innerHTML = data.joke;
//     });
// }
