Todo:
Separate alert elements 

# Kommentarer till uppgiften

Autogenererade identifierare via Cypress Studio
Inte haft tid att snygga till alla
Hantera felalerts

Läggas till i rikigt scenario:
Testdata-objekt

Validering på månadslön är felaktig
Lön < 15000 tillåts felaktigt
Kommenterat bort detta från testet

# Funderingar
## Ytterligare valideringar:
Namn: Siffror, maxlängd
Personnummer: Kontrollsiffra

## Strukturella förbättringar
Id:n på elementen
Listboxen på förstasidan är lite svårjobbad, kanske kan bytas ut

----------------------------------------------------------

# Kör applikationen

1. `npm install`
2. `npm run cypress:open`
3. Klicka 'E2E Testing'
4. Välj en webbläsare
5. Välj test som du vill köra