Oblig 1
=======
OsloMet brukernavn: s369521

GitHub brukernavn: EirikWJ

Github repo URL: https://github.com/data1700-v23/oblig-1-EirikWJ

Fullt navn: Eirik Wang Johansen

Kort beskrivelse av applikasjon (5-10 setninger):

Når siden loader opprettes Tickets arrayet, definerer og printer ut th linjen i table, og definerer en HTMLcollection hvor feilmeldingene skal stå.
Når kjøp billett blir trykket hentes alle verdiene fra Inputfeltene, og tar parseInt for å gjøre om fra String til Integer.
deretter setter jeg opp en guard clause som går ut av buyTickets funksjonen hvis valideringsfunksjonen kommer tilbake som false.
Validate funksjonen tar inn alle verdiene fra input som parameter, og sjekker om det står noe i feltene(i tilfellet med Epost sjekker den også om det er med . og @ som er nødt å være med i en epostadresse) hvis datatypen er String, hvis ikke sjekker den om Integeren er positiv, langt nok, eller om det er NaN(blir NaN hvis programmer gjør parseInt på en bokstav). 
Hvis hvis ikke de respektive inputverdiene ikke blir godkjent blir en feilmelding sendt ut via errormsg.innertext og funcksjonen vil returnere false, hvis verdiene er gyldige vil den returnere true.
Hvis inputverdiene blir godkjent blir verdiene lagt inn i et object som blir pushet inn i Ticketsarrayet, Tickets blir lagt ut i tabelen i <td> elementer via printTable() funcksjonen, og inputfeltene blir resatt med cleanSlate().cleanSlate() funcksjonen tar inn inputfeltene som default verdi, gjør om HTMLcollectionen til en Array og bruker forEach til å gå igjennom hvert felt og setter verdien lik "";
Hvis Slett alle billetter knappen blir trykket blir Tickets arrayet tømmt, resetTable() blir kalt slik at tabellen bare har <th> elementer, og cleanSlate() tømmer alle inputfeltene.
