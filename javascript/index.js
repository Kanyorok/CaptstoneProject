window.addEventListener('DOMContentLoaded', () => {
  const featuredSpeakers = [
    {
      id: 1,
      speakerName: 'Yohai Benkler',
      speakerTitle: 'Harvard Law School Professor',
      speakerInfo:
        'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
      img: 'images/speaker_01.png',
    },
    {
      id: 2,
      speakerName: 'Gilnam Jeon',
      speakerTitle: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
      speakerInfo:
        "It opened the Internet era in earnest by developing Asia's first internet protocol network SDN and leading the nation's first dedicated line Internet connection in 1990.",
      img: 'images/speaker_02.png',
    },
    {
      id: 3,
      speakerName: 'Soyoung Noh',
      speakerTitle: 'Art Center Nabi Director, CC Korea Director',
      speakerInfo:
        "As the author of <Digital Art, Art of Our Time>, he opened 'Art Center Nabi', the first digital art institution in Korea in 2000, and is currently in office.",
      img: 'images/speaker_03.png',
    },
    {
      id: 4,
      speakerName: 'Julia Leda',
      speakerTitle: 'Representative of the Young Pirates of Europe',
      speakerInfo:
        "European integration and young people's participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Union's copyright law in July.",
      img: 'images/speaker_04.png',
    },
    {
      id: 5,
      speakerName: 'Lyla Treticov',
      speakerTitle: 'Secretary General of the Wikimedia Foundation',
      speakerInfo:
        "Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world's population.",
      img: 'images/speaker_05.png',
    },
    {
      id: 6,
      speakerName: 'Ryan Merkly',
      speakerTitle: 'Creative Commons CEO, former Mozilla Foundation COO',
      speakerInfo:
        'He led the open source project at the Mozilla Foundation and joined the CC CEO in 2014. He has been active in open movements such as open government and open source.',
      img: 'images/speaker_06.png',
    },
  ];

  const closeBtn = document.querySelector('.close_icon');
  const hamburger = document.querySelector('.hamburger_icon');
  const toggle = document.querySelector('.main_menu');
  const moreInfo = document.querySelector('.moreInfo');

  function toggleMenu() {
    window.addEventListener('click', (e) => {
      if (e.target === hamburger) {
        toggle.style.visibility = 'visible';
        hamburger.style.visibility = 'hidden';
      } else if (e.target === closeBtn) {
        toggle.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        window.location.reload();
      }
    });
  }

  const dynamicFeaturedSpeakersSections = () => {
    const divCard = featuredSpeakers.map((guests) => {
      const winSize = window.innerWidth;

      if (winSize < 768) {
        if (guests.id <= 2) {
          const speakerSection = document.createElement('div');
          speakerSection.classList.add('speakers');
          const imageDiv = document.createElement('div');
          imageDiv.classList.add('feature_images');
          const textDiv = document.createElement('div');
          const underlineText = document.createElement('hr');
          textDiv.classList.add('desc');
          const speakerName = document.createElement('h2');
          speakerName.innerHTML = guests.speakerName;
          const speakerTitle = document.createElement('h3');
          speakerTitle.innerHTML = guests.speakerTitle;
          const speakerInfo = document.createElement('p');
          speakerInfo.innerHTML = guests.speakerInfo;
          textDiv.appendChild(speakerName);
          textDiv.appendChild(speakerTitle);
          textDiv.appendChild(underlineText);
          textDiv.appendChild(speakerInfo);
          const sourcePic = document.createElement('img');
          sourcePic.setAttribute('src', guests.img);
          imageDiv.appendChild(sourcePic);
          speakerSection.appendChild(imageDiv);
          speakerSection.appendChild(textDiv);
          document.querySelector('.grid_style').appendChild(speakerSection);
        }
      } else {
        const speakerSection = document.createElement('div');
        speakerSection.classList.add('speakers');
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('feature_images');
        const textDiv = document.createElement('div');
        const underlineText = document.createElement('hr');
        textDiv.classList.add('desc');
        const speakerName = document.createElement('h2');
        speakerName.innerHTML = guests.speakerName;
        const speakerTitle = document.createElement('h3');
        speakerTitle.innerHTML = guests.speakerTitle;
        const speakerInfo = document.createElement('p');
        speakerInfo.innerHTML = guests.speakerInfo;
        textDiv.appendChild(speakerName);
        textDiv.appendChild(speakerTitle);
        textDiv.appendChild(underlineText);
        textDiv.appendChild(speakerInfo);
        const sourcePic = document.createElement('img');
        sourcePic.setAttribute('src', guests.img);
        imageDiv.appendChild(sourcePic);
        speakerSection.appendChild(imageDiv);
        speakerSection.appendChild(textDiv);
        document.querySelector('.grid_style').appendChild(speakerSection);
      }
      return null;
    });
    return divCard;
  };

  function moreButton() {
    for (let i = 0; i < featuredSpeakers.length; i += 1) {
      if (featuredSpeakers[i].id > 2) {
        const speakerSection = document.createElement('div');
        speakerSection.classList.add('speakers');
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('feature_images');
        const textDiv = document.createElement('div');
        textDiv.classList.add('desc');
        const underlineText = document.createElement('hr');
        const speakerName = document.createElement('h2');
        speakerName.innerHTML = featuredSpeakers[i].speakerName;
        const speakerTitle = document.createElement('h3');
        speakerTitle.innerHTML = featuredSpeakers[i].speakerTitle;
        const speakerInfo = document.createElement('p');
        speakerInfo.innerHTML = featuredSpeakers[i].speakerInfo;
        textDiv.appendChild(speakerName);
        textDiv.appendChild(speakerTitle);
        textDiv.appendChild(underlineText);
        textDiv.appendChild(speakerInfo);
        const sourcePic = document.createElement('img');
        sourcePic.setAttribute('src', featuredSpeakers[i].img);
        imageDiv.appendChild(sourcePic);
        speakerSection.appendChild(imageDiv);
        speakerSection.appendChild(textDiv);
        document.querySelector('.grid_style').appendChild(speakerSection);
      }
    }
    moreInfo.style.display = 'none';
  }

  closeBtn.addEventListener('click', toggleMenu);
  hamburger.addEventListener('click', toggleMenu);
  moreInfo.addEventListener('click', moreButton);
  dynamicFeaturedSpeakersSections();
});
