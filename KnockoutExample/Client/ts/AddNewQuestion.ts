import * as ko from "knockout";
import { QuizController } from "./QuizController"
import { Question } from "./Question";

export class AddNewQuestion {

    title: KnockoutObservable<string>;
    newOptions: KnockoutObservableArray<string>;
    newOption: KnockoutObservable<string>;
    newAnswers: KnockoutObservableArray<string>;
    newAnswer: KnockoutObservable<string>;
    showForm: KnockoutObservable<boolean>;
    quizController: QuizController;

    constructor(quizController?: QuizController) {

        this.title = ko.observable("");
        this.newOptions = ko.observableArray([]);
        this.newAnswers = ko.observableArray([]);
        this.newOption = ko.observable("");
        this.newAnswer = ko.observable("");
        this.showForm = ko.observable(false);

        if (quizController) {
            this.quizController = quizController;
        }
    }

    toggleForm = () => {
        this.showForm() ? this.showForm(false) : this.showForm(true);
        return this.showForm();
    }

    addOption = () => {
        this.newOptions.push(this.newOption());
        this.newOption("");
    }

    addAnswer = () => {
        if (this.newOptions.indexOf(this.newAnswer()) > -1) {
            this.newAnswers.push(this.newAnswer());
            this.newAnswer("");
        }
    }

    submit = () => {
        if (this.title().length > 0 && this.newOptions().length > 0) {
            const newQuestion = new Question(this.title(), null, null, this.newOptions(), this.newAnswers());
            this.quizController.addQuestion(newQuestion);
            this.newOptions([]);
            this.newAnswers([]);
            this.title("");
        }
    }

}