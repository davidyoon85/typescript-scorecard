"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    var manUnitedWinsAtHome = match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin;
    var manUnitedWinAway = match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin;
    if (manUnitedWinsAtHome || manUnitedWinAway) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " game");
