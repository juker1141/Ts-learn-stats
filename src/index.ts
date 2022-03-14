import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

// const printMatchResult = (): MatchResult => {
//   if (match[5] === "H") {
//     return MatchResult.HomeWin;
//   }

//   return MatchResult.AwayWin;
// }
const dateOfFirstMatch = reader.data[0][0];

let manUniteWins = 0;

for (let match of reader.data) {
  if (
    match[1] === "Man United" &&
    match[5] === MatchResult.HomeWin
  ) {
    manUniteWins++;
  } else if (
    match[2] === "Man United" &&
    match[5] === MatchResult.AwayWin
  ) {
    manUniteWins++;
  }
}

console.log(`Man United won ${manUniteWins} games`)