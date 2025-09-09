# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

'''javascript

console.log("Pratik)


const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  });
});

'''


## Project 2

'''javascript

const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value) // This usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    let bmi = weight / ((height * height) / 10000);
    bmi = bmi.toFixed(2);
    // show the result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    if (bmi < 18.6) {
      console.log('Under Weight');
      results.innerHTML += ` Under Weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML += ` Normal Range`;
      console.log(' Normal Weight');
    } else {
      console.log('Overweight');
      results.innerHTML += ` OverWeight`;
    }
  }
});


'''
