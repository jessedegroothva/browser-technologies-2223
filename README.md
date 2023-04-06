# Browser Technologies @cmda-minor-web 2022 - 2023

## Opdracht

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. De bedoeling is dat gebruikers op elke browser een zo goed mogelijk werkend product te zien krijgen. 

## Use Case 

'Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.'

## Proces

Hieronder zal ik mijn hele proces vastleggen, waar ben ik begonnen, wat heb ik fout en of goed gedaan en waar ben ik allemaal tegenaan gelopen. 

### Week 1
Ik wil graag een survey invullen voor mijn Web Development minor met multiple choice antwoorden. Het zou handig zijn als ik kan zien welke vragen ik al heb ingevuld en hoeveel ik er nog moet doen. En als ik een vraag heb ingevuld en later van gedachten verander, zou ik deze graag willen kunnen aanpassen. Ook wil ik de optie hebben om later verder te gaan met de enquête als ik hem niet in één keer kan afmaken.

### Week 2
![vragenlijst1](https://user-images.githubusercontent.com/90199203/230361530-e0f565e3-463d-4f66-939d-23fad9f81937.png)
Dit was mijn eerste poging om een webpagina te maken. Ik heb nog niet veel tijd besteed aan de CSS, maar wel aan de Javascript. Het is echter al wat complexer geworden dan ik oorspronkelijk had gepland.

Aan het einde van week 2 heb ik besloten om helemaal opnieuw te beginnen met de kennis die ik nu had over het opslaan in de local storage en het later afmaken van vragen.
Nu ben ik eerste begonnen met het maken van een goede en duidelijke HTML structuur. Zodat de gebruiker makkelijk kunt tappen als hij geen mogelijkheid heeft om een muis te gebruiken.

![prestatie](https://user-images.githubusercontent.com/90199203/230361608-d2fc7edf-d718-473f-8811-df9ff5f6a858.png)


### Week 3
Nadat ik de eerste HTML-code had geschreven, ben ik begonnen met het ontwerpen van een simpel design om een idee te krijgen van welke richting ik op wilde gaan met de styling.

![image](https://user-images.githubusercontent.com/90199203/230362000-40ae0466-d5be-4e0b-8203-866c4dc7fbf9.png)

Ik pas het principe 1 action per screen toe, waardoor je de aandacht van de gebruiker houd. Elk fieldset heeft 1 hoofddoel, zijn mening geven over 1 vak.
Vervolgens heb ik dit uitgewerkt in CSS.
Toen de CSS stond ben ik gaan werken aan het opslaan in de local storage, waardoor je antwoorden kan opslaan en later de enquête af kan maken wanneer je de browser afsluit.

```Javascript
// cache
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
```
In deze code wordt een event listener gebruikt met 'beforeunload', waardoor de functie wordt uitgevoerd wanneer de browser wordt gesloten of wanneer er naar een andere pagina wordt genavigeerd. Vervolgens wordt voor elke sectie de data van een checkbox in een variabele opgeslagen en samen met de bijbehorende pagina in de lokale opslag geplaatst, zodat deze later opgehaald kan worden.

De functie 'saveFormData' slaat de ingevulde gegevens op in de lokale opslag, zoals de naam, het nummer, het e-mailadres en de geselecteerde antwoorden van de checkboxes voor de lesstof, uitleg en begrip. Deze gegevens worden opgehaald door de functie 'populateFormData' en ingevuld in de desbetreffende velden op de webpagina.

Uiteindelijk werkt de website zoals het hoort, nadat er media queries zijn toegevoegd. Nu is het tijd om de website te testen op verschillende apparaten en browsers.

### Testen

Ik begon met het uitproberen van de website op de meest gebruikte browsers, zoals Google Chrome, Firefox en Safari. Alles werkte goed op Chrome, maar bij Safari Technology Preview stuitte ik op een probleem. 

Ik maakte gebruik required in HTML, deze was niet te ondersteund door de kaiOS browser. Dit was een probleem voor mijn functionaliteit. Dus heb ik required laten staan en heb ik als voorzorg in javascript gezegt dat alle inputs required zijn. 

```javascript
// required
// select alle input elements in het fieldset
const inputs = document.querySelectorAll('#web-col input');

// loop door elk input en voegt de required attribute toe
inputs.forEach(input => {
  input.setAttribute('required', true);
});
```
Firefox support de 'has' selector nog niet, waardoor je niet kan zien welke keuze je selecteert met de custom radio buttons, heb ik gezegd als de fieldset valid is, dat de achtergrondkleur veranderd. 

Om dit te fixen heb ik de has selector achterwege gelaten, en uiteindelijk is mijn styling hetzelfde gebleven, in plaats van de has selector style ik nu mijn input:checked op deze manier:
```CSS
fieldset:valid {
    background-color: var(--bg-fieldset);
  }
```

Aangezien we ook wilden testen op een minder bekende browser, besloot ik om kaiOS te gebruiken. Na een lange tijd proberen te typen, is het uiteindelijk toch gelukt om mijn website te openen.

![image](https://user-images.githubusercontent.com/90199203/230362427-757100ab-e88c-4355-a103-d0b2b2f71984.png)
Ik liep al snel tegen een paar dingen aan met het gebruik van kaiOS: 
1. required werkte niet op de browser,dit zal waarschijnlijk komen omdat de functionaliteit te nieuw is, hier moest dus een fallback voor komen met javascript code. 

Al met al valt het wel mee, als ik hiermee verder ga zal ik een progressiebar toevoegen. 

## Progressive enhancement
De site word progressive enhancent door het gebruik van CSS en Javascript. 
In eerste instantie heb je een simpel formulier, van een simpel formulier ga je naar een formulier met styling en kan je je progressie zien, en uiteindelijk heb je een formulier met alles erbij die je progressie kan opslaan met verschillende pagina's.

## Brief naar backend
Als je ervoor wilt zorgen dat je website voor iedereen toegankelijk is, is het belangrijk om te overwegen dat sommige gebruikers geen client-side Javascript kunnen gebruiken. Om dit probleem op te lossen is het nodig om een goede backend te hebben.

Een backend zorgt ervoor dat de gegevens die worden verzameld op de website worden opgeslagen in een database. Op deze manier kunnen de gegevens worden opgehaald wanneer dat nodig is. Door gebruik te maken van een backend, wordt ervoor gezorgd dat de website goed functioneert voor alle gebruikers, inclusief degenen die geen client-side Javascript kunnen gebruiken.

De gebruiker wil graag:

1. Informatie invullen op de website.
2. Dat de ingevulde informatie regelmatig wordt verzonden en bijgewerkt, bijvoorbeeld wanneer de gebruiker naar een volgende pagina navigeert.
3. Dat alle ingevulde gegevens worden opgeslagen en dat de definitieve versie wordt verzonden bij het indienen van de gegevens (eventueel inclusief studentinformatie).

## Aanpassingen
Om de site vanuit het gebruikerspunt zo goed mogelijk te laten werken, heb ik een paar kleine aanpassingen aan de hoofdopdracht toegevoegd, dit kan altijd nog veranderd worden als dit niet bevalt. 
1. De gebruiker hoeft niet aan te geven welke docenten ze mee hebben samengewerkt, dit is moeilijk te onthouden, ook is vanaf het begin voor iedere student al duidelijk dat iedereen dezelfde docenten heeft.
2. De begin datum en einddatum voor iedereen is hetzelfde, ook is het moeilijk te onthouden welke datum je precies bent gestart en geindigd.
3. De data van de gebruiker wordt door de server al ingevuld, omdat de server kan zien welk email het wordt verstuurd, dit kan overeen komen met de naam en studentennummer. 

## Toekomstige verbeteringen
Ik wilde nog graag enkele verbeteringen doorvoeren, maar vanwege tijdsgebrek was dit niet mogelijk:
1. Zelf de backend features die nodig waren maken.
2. Daadwerkelijk laden uit een database. 
3. Progressiebar toevoegen.
4. Met links werken, zodat de pagina niet zo lang wordt als javascript is uitgeschakeld.
5. Animaties(enhancement)
