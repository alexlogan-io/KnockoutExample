const $ = require('expose-loader?$!expose-loader?jQuery!jquery');
import * as ko from "knockout";
import { Quiz } from "./Quiz";
import { Question } from "./Question";
import { AddNewQuestion } from "./AddNewQuestion";
import { toPascal } from "../Utils";

//page specific css here 
require('../../css/main.less');

const getQuestions = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.open('GET', url);

        req.onload = () => {
            if (req.status === 200) {
                resolve(JSON.parse(req.response));
            } else {
                reject(Error(req.statusText));
            }
        }

        req.onerror = () => {
            reject(Error("Network Error"));
        }

        req.send();
    });
}

($(function () {
    const quiz = new Quiz();

    getQuestions('/quiz/getquestions')
        .then((res: Array<any>) => {
            console.log(res);
            for (let item of res) {
                quiz.addQuestion(new Question(item.question, null, null, item.options, item.answers))
            }

            quiz.init();

            ko.applyBindings(quiz, document.getElementById("mainQuiz"));

            const addNewQuestion = new AddNewQuestion(quiz);
            ko.applyBindings(addNewQuestion, document.getElementById("addNewQuestion"));
        });
}));