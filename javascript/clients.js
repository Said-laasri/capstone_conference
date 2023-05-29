const clientsEl = document.querySelector(".clients");

const clientsInfo = [
  {
    link: "https://www.netflix.com",
    imgUrl: ["./image/netflix.svg", "Netflix logo"],
  },
  {
    link: "https://www.google.com",
    imgUrl: ["./image/google.svg", "Google logo"],
  },
  {
    link: "https://www.cocacola.com",
    imgUrl: ["./image/cocacola.svg", "CocaCola logo"],
  },
  {
    link: "https://www.microsoft.com",
    imgUrl: ["./image/microsoft.svg", "Microsoft logo"],
  },
  {
    link: "https://www.paypal.com",
    imgUrl: ["./image/paypal.svg", "PayPal logo"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  clientsInfo.forEach((client) => {
    let builder = "";
    builder = `
          <a href="${client.link}">
            <img class="client-logo" src="${client.imgUrl[0]}" alt="${client.imgUrl[1]}"/>
          </a>`;

    const clientEl = document.createElement("li");
    clientEl.innerHTML = builder;
    clientEl.classList.add("client");
    clientsEl.appendChild(clientEl);
  });
});
