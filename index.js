const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter name of the city:');
document.body.appendChild(input);
const button = document.createElement('button');
button.textContent = 'refresh';
document.body.appendChild(button);
button.addEventListener('click', () => {
  namee = input.value;
  console.log(namee);
  fetch(`https://wttr.in/${namee}?format=j1`)
    .then((response) => response.json())
    .then((weather) => {
      ar = [];
      ar = weather.current_condition;
      a = [];
      a[0] = ar[0].pressure;
      a[1] = ar[0].temp_C;
      a[2] = ar[0].FeelsLikeC;
      a[3] = ar[0].weatherDesc[0].value;
      a[4] = ar[0].precipMM;
      const x = document.createElement('p');
      x.textContent = 'new weather-condition for ' + namee + ':';
      document.body.appendChild(x);
      const message = document.createElement('p');
      message.textContent = a;
      document.body.appendChild(message);
    });
});
const deq = document.createElement('p');
deq.textContent = 'Weather of poznan';
document.body.appendChild(deq);
fetch(`https://wttr.in/poznan?format=j1`)
  .then((response) => response.json())
  .then((weather) => {
    ar = [];
    ar = weather.current_condition;
    a = [];
    a[0] = ar[0].pressure;
    a[1] = ar[0].temp_C;
    a[2] = ar[0].FeelsLikeC;
    a[3] = ar[0].weatherDesc[0].value;
    a[4] = ar[0].precipMM;
    console.log(ar[0].pressure);
    console.log(ar[0].temp_C);
    console.log(ar[0].FeelsLikeC);
    console.log(ar[0].weatherDesc[0].value);
    console.log(ar[0].precipMM);
    const message = document.createElement('p');
    message.textContent = a;
    document.body.appendChild(message);
  });
