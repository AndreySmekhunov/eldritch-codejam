const blue = ['hard', 'hard', 'easy', 'easy', 'easy', 'hard', 'normal', 'hard', 'normal', 'easy', 'normal', 'normal'];
const brown = ['normal', 'normal', 'normal', 'normal', 'normal', 'hard', 'hard', 'hard', 'hard', 'hard', 'easy', 'easy', 'easy', 'easy', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy'];
const green = ['easy', 'hard', 'hard', 'hard', 'hard', 'hard', 'normal', 'normal', 'normal', 'normal', 'normal', 'easy', 'normal', 'normal', 'normal', 'easy', 'easy', 'easy'];
let cardSetBlue = [];
let cardSetGreen = [];
let cardSetBrown = [];
let stage1 = [];
let stage2 = [];
let stage3 = [];
let stage = [];
let count = 0;
let countStage1 = [0,0,0];
let countStage2 = [0,0,0];
let countStage3 = [0,0,0];
let currentStage = 1;


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
    // hidden();
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
        // hidden();
        mode = target.id;
        document.getElementById('text2').textContent = 'Выбранная Сложность: ' + mode;
        } 


    function createCardObject()   {
      cardSetBlue = [];
      cardSetGreen = [];
      cardSetBrown = [];
      stage1 = [];
      stage2 = [];
      stage3 = [];
      countStage1 = [0,0,0];
      countStage2 = [0,0,0];
      countStage3 = [0,0,0];
      currentStage = 1;

      for (let i = 0; i < blue.length; i++) {
        let anyCard = {};
        anyCard.color = 'blue';
        anyCard.range = blue[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/blue/blue${i+1}.png`;
        anyCard.random = Math.random();
        cardSetBlue.push(anyCard);
      }  
      for (let i = 0; i < green.length; i++) {
        let anyCard = {};
        anyCard.color = 'green';
        anyCard.range = green[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/green/green${i+1}.png`;
        anyCard.random = Math.random();
        cardSetGreen.push(anyCard);
      }  
      for (let i = 0; i < brown.length; i++) {
        let anyCard = {};
        anyCard.color = 'brown';
        anyCard.range = brown[i];
        if (anyCard.range == 'easy') anyCard.rangeNum = 0
        else if (anyCard.range == 'normal') anyCard.rangeNum = 1
        else anyCard.rangeNum = 2;
        anyCard.url = `../assets/MythicCards/brown/brown${i+1}.png`;
        anyCard.random = Math.random();
        cardSetBrown.push(anyCard);
      }  
      // cardSet.sort((a,b) => a.random - b.random);
      // console.log(cardSet);
      // это мы собрали все карты в одну кучу, указав для каждой адрес картинки и ключ, по которому будем случайно выбирать карту
      // тут надо убрать (не добавлять) легкие или сложные карты для двух режимов. завтра

    }
    function createColorDeck() {
      let blueNum = 2;
      let greenNum = 5;
      let BrownNum = 9;
      if (ancientId == 'cthulhu') {greenNum = 4};
      if (ancientId == 'shubNiggurath') {greenNum = 6; BrownNum = 8};
      // console.log(blueNum,greenNum,BrownNum);
      switch(mode) {
        case 'easest': {
          cardSetBlue = cardSetBlue.filter(function(a) {return a.range == 'easy'}).sort((a,b) => a.random - b.random).slice(0,2);
          // отфильтровали только легкие, из них взяли две случайных синие карты
          let tempGreen = cardSetGreen.filter(function(a) {return a.range == 'easy'}).slice(0,5);
          // console.log('tempGreen: ', tempGreen)
          let remain = cardSetGreen.filter(function(a) {return a.range == 'normal'}).sort((a,b) => 0.5 - Math.random());

          if (tempGreen.length == greenNum) cardSetGreen = tempGreen
            else if (tempGreen.length > greenNum) cardSetGreen = tempGreen.slice(0,greenNum)
            else cardSetGreen = tempGreen.concat(remain[0]);
          // взяли все легкие зеленые карты, в одном случае убрали одну, в одном случае добавили одну нормальную
          let tempBrown = cardSetBrown.filter(function(a) {return a.range == 'easy'}).slice(0,5).concat(cardSetBrown.filter(function(a) {return a.range == 'normal'}).sort((a,b) => 0.5 - Math.random()).slice(0,4));
          cardSetBrown = tempBrown;
          if (cardSetBrown.length > BrownNum) cardSetBrown = cardSetBrown.slice(0,BrownNum);
          // взяли все легкие карты, добавили к ним 4 нормальных, в одном случае одну убрали
          // console.log('blue: ', cardSetBlue);
          // console.log('green: ', greenNum, cardSetGreen);
          // console.log('brown: ', BrownNum, cardSetBrown);
          // console.log('stop');
          break;
        }
      }
    } 

    function showStages() {
      document.querySelector('.green1').textContent = countStage1[0];
      document.querySelector('.brown1').textContent = countStage1[1];
      document.querySelector('.blue1').textContent = countStage1[2];

      document.querySelector('.green2').textContent = countStage2[0];
      document.querySelector('.brown2').textContent = countStage2[1];
      document.querySelector('.blue2').textContent = countStage2[2];

      document.querySelector('.green3').textContent = countStage3[0];
      document.querySelector('.brown3').textContent = countStage3[1];
      document.querySelector('.blue3').textContent = countStage3[2];
    }

    function nextCard() {
      let url = '';
      count -= 1;
      if (count < 0) {
        return;
      }






      url = `url("${stage[count].url}") center/cover`;
      document.querySelector('.cardPlay').style.background = url;
      // document.querySelector('.cardPlay').textContent = url;
      document.querySelector('.cardBack').textContent = `Осталось карт: ${count}. Нажмите для продолжения`;
      if (count == 0) document.querySelector('.cardBack').textContent = `Все карты использованы. Создайте новую колоду`;
      showStages();
    }

    function letsPlay () {
      document.querySelector('.cardPlay').style.display = 'block';
      document.querySelector('.cardBack').textContent = `Осталось карт: ${count}. Нажмите для продолжения`
      document.querySelector('.cardBack').style.display = 'block';
      showStages();
      document.querySelector('.cardBack').addEventListener('click', nextCard);
    }

    // function hidden() {
    //   document.querySelector('.cardPlay').style.display = 'none';
    //   document.querySelector('.cardBack').style.display = 'none';
    //   document.querySelector('.stages').style.display = 'none';
    // }







    function createDeck() {
    createCardObject();
    createColorDeck();
    cardSetBlue.sort((a,b) => Math.random - 0.5);
    cardSetGreen.sort((a,b) => Math.random - 0.5);
    cardSetBrown.sort((a,b) => Math.random - 0.5);
      // перемешали три цветных колоды
      let hero = {};
      for (let i = 0; i < 4; i++) {
        if (ancientsData[i].id == ancientId) hero = ancientsData[i];
      }
      //нашли древнего по ИД
      for (let i = 0; i < hero.firstStage.greenCards; i++) {
        stage1.push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      }  
      for (let i = 0; i < hero.secondStage.greenCards; i++) {
        stage2.push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      }  
      for (let i = 0; i < hero.thirdStage.greenCards; i++) {
        stage3.push(cardSetGreen[cardSetGreen.length - 1]);
        cardSetGreen.pop();
      } 
      // add green cards to 1, 2 and 3 stage

      for (let i = 0; i < hero.firstStage.brownCards; i++) {
        stage1.push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      }  
      for (let i = 0; i < hero.secondStage.brownCards; i++) {
        stage2.push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      }  
      for (let i = 0; i < hero.thirdStage.brownCards; i++) {
        stage3.push(cardSetBrown[cardSetBrown.length - 1]);
        cardSetBrown.pop();
      } 
         // add brown cards to 1, 2 and 3 stage

      for (let i = 0; i < hero.firstStage.blueCards; i++) {
      stage1.push(cardSetBlue[cardSetBlue.length - 1]);
      cardSetBlue.pop();
      }  
      for (let i = 0; i < hero.secondStage.blueCards; i++) {
        stage2.push(cardSetBlue[cardSetBlue.length - 1]);
        cardSetBlue.pop();
      }  
      for (let i = 0; i < hero.thirdStage.blueCards; i++) {
        stage3.push(cardSetBlue[cardSetBlue.length - 1]);
        cardSetBlue.pop();
      } 
          // add blue cards to 1, 2 and 3 stage      

      stage1.sort((a,b) => Math.random - 0.5);
      stage2.sort((a,b) => Math.random - 0.5);
      stage3.sort((a,b) => Math.random - 0.5);

      for (let i = 0; i < stage1.length; i++) {
        if (stage1[i].color == 'green') countStage1[0] += 1 
          else if (stage1[i].color == 'brown') countStage1[1] += 1
          else countStage1[2] += 1;
      }
      for (let i = 0; i < stage2.length; i++) {
        if (stage2[i].color == 'green') countStage2[0] += 1 
          else if (stage2[i].color == 'brown') countStage2[1] += 1
          else countStage2[2] += 1;
      }
      for (let i = 0; i < stage3.length; i++) {
        if (stage3[i].color == 'green') countStage3[0] += 1 
          else if (stage3[i].color == 'brown') countStage3[1] += 1
          else countStage3[2] += 1;
      }
      console.log(countStage1,countStage2,countStage3);

      // shuffle cards
      // console.log(stage1, stage2, stage3) 
      stage = stage3.concat(stage2, stage1);
      count = stage.length;
      console.log(stage);
      letsPlay();


    // if (mode == 'easest') cardSet.sort((a,b) => a.rangeNum - b.rangeNum);
    // console.log(cardSet);
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