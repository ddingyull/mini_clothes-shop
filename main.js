// //[Fetch the items from the JSON file]

// // {loadItems함수 만들기}
// //1)loadItems라는 함수는 
// function loadItems() {
//   //2) fetch를 이용해서(파일의 경로나 url을 작성하여) data를 네트워크를 통해 가져옴
//   return fetch('data/data.json')
//   //가져온 data를 2-1) 불러온 data를 json으로 바꿔주고, 2-2)바꾼 json 중 item만 가져온다
//     .then(response => console.log(response));
//     // .then(json => json.items);
// }


// //{Update the list with the given items}
// // {displayItems 함수 만들기} : 받아온 items를 html요소처럼 보여주는 함수
// // 1) 가져온 items를 함수의 매개변수로 넣어주고
// function displayItems(items) {
  // // 2) html의 원하는 화면을 container라고 했을 때 실제 html의 위치를 정의해준다
  // const container = document.querySelector('.items');
  // // 3) 선언한 container에 html로 넣을 떄 map함수를 사용하여 넣어준다
  // // 3-1) items.map(items에 creatHTMLString함수를 사용하여 문자열을 li태그에 넣어준다)
  // // 3-2) join을 통해 여러개의 JSON파일을 리스트로 보여준다
  // // 3-3) 아래 코드가 이해가 안된다면 이 코드로 콘솔찍어보기!!
  // // const html = items.map(item => createHTMLString(item)).join('');
  // // console.log(html);
  // container.innerHTML = items.map(item => createHTMLString(item)).join('');
// }


// //{Create HTML list item from the given data item}
// // createHTMLString함수로 html에 넣을 틀을 만들어준다 (때문에 css때 잘 만들어놓으면 편함)
// function createHTMLString(item) {
//   return `
//   <li class="item">
//     <img src="${item.imge}" alt="${item.type}" class="item_thumbnail"/>
//     <span class="item_description">${item.gender}, ${item.size}</span>
//   </li>
//   `;
// }



// //{main}
// //1) json에서 값을 받아오고
// loadItems()
// // 2) 1번 완료 후 item을 이렇게 가공하는데!!
//   .then(items => {
//     //2-1) item을 display하고
//     displayItems(items);
//     //2-2) item 클릭 시 event를 filtering해주는 것
//     setEventListeners(items)
//   })
//   //위 1,2번이 안된다면 catch로 console에 에러문구
//   .catch(console.log);




//Fetch the items from the JSON file
function loadItems() {
  return fetch('/data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

//Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item_thumbnail"/>
    <span class="item_description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  console.log(event.target.dataset.key);
  console.log(event.target.dataset.value);
  // const dataset = event.target.dataset;
  // const key = dataset.key;
  // const value = dataset.value;
  
  // if(key == null || value == null){
  //   return;
  // }

  // displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () =>displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items)
  })
  .catch(console.log);



//  //이부분 다시 해보기 : 매번 새로 update되기 때문에 만들어놓고 원하는 data만 보이기 하기 
//   //Handle button click
//   function onButtonClick(event, items) {
//     const target = event.target;
//     const key = target.dataset.key;
//     const value = target.dateset.value;
//     if(key == null || value == null){
//       return;
//   }
//   updateItems(items, key, value);
// }

// //Make the items matching {key: value} invisible.

// function updateItems(items, ket, value){
//   items.forEach(item => {
//     if(item.dataset[key] === value) {
//       item.classList.remove('invisible');
//     } else{
//       item.classList.add('invisible');
//     }
//   });
// }