"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader("football.csv");
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
    if (match[1] === "Man United" &&
        match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUniteWins++;
    }
    else if (match[2] === "Man United" &&
        match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUniteWins++;
    }
}
console.log(`Man United won ${manUniteWins} games`);
