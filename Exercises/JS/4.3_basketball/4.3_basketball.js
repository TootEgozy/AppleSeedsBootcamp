// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.
// Submit the file to Hive.


let john = {a:89, b:120, c:103};
let mike = {a:116, b:94, c:123};
let mary = {a:97, b:134, c:105};

avrage = (player) => ((player.a + player.b + player.c)/3);

function declareWinner() {

    let avJohn = avrage(john);
    let avMike = avrage(mike);
    let avMary = avrage(mary);
    
    alert(avJohn);
    alert(avMike);
    alert(avMary);

    if (avJohn > avMike) { 
         if (avJohn > avMary) console.log(`John wins with the avrage score of ${avJohn}`);
         else if (avJohn == avMary) console.log(`A tie between the winners John (${avJohn}) and Mary (${avMary})`);
         else console.log(`Mary wins with the avrage score of ${avMary}`);
    }
    else if (avJohn == avMike) {
        if (avJohn == avMary) console.log(`A triple tie! All the players have an avrage score of ${avJohn}`);
        else if (avJohn > avMary) console.log(`John wins with the avrage score of ${avJohn}`);
        else console.log(`Mary wins with the avrage score of ${avMary}`);
    }
    else {
        if (avMike > avMary) console.log(`Mike wins with the avrage score of ${avMike}`);
        else if (avMike = avMary) console.log(`A tie between the winners Mike (${avMike}) and Mary (${avMary})`);
        else console.log(`Mary wins with the avrage score of ${avMary}`);
    }
}

alert(declareWinner());

// alert(avrage(john)); //104
// alert(avrage(mike)); //111
// alert(avrage(mary)); //112