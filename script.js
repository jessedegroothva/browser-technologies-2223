const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('fieldset');
let currentFieldsetIndex = 0;

function showFieldset(index) {
    fieldsets.forEach((fieldset, i) => {
        if (i === index) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
}

showFieldset(currentFieldsetIndex);

document.querySelector('#prev-btn').addEventListener('click', () => {
    currentFieldsetIndex--;
    if (currentFieldsetIndex < 0) {
        currentFieldsetIndex = 0;
    }
    showFieldset(currentFieldsetIndex);
});

document.querySelector('#next-btn').addEventListener('click', () => {
    currentFieldsetIndex++;
    if (currentFieldsetIndex > fieldsets.length - 1) {
        currentFieldsetIndex = fieldsets.length - 1;
    }
    showFieldset(currentFieldsetIndex);
});



const nameInput = document.getElementById('name');
const nummerInput = document.getElementById('nummer');
const emailInput = document.getElementById('email');
const lesstofInputs = document.getElementsByName('lesstof');
const uitlegInputs = document.getElementsByName('uitleg');
const snappenInput = document.getElementsByName('snappen');


function saveFormData() {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('nummer', nummerInput.value);
  localStorage.setItem('email', emailInput.value);
  let selectedLesstof = '';
  for (let i = 0; i < lesstofInputs.length; i++) {
    if (lesstofInputs[i].checked) {
      selectedLesstof = lesstofInputs[i].value;
      break;
    }
  }
  localStorage.setItem('lesstof', selectedLesstof);
  let selectedUitleg = '';
  for (let i = 0; i < uitlegInputs.length; i++) {
    if (uitlegInputs[i].checked) {
      selectedUitleg = uitlegInputs[i].value;
      break;
    }
  }
  localStorage.setItem('uitleg', selectedUitleg);
  let selectedSnappen = '';
  for (let i = 0; i < snappenInput.length; i++) {
    if (snappenInput[i].checked) {
      selectedSnappen = snappenInput[i].value;
      break;
    }
  }
  localStorage.setItem('snappen', selectedSnappen);
}


function populateFormData() {
  nameInput.value = localStorage.getItem('name');
  nummerInput.value = localStorage.getItem('nummer');
  emailInput.value = localStorage.getItem('email');
  const selectedLesstof = localStorage.getItem('lesstof');
  for (let i = 0; i < lesstofInputs.length; i++) {
    if (lesstofInputs[i].value === selectedLesstof) {
      lesstofInputs[i].checked = true;
      break;
    }
  }
  const selectedUitleg = localStorage.getItem('uitleg');
  for (let i = 0; i < uitlegInputs.length; i++) {
    if (uitlegInputs[i].value === selectedUitleg) {
      uitlegInputs[i].checked = true;
      break;
    }
  }
  const selectedSnappen = localStorage.getItem('snappen');
  for (let i = 0; i < snappenInput.length; i++) {
    if (snappenInput[i].value === selectedSnappen) {
      snappenInput[i].checked = true;
      break;
    }
  }
}


window.addEventListener('load', function() {
  populateFormData();
});


window.addEventListener('beforeunload', function() {
  saveFormData();
});


window.addEventListener('load', function() {
  populateFormData();
});

window.addEventListener('beforeunload', function() {
  saveFormData();
});


// required
// select alle input elements in het fieldset
const inputs = document.querySelectorAll('#web-col input');

// loop door elk input en voegt de required attribute toe
inputs.forEach(input => {
  input.setAttribute('required', true);
});
