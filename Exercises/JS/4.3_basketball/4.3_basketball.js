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


function average(player) {
    var result = 0;
    for (i = 0; i < player.length; i++) {
        result += player[i];
    }
    return result / player.length;
}

let john = [89, 120, 103];
let mike = [116, 94, 123];
let mary = [97, 134, 105];

let avJohn = average(john);
let avMike = average(mike);
let avMary = average(mary);

console.log(`John's average: ${avJohn}`);
console.log(`Mike's average: ${avMike}`);
console.log(`Mary's average: ${avMary}`);

[avJohn, avMike, avMary]


if (avMike > avJohn) {
    if (avMike > avMary) console.log(`Mike wins with the average score of ${avMike}`);  
    else if (avMike == avMary) console.log(`A tie between the winners Mike (${avMike}) and Mary (${avMary})`);
         else console.log(`Mary wins with the average score of ${avMary}`);
}
else {
    if (avMike == avJohn) {
        if (avMike > avMary) console.log(`A tie between the winners Mike (${avMike}) and John (${avJohn})`); 
        else {
          if (avMike == avMary) console.log(`A triple tie! All the players have an average score of ${avJohn}`);
          else console.log(`Mary wins with the average score of ${avMary}`);
        }
    }
    else { 
        if (avJohn > avMary) console.log(`John wins with the average score of ${avJohn}`);
        else {
            if (avJohn == avMary) console.log(`A tie between the winners John (${avJohn}) and Mary (${avMary})`);
            else console.log(`Mary wins with the average score of ${avMary}`); 
        }
    }
}

