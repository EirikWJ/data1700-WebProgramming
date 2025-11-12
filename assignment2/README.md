Oblig 2
=======
OsloMet brukernavn: s369521

GitHub brukernavn: EirikWJ

Github repo URL: https://github.com/data1700-v23/oblig-2-EirikWJ

Fullt navn: Eirik Wang Johansen

Kort beskrivelse av applikasjon (5-10 setninger):

-når nettleseren blir lastet inn henter nettsiden alle ordre, dette er fordi jeg ønsker å vise tidligere lagrede data med en gang. Bruker  deretter IDBreakpoint() for å finne ut hvor ID generatorfunksjonen skal starte opp fra, gitt at data allerede har blitt lagret på serveren.Gjør dette ved å hente største ID verdi lagret på serveren og incrementer den så med en før jeg sender den inn som paramater i en ny IDgenerator. legger også inn hvilke filmer som skal være med i dropdown menyen. Jeg kunne laget et nytt filmobjekt som inneholdt FilmID, navn, lengde, aldersgrense osv, men valgte å ikke gjøre dette ettersom kun navnet ville bli brukt i denne versjonen av nettsiden.
addOrder() er metoden som tar seg av POST forespørsler, hvor den sender dataen fra inputfeltene til server for lagring og kaller opp getAllOrders() som henter opp alle Order-objectene fra serveren og sender dem videre til å bli printet ut i tabellen. valgte å kalle Post og Get i lenke ettersom det føltes mer naturlig enn å ha en knapp for å hente opp objektene. Metoden deleteOrders() er en ajax metode av typen DELETE som sletter alle lagrede data på serveren i den listen. Her kunne jeg brukt en POST istedenfor, men valgte å ikke gjøre det ettersom det gjør koden litt mer selvforklarende synes jeg. alle andre metoder som ikke har blitt nevnt fungerer nesten på akkurat samme måte som ved Oblig1.

NB! Skjermbildene av Spring Boot serveren, index.html i nettleser, GET og POST med header, payload og response ligger vedlagt i mappen "Screenshots of Server, hmtl, payload and response". :)
