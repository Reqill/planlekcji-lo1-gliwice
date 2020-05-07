//
//  dynamiczny plan lekcji
//  by Mikołaj Mrózek
//

let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let classHours = [700, 755, 845, 935, 1030, 1125, 1220, 1330, 1425, 1515, 1605];

let cC = [
  'iap',
  'ibp',
  'icp',
  'idp',
  'iep',
  'iag',
  'ibg',
  'icg',
  'idg',
  'ieg',
  'iia',
  'iib',
  'iic',
  'iiia',
  'iiib',
  'iiic',
  'iiid',
];

let cCIndex = 0;
let currentLesson = '';
let dayOfWeek;
let actualTime;
let noClasses = 17; //ILOSC KLAS W SZKOLE
let currentClass = ibg;
let br = document.createElement('br');
plan.style.display = 'none';
time();
lightCurrentLesson();

document.getElementById('strona').addEventListener('click', function() {
  time();
  lightCurrentLesson();
  createZastepstwa();
});

function lightCurrentLesson() {

  //console.log('jestem w funkcji');
  currentLesson = '';
  if (dayOfWeek === 'Sun' || dayOfWeek === 'Sat') {
    //console.log('Jest weekend :)');
  } else if (actualTime >= classHours[0] && actualTime < classHours[1]) {
    currentLesson = dayOfWeek + '0';
  } else if (actualTime >= classHours[1] && actualTime < classHours[2]) {
    currentLesson = dayOfWeek + '1';
  } else if (actualTime >= classHours[2] && actualTime < classHours[3]) {
    currentLesson = dayOfWeek + '2';
  } else if (actualTime >= classHours[3] && actualTime < classHours[4]) {
    currentLesson = dayOfWeek + '3';
  } else if (actualTime >= classHours[4] && actualTime < classHours[5]) {
    currentLesson = dayOfWeek + '4';
  } else if (actualTime >= classHours[5] && actualTime < classHours[6]) {
    currentLesson = dayOfWeek + '5';
  } else if (actualTime >= classHours[6] && actualTime < classHours[7]) {
    currentLesson = dayOfWeek + '6';
  } else if (actualTime >= classHours[7] && actualTime < classHours[8]) {
    currentLesson = dayOfWeek + '7';
  } else if (actualTime >= classHours[8] && actualTime < classHours[9]) {
    currentLesson = dayOfWeek + '8';
  } else if (actualTime >= classHours[9] && actualTime < classHours[10]) {
    currentLesson = dayOfWeek + '9';
  } else {
    //console.log('Jest poza godzinami szkolnymi :)');
  }
  if (
    dayOfWeek !== 'Sun' &&
    dayOfWeek !== 'Sat' &&
    actualTime > classHours[0] &&
    actualTime < classHours[10]
  ) {
    document.getElementById(currentLesson).style.backgroundColor = '#303030';
  }
}

function time() {
  let date = new Date();
  let minute = date.getMinutes();
  let hour = date.getHours();
  dayOfWeek = date.getDay();
  dayOfWeek = daysOfWeek[dayOfWeek].substring(0, 3);
  actualTime = hour * 100 + minute;
  //console.log(dayOfWeek + ' ' + actualTime);
}

function createPlan() {
  //wywołuje tworzenie planów poszczególnych dni
  createDay('monday', 'Mon');
  createDay('tuesday', 'Tue');
  createDay('wednesday', 'Wed');
  createDay('thursday', 'Thu');
  createDay('friday', 'Fri');
}

function setPlanGaps() {
  //ustawia ilość rzędów
  lekcja0.style.display = 'table-row';
  lekcja1.style.display = 'table-row';
  lekcja2.style.display = 'table-row';
  lekcja3.style.display = 'table-row';
  lekcja4.style.display = 'table-row';
  lekcja5.style.display = 'table-row';
  lekcja6.style.display = 'table-row';
  lekcja7.style.display = 'table-row';
  lekcja8.style.display = 'table-row';
  lekcja9.style.display = 'table-row';
  lekcja10.style.display = 'table-row';

  switch (currentClass.noMinClasses) {
    case 3: {
      lekcja0.style.display = 'none';
      lekcja1.style.display = 'none';
      lekcja2.style.display = 'none';
      break;
    }
    case 2: {
      lekcja0.style.display = 'none';
      lekcja1.style.display = 'none';
      break;
    }
    case 1: {
      lekcja0.style.display = 'none';
      break;
    }
    default:
      break;
  }

  switch (currentClass.noMaxClasses) {
    case 5: {
      lekcja6.style.display = 'none';
      lekcja7.style.display = 'none';
      lekcja8.style.display = 'none';
      lekcja9.style.display = 'none';
      lekcja10.style.display = 'none';
      break;
    }
    case 6: {
      lekcja7.style.display = 'none';
      lekcja8.style.display = 'none';
      lekcja9.style.display = 'none';
      lekcja10.style.display = 'none';
      break;
    }
    case 7: {
      lekcja8.style.display = 'none';
      lekcja9.style.display = 'none';
      lekcja10.style.display = 'none';
      break;
    }
    case 8: {
      lekcja9.style.display = 'none';
      lekcja10.style.display = 'none';
      break;
    }
    case 9: {
      lekcja10.style.display = 'none';
      break;
    }
    default:
      break;
  }
}

function createDay(day, day2) {
  //tworzy plan dla podanego dnia
  for (let i = currentClass.noMinClasses; i <= currentClass.noMaxClasses; i++) {
    let lesson = 'lesson';
    let foo = day2;
    foo = foo + i;
    lesson = lesson + i;
    document.getElementById(foo).innerHTML = '';
    for (let x = 1; x <= 5; x++) {
      let group = 'group';
      group = group + x;
      //console.log('1');
      if (typeof currentClass[day][lesson][group] !== 'undefined') {
        document.getElementById(foo).innerText +=
          currentClass[day][lesson][group];
        document.getElementById(foo).innerHTML += '<br>';
        document.getElementById(foo).style.color = '#919191';
        //console.log('1');
      }
    }
    group = 'group2';
    //console.log('1');
    if (typeof currentClass[day][lesson][group] === 'undefined') {
      document.getElementById(foo).innerText = currentClass[day][lesson];
      document.getElementById(foo).style.color = '#919191';
     // console.log('1');
    }
  }
  createZastepstwa();
  //console.log('1');
}

function createZastepstwa() {
  //console.log('22');
  for (let x = 1; x <= zastepstwa[0]; x++) {
    //console.log('2');
    for (let noC = 1; noC <= noClasses; noC++) {
      //console.log('3');
      if (zastepstwa[x][0] === cC[cCIndex]) {
        //console.log('4');
        let xyz = '';
        xyz = zastepstwa[x][1].substring(0, 3);
        xyz = capitalizeFirstLetter(xyz);
        xyz = xyz + zastepstwa[x][2];
        if (zastepstwa[x][3][0] !== ' ') {
          document.getElementById(xyz).innerText = zastepstwa[x][3][0];
          document.getElementById(xyz).style.color = 'tomato';
          document.getElementById(xyz).style.fontWeight = 'normal';
        } else {
          document.getElementById(xyz).innerHTML = ' ';
          for (let z = 1; z <= 6; z++) {
            if (
              zastepstwa[x][3][z] !== undefined &&
              zastepstwa[x][3][z] !== ' '
            ) {
              document.getElementById(xyz).innerText += zastepstwa[x][3][z];
              document.getElementById(xyz).innerHTML += '<br>';
              document.getElementById(xyz).style.color = 'tomato';
              document.getElementById(xyz).style.fontWeight = 'normal';
            }
          }
        }
      }
    }
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
