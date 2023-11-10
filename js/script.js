//Centrerar innehåll och text i bodyn
document.querySelector("body").style.textAlign = "center";
document.querySelector("body").style.width = "800px";
document.querySelector("body").style.margin = "auto";

//Loop som genererar fem h1-element och array med textinnehåll för elementen i första delen av layouten. Färg och textstorlek ändras för varje loop.
const h1Text = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5']
for (let i=0; i<h1Text.length; i++) {
    const h1El = document.createElement ('h1');
    document.body.appendChild (h1El);
    h1El.innerText= h1Text[i];
    const increaseFontSize = 10 + i*10; 
    h1El.style.fontSize = `${increaseFontSize}px`; 
    const hue = 115 + i*22; 
    h1El.style.backgroundColor = `hsl(${hue}, 89.6%, 84.9%)`;
    h1El.style.color = `hsl(237, 89.2%, 71%)`; 
     
}
  //En div med svart ram
const container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.border = '1px solid black';
container.style.height = '300px';
container.style.justifyContent = "space-evenly";
container.style.alignItems= "center";

//Tre divar med lila ram för respektive div.
for (let i = 0; i < 3; i++) {
  const divEl = document.createElement('div');
  container.appendChild(divEl);
  divEl.style.border = '8px solid hsl(240, 70%, 80%)';
  divEl.style.width = '40px';
  divEl.style.height = '180px';
  divEl.style.display = 'flex';

// Tio divar inuti en utav div:arna med lila ram, placerad till vänster. Divarna har varannan vit och svart bg, förutom den 4:e som är lila.
  if (i === 0) {
    divEl.style.flexDirection = 'column';
    for (let j = 0; j < 10; j++) {
      const divNumbers = document.createElement('div');
      divEl.appendChild(divNumbers);
      divNumbers.style.height = '18px';
      divNumbers.innerText = j;
      divNumbers.style.textAlign="left";

      if (j % 2 === 0) {
        divNumbers.style.backgroundColor = 'black';
        divNumbers.style.color = 'white';
      }

      if (j === 4) {
        divNumbers.style.backgroundColor = 'hsl(240, 70%, 80%)';
        divNumbers.style.color = 'white';
      }
    }
  }
 
  // Tio divar inuti en utav div:arna med lila ram, placerad i mitten. Divarna har varannan vit och svart bg, förutom den 8:e som är lila.
  else if (i === 1) {
    
    divEl.style.flexDirection = 'column-reverse';
      
    for (let j = 0; j < 10; j++) {
      const divNumbers = document.createElement('div');
      divEl.appendChild(divNumbers);
      divNumbers.style.height = '18px';
      divNumbers.innerText = j;
      

      if (j % 2 === 0) {
        divNumbers.style.backgroundColor = 'black';
        divNumbers.style.color = 'white';
      }

      if (j === 8) {
        divNumbers.style.backgroundColor = 'hsl(240, 70%, 80%)';
        divNumbers.style.color = 'white';
      }
    }
  }

  // Tio divar inuti en utav div:arna med lila ram, placerad till höger. Divarna har varannan vit och svart bg, förutom den 6:e som är lila.
  else if (i === 2) {
    divEl.style.flexDirection = 'column';
    
    const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
    for (let j = 0; j <numbers.length; j++) {
      const divNumbers = document.createElement('div');
      divEl.appendChild(divNumbers);
      divNumbers.style.height = '18px';
      divNumbers.innerText = numbers [j];
      divNumbers.style.textAlign="right";
      

      if (j % 2 === 0) {
        divNumbers.style.backgroundColor = 'black';
        divNumbers.style.color = 'white';
      }

      else if (j === 5) {
        divNumbers.style.backgroundColor = 'hsl(240, 70%, 80%)';
        
      }
    }
  }
}

