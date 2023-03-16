function lastChild(card) {
  const lastChild = document.createElement("div");
  lastChild.innerHTML = `
  <h2>Título do card</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vestibulum in neque et nisl.
  </p>
  `;

  card.appendChild(lastChild);
}

function firstChild(color, card) {
  const firstChild = document.createElement("div");
  firstChild.style.backgroundColor = color;

  card.appendChild(firstChild);
}

colors = ["#FF6363", "#63ECFF", "#F363FF", "#63FF73", "#FFDD63", "#6663FF"];

for (color of colors) {
  main = document.getElementsByTagName("main")[0].children[0];

  const card = document.createElement("div");
  card.classList.add("card")

  firstChild(color, card);
  lastChild(card);

  main.appendChild(card);
}