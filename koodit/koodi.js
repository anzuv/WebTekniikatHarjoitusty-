function addnote() {
// Hae lomakkeen kenttien arvot
let note = document.getElementById("viesti").value;
let namee = document.getElementById("nimi").value;

const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();

  let totalnote = namee + ':' + note;

document.getElementById("notehere").innerHTML += date + ' ' +  time + ' ' + "<br>" + totalnote + "<br>";
	
}

  const checkbox = document.querySelector('#checkbox');
  const teksti = document.querySelector('#notehere');

  checkbox.addEventListener('change', function() {
    if(this.checked) {
      teksti.style.color = 'red';
    } else {
      teksti.style.color = 'black';
    }
  });

