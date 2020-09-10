var prevIndicator = null;
function createCarousel(slidesCount = 5) {
  var container = document.querySelector('#carousel');


  var slides_ul = document.createElement('ul');
  slides_ul.setAttribute('class','slides');

  for(var i=0; i < slidesCount; i++) {
    var slide_li = document.createElement('li');
    var slide_a = document.createElement('a');
    slide_a.setAttribute('href', '#');

    if(i===0) {
      slide_li.setAttribute('class','slides__item active');
    }
    else {
      slide_li.setAttribute('class', 'slides__item');
    }

    slide_li.appendChild(slide_a);
    slides_ul.appendChild(slide_li);

  }
  container.appendChild(slides_ul);

  var indicators_div = document.createElement('div');
  indicators_div.setAttribute('class','indicators');
  for(var i=0; i < slidesCount; i++) {
    var indicator_span = document.createElement('span');
    indicator_span.setAttribute('data-slide-to', i);

    if(i===0) {
      indicator_span.setAttribute('class','indicators__item active');
    }
    else {
      indicator_span.setAttribute('class', 'indicators__item');
    }

    indicators_div.appendChild(indicator_span);

  }
  container.appendChild(indicators_div);

  var controls_div = document.createElement('div');
  controls_div.setAttribute('class','controls');
  for(var i=0; i < 3; i++) {
    var controls_item = document.createElement('div');
    var controls_i = document.createElement('i');

    controls_item.setAttribute('class', 'controls__item');
    controls_i.setAttribute('class', 'fas')
    
    switch(i){
      case 0: controls_item.classList.add('controls__prev'); controls_i.classList.add('fa-chevron-left'); break;
      case 1: controls_item.classList.add('controls__next'); controls_i.classList.add('fa-chevron-right'); break;
      case 2: controls_item.classList.add('controls__pause'); controls_i.classList.add('fa-play'); break;
    }
    controls_item.appendChild(controls_i);
    controls_div.appendChild(controls_item);

  }
  container.appendChild(controls_div);

  document.querySelector('div.indicators').addEventListener('click', (e) => {
    if(e.target.classList.contains('indicators__item'))
    {
      e.target.style.backgroundColor = 'red';

      if (prevIndicator !== null) prevIndicator.removeAttribute('style');

      prevIndicator = e.target;
    }
  });

  style = document.createElement('style');
  
  style.innerHTML =  `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .controls,
  .slides {
    position: relative;
  }
  .indicators {
    display: flex;
    justify-content: center;
  }
  .indicators__item {
    display: block;
    width: 20px;
    height: 20px;
    background-color: green;
    margin: 5px;
    border-radius: 10px;
  }
  .slides {
    margin: 0;
    padding: 0;
    list-style-type: none;
    height: 80vh;
  }
  .slides__item {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: gray; 
  }
  `;
  container.appendChild(style);
}

createCarousel(4);