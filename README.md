
# Kommentarer till uppgiften

I början autogenererades identifierare via Cypress Studio. Jag har inte haft tid att snygga till alla dessa.

Validering på månadslön är felaktig i formuläret. 
Lön < 15000 tillåts felaktigt. 
Kommenterat bort detta från testet.

Validering på personnummer är felaktig i formuläret. 
Månad > 12 och Dag > 32 accepteras.
Kommenterat bort detta från testerna

## Några saker att vidareutveckla:
- Testdata-objekt
- Konstanter för textsträngar

# Funderingar
## Ytterligare valideringar:
- Maxlängder på fält
- Namn: ej siffror och andra otillåtna specialtecken
- Födelsedatum: Ålder > X, ålder < Y
- Personnummer: Kontrollsiffra, Ålder > X, ålder < Y

## Strukturella förbättringar
- Id:n på elementen
- Listboxen på förstasidan är lite svårjobbad, kanske kan bytas ut
- En kvittosida kunde underlätta kontroll att värdena sparats ordenligt.

----------------------------------------------------------

# Kör applikationen

1. `npm install`
2. `npm run cypress:open`
3. Klicka 'E2E Testing'
4. Välj en webbläsare
5. Välj test som du vill köra