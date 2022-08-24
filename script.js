const difficulties = [
    {
      id: 'easest',
      name: 'Очень Низкая'
    },
    {
        id: 'easy',
        name: 'Низкая'
      },
    {
      id: 'normal',
      name: 'Средняя'
    },
    {
      id: 'hard',
      name: 'Высокая'
    },
    {
        id: 'hardest',
        name: 'Очень Высокая'
      },
  ]


  const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      cardFace: '/assets/Ancients/Azathoth.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      cardFace: 'assets/Ancients/Cthulthu.png',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      cardFace: './assets/Ancients/iogSothoth.png',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      cardFace: './assets/Ancients/shubNiggurath.png',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]
  const greenNumber = 18;
  const blueNumber = 12;
  const brownNumber = 21;
  let hero;
  let mode = 'easest';
  
  function selectAncients(e) {
    let target = e.target;
    if (target.id == 'ancients') return;
      let selectId = target.id;
      if (selectId != hero.id) {
        hero.classList.remove('ancientBorder');
        target.classList.add('ancientBorder');
        hero = target;
        document.querySelector('tex1').textContent = 'Выбранный Древний: ' + hero.id;
      }
    } 
    function selectMode(e) {
        let target = e.target;
        if (target.id == 'buttonsMode') return;
        mode = target.id;
        document.querySelector('tex1').textContent = 'Выбранная Сложность: ' + mode;
        } 

    function createDeck() {

    }

  for (let i = 0; i < 4; i++) {
    let ancientsPerson = document.createElement('div');
    ancientsPerson.className = 'ancientPicture';
    if (ancientsData[i].id == 'azathoth') { 
        ancientsPerson.classList.add('ancientBorder');
        hero = ancientsPerson;
    }
    ancientsPerson.id = ancientsData[i].id;
    ancientsPerson.style.backgroundImage = `url(${ancientsData[i].cardFace})`;
    ancients.append(ancientsPerson);
  }
  document.querySelector('.ancientsBlock').addEventListener('click', selectAncients);

  for (let i = 0; i < 5; i++) {
    let modeButton = document.createElement('button');
    modeButton.className = 'selectModeButton';
    modeButton.id = difficulties[i].id;
    modeButton.textContent = difficulties[i].name;
    buttonsMode.append(modeButton);
  }
  document.querySelector('.buttonsBlock').addEventListener('click', selectMode);
  document.getElementById('start').addEventListener('click', createDeck);