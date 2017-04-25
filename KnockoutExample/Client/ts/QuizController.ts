import * as ko from "knockout";
import { toPascal } from "./Utils";

export class QuizController {
    questionArray;
    selectedIndex;
    showAnswers;
    title;

    constructor() {
        this.selectedIndex = ko.observable(0);
        this.questionArray = ko.observableArray([])
        this.title = ko.observable("");
    }

    init = () => {
        this.setTitle();
    }

    next = () => {
        this.selectedIndex(this.selectedIndex() + 1);
        this.setTitle();
    }

    previous = () => {
        this.selectedIndex(this.selectedIndex() - 1);
        this.setTitle();
    }

    addQuestion = (...question) => {
        for (let item of question) {
            this.questionArray.push(item);
        }
    }

    submit = () => {
        console.log("submit");
    }

    

    private setTitle = () => {
        if (this.selectedIndex() >= 0 && this.selectedIndex() < this.questionArray().length) {
            this.title(this.questionArray()[this.selectedIndex()].name);
        }
        else {
            this.title("Score");
        }
    }
}