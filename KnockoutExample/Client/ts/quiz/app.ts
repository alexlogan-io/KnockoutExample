const $ = require('expose-loader?$!expose-loader?jQuery!jquery');
import * as ko from "knockout";
import { Quiz } from "./Quiz";
import { Question } from "./Question";
import { AddNewQuestion } from "./AddNewQuestion";
import { toPascal } from "../Utils";

//page specific css here 
require('../../css/main.less');

($(function () {
    const quiz = new Quiz();

    const goals = new Question("Players Who Have Scored Over 100 Goals for Manchester United",
        null,
        null,
        ["Wayne Rooney", "Juan Mata", "Ruud Van Nistelrooy", "Michael Carrick", "Roy Keane", "Denis Law"],
        ["Wayne Rooney", "Ruud Van Nistelrooy", "Denis Law"]);

    const champ = new Question("Players Who Have Won the Champions League with Manchester United",
        null,
        null,
        ["Bobby Charlton", "Eric Cantona", "Steve Bruce", "Anderson", "Wes Brown", "Robin Van Persie"],
        ["Bobby Charlton", "Anderson", "Wes Brown"]);
    const sentOff = new Question("Players Who Have Been Sent Off for Manchester United",
        null,
        null,
        ["Ryan Giggs", "Edwin Van De Sar", "Juan Mata", "Chris Smalling", "Phil Jones", "Bryan Robson"],
        ["Juan Mata", "Chris Smalling", "Bryan Robson"]);

    quiz.addQuestion(goals, champ, sentOff);
    quiz.init();

    ko.applyBindings(quiz, document.getElementById("mainQuiz"));

    const addNewQuestion = new AddNewQuestion(quiz);
    ko.applyBindings(addNewQuestion, document.getElementById("addNewQuestion"));
}));