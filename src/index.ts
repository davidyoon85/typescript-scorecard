import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    let manUnitedWinsAtHome = match[1] === "Man United" && match[5] === MatchResult.HomeWin;
    let manUnitedWinAway = match[2] === "Man United" && match[5] === MatchResult.AwayWin;
    if (manUnitedWinsAtHome || manUnitedWinAway) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} game`);
