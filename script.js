const blue = ['hard', 'hard', 'easy', 'easy', 'easy', 'hard', 'normal', 'hard', 'normal', 'easy', 'normal', 'normal'];
const brown = ['normal', 'normal', 'normal', 'normal', 'normal', 'hard', 'hard', 'hard', 'hard', 'hard', 'easy', 'easy', 'easy', 'easy', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy'];
const green = ['easy', 'hard', 'hard', 'hard', 'hard', 'hard', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy', 'normal', 'normal', 'normal', 'easy', 'easy', 'easy'];
let cardSet = [];
let stage1 = [];
let stage2 = [];
let stage3 = [];


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


  let ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      count: 16,
      cardFace: 'assets/Ancients/Azathoth.png',
      stage:[],
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
      count: 15,
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
      count: 16,
      cardFace: 'assets/Ancients/iogSothoth.png',
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
      count: 16,
      cardFace: 'assets/Ancients/shubNiggurath.png',
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
  let ancientId = 'azathoth';
  let mode = 'easest';
  
  function selectAncients(e) {
    let target = e.target;
    if (target.id == 'ancients') return;
      let selectId = target.id;
      if (selectId != hero.id) {
        hero.classList.remove('ancientBorder');
        target.classList.add('ancientBorder');
        hero = target;
        ancientId = hero.id
        document.getElementById('text1').textContent = 'Выбранный Древний: ' + ancientId;
      }
    } 
    function selectMode(e) {
        let target = e.target;
        if (target.id == 'buttonsMode') return;
        mode = target.id;
        document.getElementById('text2').textContent = 'Выбранная Сложность: ' + mode;
        } 


    function createCardObject()   {
  
      for (let i = 0; i < blue.length; i++) {
        let anyCard = {};
        anyCard.color = 'blue';
        anyCard.range = blue[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `assets/MythicCard/blue/blue${i+1}.png`;
        anyCard.random = Math.random();
        cardSet.push(anyCard);
      }  
      for (let i = 0; i < green.length; i++) {
        let anyCard = {};
        anyCard.color = 'green';
        anyCard.range = green[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `assets/MythicCard/green/green${i+1}.png`;
        anyCard.random = Math.random();
        cardSet.push(anyCard);
      }  
      for (let i = 0; i < brown.length; i++) {
        let anyCard = {};
        anyCard.color = 'brown';
        anyCard.range = brown[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `assets/MythicCard/brown/brown${i+1}.png`;
        anyCard.random = Math.random();
        cardSet.push(anyCard);
      }  
      cardSet.sort((a,b) => a.random - b.random);
      // console.log(cardSet);
      // это мы собрали все карты в одну кучу, указав для каждой адрес картинки и ключ, по которому будем случайно выбирать карту
      // тут надо убрать (не добавлять) легкие или сложные карты для двух режимов. завтра

    }

    function createDeck() {
    createCardObject();
    if (mode == 'easest') cardSet.sort((a,b) => a.rangeNum - b.rangeNum);
    console.log(cardSet);
    // сортируем массив чтобы для очеь легкого режима все легкие карты были вначале, потом нормальные. для очень тяжелого - наоборот. но это завтра

    
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
  document.getElementById('text1').textContent = 'Выбранный Древний: ' + ancientId;
  document.getElementById('text2').textContent = 'Выбранная Сложность: ' + mode;
  document.querySelector('.buttonsBlock').addEventListener('click', selectMode);
  document.getElementById('start').addEventListener('click', createDeck);