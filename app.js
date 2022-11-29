// document.querySelector('.clear-tasks').addEventListener('click',
// function (e){
//   console.log('Hello World');

//   //e.preventDefault();
// }); // 
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(e.type);
  console.log(taskInput.value);

  e.preventDefault();
}





/*
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log("Clicked")
  let val;

  val = e;

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.innerText="hello";
  val = e.type;
  val = e.timeStamp;
  val = e.clientY + " " + e.clientX;
  // OffsetY X coords of the button
  


  // val = e.target.classList;
  // val.forEach(element => {
  //   console.log(element)
  // });


  console.log(val);
};













/*const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}*/