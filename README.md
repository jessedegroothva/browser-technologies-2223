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
<img width="866" alt="Screenshot 2023-04-05 at 19 57 46" src="https://user-images.githubusercontent.com/24406793/230164246-0d4e1ecd-cdb8-42a4-8d4f-d3eb047f3630.png">
Dit was het eerste resultaat, nog niet veel aandacht besteed aan de CSS, wel aan de Javascript, het was alleen al wat ingewikkelder geworden dan mijn plan was. 

Aan het einde van week 2 heb ik besloten om helemaal opnieuw te beginnen met de kennis die ik nu had over het opslaan in de local storage en het later afmaken van vragen.
Nu ben ik eerste begonnen met het maken van een goede en duidelijke HTML structuur. Ik gebruik meerdere HTML pagina's zodat een gebruiker ook zonder CSS nog niet te veel vragen op 1 scherm ziet. 

<img width="745" alt="Screenshot 2023-04-05 at 20 03 08" src="https://user-images.githubusercontent.com/24406793/230165468-c794b1e0-797a-44ff-8cb2-8d35752589fe.png">

### Week 3
Toen de eerste HTML er stond, heb ik gewerkt aan een klein design zodat ik een beetje wist in welke richting ik wou gaan met de styling.
<img width="291" alt="Screenshot 2023-04-05 at 20 05 53" src="https://user-images.githubusercontent.com/24406793/230166011-d7cc3de9-b91b-4765-8378-b00ca36f5e26.png">

Ik pas het principe 1 action per screen toe, waardoor je de aandacht van de gebruiker houd. Elk scherm heeft 1 hoofddoel, zijn mening geven over 1 vak.
Vervolgens heb ik dit uitgewerkt in CSS.
Toen de CSS stond ben ik gaan werken aan het opslaan in de local storage, waardoor je antwoorden kan opslaan en later de enquête af kan maken wanneer je de browser afsluit.

```Javascript
window.addEventListener('beforeunload', function() {
    var pageId = 'page1';
    var sections = ['lesstof1', 'geleerd1'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});
```
Hier gebruik ik een addEventListener met 'beforeunload', hiermee voer ik de functie uit op het moment dat ik de browser afsluit of naar een andere pagina navigeer. Vervolgens zet ik voor elke section de data uit een checkbox in een variabele, en zet ik deze samen met de juiste pageina in de local storage, waardoor hij later weer op te halen is. 

Uiteindelijk werkt de website zoals hij zou moeten, na het toevoegen van media queries. Nu is het tijd om te testen op andere devices en browsers.

### Testen

Ik ben begonnen met het testen op de standaardbrowsers, Google Chrome, Firefox en Safari. Met Google Chrome ging alles zonder problemen. Alleen met Safari Technology Preview liep ik tegen de eerste issue aan. 

Ik maakte gebruik van een HTML progress bar, deze was niet te stylen in Safari. Dit was een probleem voor mijn Dark Mode functie. en dus heb ik deze HTML bar helemaal achterwege gelaten en heb ik zelf een progressbar gemaakt in CSS. 

```HTML
<!-- <progress value="100" max="100"> </progress> -->
        <div class="progressbar">
            <div class="progress progress1"></div>
        </div>
```
Firefox support de 'has' selector nog niet, waardoor je niet kan zien welke keuze je selecteert met de custom radio buttons, hiervoor maak ik namelijk gebruik van de 'has' selector. 

Om dit te fixen heb ik de has selector achterwege gelaten, en uiteindelijk is mijn styling hetzelfde gebleven, in plaats van de has selector style ik nu mijn input:checked op deze manier:
```CSS
input:checked {
    background-color: #0048ff79;
}
```

Omdat wij ook moesten testen op een 'obscure' browser, heb ik besloten om Flow browser te downloaden. Na een tijd uitzoeken hoe ik überhaupt op een website moest komen, is het dan uiteindelijk toch gelukt op mijn website te openen. 

<img width="491" alt="Screenshot 2023-04-05 at 20 30 55" src="https://user-images.githubusercontent.com/24406793/230172676-a02388aa-2d48-48df-aae0-ee00af069d23.png">
Ik liep al snel tegen een paar dingen aan met het gebruik van Flow: 
1. mijn gecustomizede radio buttons waren weg, dit zal waarschijnlijk komen omdat je deze niet kan aanpassen in Flow, hier moest dus een fallback voor komen met normale radio buttons. 
2. Border radius op mijn buttons was weg, waardoor dit komt zou ik oprecht niet weten. 

Al met al valt het wel mee, nu alleen op zoek naar een manier om een fallback te krijgen voor de custom radio buttons. 

## Progressive enhancement
De site word progressive enhancent door het gebruik van CSS en Javascript. 
In eerste instantie heb je een simpel formulier, van een simpel formulier ga je naar een formulier met styling en een progressiebar, en uiteindelijk heb je een formulier met alles erbij die je progressie kan opslaan.

## Brief naar backend
Om de site zo optimaal mogelijk te laten werken, moet je ook rekening houden met mensen die om wat voor reden dan ook geen client side Javascript kunnen gebruiken. 
Hiervoor is het gebruiken van een goede backend noodzakelijk. 

De backend zal ervoor moeten zorgen dat de gegevens opgeslagen worden in een database, en deze vanuit deze database weer worden geladen, als hierom gevraagd word. 

De gebruiker wilt:
1. Data invullen
2. Data moet vaak verstuurd en geupdate worden, denk bijvoorbeeld aan elke keer dat de gebruiker naar de volgende pagina gaat.
3. Aan het einde is alle data opgeslagen, en bij de submit is de final versie verstuurd (mogelijk met studentinformatie). 

## Aanpassingen
Om de site vanuit het gebruikerspunt zo goed mogelijk te laten werken, heb ik een paar kleine aanpassingen aan de hoofdopdracht toegevoegd, dit kan altijd nog veranderd worden als dit niet bevalt. 
1. Gebruikers hoeven niet in het begin hun studentnummer en naam op te geven, ik ben van mening dat dit het resultaat van de enquête zal beïnvloeden, omdat mensen over het algemeen anoniem eerlijker zijn. Om deze reden is het aan het einde optioneel geworden, zo kunnen studenten er zelf voor kiezen of ze hun naam delen of niet. 
2. De naam van het vak, docenten en periode van het vak staan al vast, worden al opgehaald vanuit een database (bijvoorbeeld). Studenten weten vaak de periode niet meer, en deze data is geen mening, dus zal het fouten besparen om dit gewoon mee te geven, ook houd dit de focus bij de mening geven over de vakken.

## Toekomstige verbeteringen
Ik had nog graag een aantal extra verbeteringen willen doorvoeren, die ik helaas door de tijdsdruk niet heb kunnen doen. Alles wat moet zit in de website maar ik had de volgende dingen nog toe willen voegen:
1. Zelf de backend features die nodig waren maken.
2. Daadwerkelijk laden uit een database. 
3. Ook op Flow varianten vinden voor de radio buttons.
4. Styling wat mooier, vloeiender.
5. Animaties(enhancement)
