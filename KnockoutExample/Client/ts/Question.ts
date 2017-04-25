import * as $ from "jquery";
import * as ko from "knockout";
import { toPascal } from "./Utils";

export class Question {
    name: string;
    options: KnockoutObservableArray<string>;
    selectedOptions: KnockoutObservableArray<string>;
    answers: KnockoutObservableArray<string>;
    showAnswers: KnockoutObservable<boolean>;
    score: KnockoutObservable<number>;
    answerStyle: KnockoutComputed<string>;

    constructor(name: string, optionsUrl?: string, answersUrl?: string, options?: string[], answers?: string[]) {
        this.name = name;
        this.selectedOptions = ko.observableArray([]);

        if (optionsUrl) {
            this.options = ko.observableArray([]);
            this.populateColumn("options", optionsUrl);
        } else {
            this.options = ko.observableArray(options);
        }

        if (answersUrl) {
            this.answers = ko.observableArray([]);
            this.populateColumn("answers", answersUrl);
        } else {
            this.answers = ko.observableArray(answers);
        }

        this.showAnswers = ko.observable(false);
        this.score = ko.observable(0);
    }

    populateColumn = (column: string, url: string) => {
        var self = this;
        $.getJSON(url, function (data) {
            let t = [];
            for (let item of data) {
                t.push(item);
            }

            if (column === "options") {
                self.options = ko.observableArray(t);
                self.options.sort();
            } else {
                self.answers = ko.observableArray(t);
                self.answers.sort();
            }
            
        });
    }

    removeFromSelectedAnswers = (item) => {
        this.selectedOptions.remove(item);
        this.selectedOptions.sort();
    }

    addToSelectedAnswers = (item) => {
        if (this.selectedOptions.indexOf(item) < 0) {
            this.selectedOptions.push(item);
            this.selectedOptions.sort();
        }
    }

    isCorrect = (item) => {
        if (this.showAnswers()) {
            if (this.answers().indexOf(item) > -1) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    isFalse = (item) => {
        if (this.showAnswers()) {
            if (this.answers().indexOf(item) === -1) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    getScore = () => {
        if (!this.showAnswers()) {
            this.showAnswers(true);
            let score = 0;
            for (let answer of this.selectedOptions()) {
                if (this.isCorrect(answer)) {
                    score += 1;
                } else {
                    score -= 1;
                }
            }

            this.score(score);
        }
    }
}