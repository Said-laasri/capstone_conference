const speakersG = [
  {
    imag: './images/professor-1.jpg',
    name: 'Greg Paul',
    profession: 'Partner LLC Mavric',
    about: 'Greg paul is a father of an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present',
  },
  {
    imag: './images/professor-2.jpg',
    name: 'Gearge Janko',
    profession: 'CEO LLC BobTOwn',
    about: 'Gearge Janko is an entrepeneur in the US and one of the bigest influwencers in the clout bisness and stand-up comedian and actor',
  },
  {
    imag: './images/professor-3.jpg',
    name: 'Mike Mijlak',
    profession: 'Partner LLC Mavric',
    about: 'Mike mijlak is an entrepeneur in the US and one of the bigest influwencers in the clout bisness writer and podcaster',
  },
  {
    imag: './images/professor-4.jpg',
    name: 'David Dobrik',
    profession: 'Owner LLC Dobriks',
    about: 'David Dobrik is an entrepeneur in the US and one of the bigest influwencers in the clout bisness at the present and pizza franchise',
  },
  {
    imag: './images/professor-5.jpg',
    name: 'Ilya Fidy',
    profession: 'Partner LLC Dobriks and CEO Xeela',
    about: 'Ilya Fidy is an entrepeneur in the US with 3 LLC to manage is one of the most proffessional guys out there',
  },
  {
    imag: './images/professor-6.jpg',
    name: 'Jason Nash',
    profession: 'Comedian and influencer',
    about: 'Jason Nash is a father of two and co host on views podcast and a new owner of the jason nahs nation website for paytrion content',
  }];

function Speaker() {
  const cardSpeaker = document.querySelector('.speakers');
  for (let i = 0; i < speakersG.length; i += 1) {
    const containerSpeaker = document.createElement('div');
    containerSpeaker.classList.add('grid-card');
    containerSpeaker.innerHTML = `<div class="back-img" ><img src=${speakersG[i].imag} alt="professor"></div>
    <div><h4>${speakersG[i].name}</h4>
    <h5>${speakersG[i].profession}</h5>
    <p>${speakersG[i].about}</p>
    </div>`;
    cardSpeaker.appendChild(containerSpeaker);
  }
}

Speaker();