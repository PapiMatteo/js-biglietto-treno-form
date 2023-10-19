## ESERCIZIO

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### SVOLGIMENTO

Fare struttura HTML

JS All'interno event listener al click di INVIA:

#### Raccolta Dati

1. Prelevare nome utente dall'input
2. Prelevare distanza da percorrere dall'input
2. Prelevare l'eta' dell'utente dal select

#### Logica
1. Effettuare calcoli di sconti
2. Preparare il testo del messaggio da mandare a schermo

#### Output 

1. Stampare il messaggio nell'elemento del risultato in HTML 

#### Cancellare tramite ANNULLA

1. Cancellare dati dall'input
2. Cancellare il messaggio nell'elemento HTML
3. Nascondere la sezione del risultato 