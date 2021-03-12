import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    let manUnitedWinsAtHome = match[1] === "Man United" && match[5] === MatchResult.HomeWin;
    let manUnitedWinAway = match[2] === "Man United" && match[5] === MatchResult.AwayWin;
    if (manUnitedWinsAtHome || manUnitedWinAway) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} game`);
