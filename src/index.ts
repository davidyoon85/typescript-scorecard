import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader("football.csv");
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    let manUnitedWinsAtHome = match[1] === "Man United" && match[5] === MatchResults.HomeWin;
    let manUnitedWinAway = match[2] === "Man United" && match[5] === MatchResults.AwayWin;
    if (manUnitedWinsAtHome || manUnitedWinAway) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} game`);
