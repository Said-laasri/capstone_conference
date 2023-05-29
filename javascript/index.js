const speakerArray = [
  {
    image: "./image/professor-1.jpg",
    name: "Greg Paul",
    title: "Partner LLC Mavric",
    description:
      "Greg paul is a father of an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present",
  },
  {
    image: "./image/professor-2.jpg",
    name: "Gearge Janko",
    title: "CEO LLC BobTOwn",
    description:
      "Gearge Janko is an entrepeneur in the US and one of the bigest influwencers in the clout bisness and stand-up comedian and actor",
  },
  {
    image: "./image/professor-3.jpg",
    name: "Mike Mijlak",
    title: "Partner LLC Mavric",
    description:
      "Mike mijlak is an entrepeneur in the US and one of the bigest influwencers in the clout bisness writer and podcaster",
  },
  {
    image: "./image/professor-4.jpg",
    name: "David Dobrik",
    title: "Owner LLC Dobriks",
    description:
      "David Dobrik is an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present and pizza franchise",
  },
  {
    image: "./image/professor-5.jpg",
    name: "Ilya Fidy",
    title: "Partner LLC Dobriks and CEO Xeela",
    description:
      "Ilya Fidy is an entrepeneur in the US with 3 LLC to manage is one of the most proffessional guys out there",
  },
  {
    image: "./image/professor-6.jpg",
    name: "Jason Nash",
    title: "Comedian and influencer",
    description:
      "Jason Nash is a father of two and co host on views podcast and a new owner of the jason nahs nation website for paytrion content",
  },
];

const speakerBio = document.querySelector(".speakers-bio");

speakerBio.innerHTML = speakerArray
  .map(
    (speaker) => `<div class="speaker">
    <div class="speaker-bg"></div>
    <img src=${speaker.image}  class="speaker-img" alt="speaker" />
    <div class="speaker-content">
     <h1>${speaker.name}</h1>
     <h3>${speaker.title}</h3>
     <p>${speaker.description}</p>
     </div>
    </div>`
  )
  .join("");
