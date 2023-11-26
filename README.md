# Intro

Minso är vårt system för att visa försäkringsdata för inloggade användare. Systemet består idag av två delar:

- En privat del där man loggar in som försäkrad för att se sina pensionsförsäkringar, både privat sparande och tjänstepension.
- En företagsdel där man loggar in som administratör för ett företag för att hantera sina anställda och försäkringar.

Den privata delen handlar till stor del om att visa information på ett förståeligt sätt. Företagsdelen däremot är ett arbetsverktyg där användaren kan se och mata in data. Företagsdelen handlar mycket om att visa formulär som användaren får använda för att rapportera in data med varierande grad av komplex validering.

# Testet
Vi har satt upp ett frågeformulär som ska likna en mycket förenklad version av en del av vårt system Minso. Vi skulle vilja att du skriver automatiserade tester med lite olika funktionalitet. 

Det vi vill att du verifierar är att:

- Obligatoriska fält måste vara ifyllda för att gå vidare.
- Formuläret validerar de inmatade värdena enligt angiven validering (vilka valideringar som finns står i formuläret).
- Alla fält går att sätta från automatiska tester.

Det vi vill att du funderar över är:

- Fältens validering är inte kompletta och skulle i en verklig applikation behöva utökas. Bör man exempelvis tillåta siffror i ett förnamn? Vilka andra valideringar skulle du vilja lägga till? Notera detta och lägg gärna till ytterligare tester för det om du har tid över. 
- Om formuläret hade varit vår verkliga applikation, vad hade du velat förbättra rent strukturellt för att underlätta och förbättra för testbarheten?

Lägg inte mer än 3 timmar på det - du behöver inte hinna klart med alla fält. Vi föredrar att se att du har satt upp en bra grundstruktur som skulle kunna byggas vidare på. Sätt upp ditt projekt och skriv din kod som om det vore i en verklig applikation. 
I detta projekt har vi valt att använda Cypress men verktyg är helt fritt att välja vad du vill. Du behöver heller inte använda dig av detta projekt. Alla verktyg är tillåtna (ChatGPT, Google, dokumentation, etc).

[Formuläret hittar du här](https://docs.google.com/forms/d/e/1FAIpQLScWINEF6sSy0W_-TK8fszx7g5vgPQvrTnaL-9Sl5ZXPdjVZXg/viewform?usp=sf_link)

# Kör applikationen

1. `npm install`
2. `npm run cypress:open`
3. Klicka 'E2E Testing'
4. Välj en webbläsare
5. Välj test som du vill köra