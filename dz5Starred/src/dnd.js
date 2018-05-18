/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

// const button = document.getElementById('addDiv')


// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }


/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */

function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div')

  var body = document.body,
      html = document.documentElement;

  var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
  var docWidth = Math.max( body.scrollWidth, body.offsetWidth, 
    html.clientWidth, html.scrollWidth, html.offsetWidth );

  var divWidth = Math.floor(Math.random() * docWidth / 2 ),
      divHeight = Math.floor(Math.random() * docHeight / 2 ),
      leftMax = Math.floor(Math.random() * (docWidth - divWidth)),
      topMax = Math.floor(Math.random() * (docHeight - divHeight));
  
  newDiv.style.position = 'absolute'
  newDiv.style.left = leftMax + 'px',
  newDiv.style.top = topMax + 'px',
  newDiv.style.width = divWidth + 'px',
  newDiv.style.height = divHeight + 'px',
  newDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"

  return newDiv
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 
 // https://learn.javascript.ru/drag-and-drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {

  target.ondragstart = function() {
    return false;
  };

  target.onmousedown = function(e) {
    moveAt(e);
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(target);

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    target.style.left = e.pageX - target.offsetWidth / 2 + 'px'; // how to count ? draw
    target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
  }
  target.onmouseup = function() {
    document.onmousemove = null;
    target.onmouseup = null;
  }
  }
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
