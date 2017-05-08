import * as ko from 'knockout';

export class Leaderboard {
    scores: KnockoutObservableArray<Object>;
    show: KnockoutObservable<boolean>;

    constructor() {
        this.scores = ko.observableArray([]);
    }

    setScores = (data) => {
        //console.log(data);
        for (let item of data) {
            this.scores.push(item);
        }

        //console.log(this.scores());
    }

    getScores = (url) => {
        return new Promise(function (resolve, reject) {
            const req = new XMLHttpRequest();

            req.open('GET', url);

            req.onload = () => {
                if (req.status === 200) {
                    //bit weird. had to parse json twice to get an array???
                    resolve(JSON.parse(req.response));
                }
                else {
                    reject(Error(req.statusText));
                }
            }

            req.onerror = () => {
                reject(Error("Network Error"));
            }

            req.send();
        })
    }
}