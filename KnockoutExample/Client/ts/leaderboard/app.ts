const $ = require('expose-loader?$!expose-loader?jQuery!jquery');
import * as ko from "knockout";
import { Leaderboard } from "./leaderboard";

require('../../css/main.less');

($(function () {
    const leaderboard = new Leaderboard();

    leaderboard.getScores('/leaderboard/getScores')
        .then((res) => {
            leaderboard.setScores(res);
            ko.applyBindings(leaderboard, document.getElementById('leaderboard'));
        });
}))