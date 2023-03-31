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



// chache wordt opgeslagen
const nameInput = document.getElementById('name');
const nummerInput = document.getElementById('nummer');
const emailInput = document.getElementById('email');
const docentInputs = document.getElementsByName('docent');
const weeksInput = document.getElementById('weeks');
const lesstofInputs = document.getElementsByName('lesstof');
const uitlegInputs = document.getElementsByName('uitleg');

function saveFormData() {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('nummer', nummerInput.value);
  localStorage.setItem('email', emailInput.value);
  let selectedDocent = '';
  for (let i = 0; i < docentInputs.length; i++) {
    if (docentInputs[i].checked) {
      selectedDocent = docentInputs[i].value;
      break;
    }
  }
  localStorage.setItem('docent', selectedDocent);
  localStorage.setItem('weeks', weeksInput.value);
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
}

function populateFormData() {
  nameInput.value = localStorage.getItem('name');
  nummerInput.value = localStorage.getItem('nummer');
  emailInput.value = localStorage.getItem('email');
  const selectedDocent = localStorage.getItem('docent');
  for (let i = 0; i < docentInputs.length; i++) {
    if (docentInputs[i].value === selectedDocent) {
      docentInputs[i].checked = true;
      break;
    }
  }
  weeksInput.value = localStorage.getItem('weeks');
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
}

window.addEventListener('load', function() {
  populateFormData();
});

window.addEventListener('beforeunload', function() {
  saveFormData();
});


// laat de voorgang zien
const formProgress = document.querySelector('form');
const progressBar = document.querySelector('#progress-bar');
const progressValue = document.querySelector('#progress-bar::-webkit-progress-value');

formProgress.addEventListener('input', (event) => {
  const fieldsets = Array.from(formProgress.querySelectorAll('fieldset'));
  const completedFieldsets = fieldsets.filter((fieldset) => {
    const inputs = Array.from(fieldset.querySelectorAll('input'));
    return inputs.every((input) => input.value !== '');
  });
  const progress = Math.floor((completedFieldsets.length / fieldsets.length) * 100);
  
  progressBar.value = progress;
  progressValue.style.width = `${progress}%`;
});

