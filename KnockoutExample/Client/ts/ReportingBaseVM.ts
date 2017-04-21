import * as $ from "jquery";
import * as ko from "knockout";
import { toPascal } from "./Utils";

export class ReportingBaseVM {
    name: string;
    modelName: string;
    columns: KnockoutObservableArray<string>;
    selectedColumns: KnockoutObservableArray<string>;

    constructor(name: string, url?: string, columns?: string[]) {
        this.name = name;
        this.selectedColumns = ko.observableArray([]);
        this.modelName = toPascal(this.name);

        if (url) {
            this.columns = ko.observableArray([]);
            this.populateColumn(url);
        } else {
            this.columns = ko.observableArray(columns);
        }
    }

    populateColumn = (url: string) => {
        var self = this;
        $.getJSON(url, function (data) {
            for (let item of data) {
                self.columns.push(item);
            }
            self.columns.sort();
        });
    }

    removeFromSelectedColumns = (item) => {
        this.selectedColumns.remove(item);
        this.selectedColumns.sort();
    }

    addToSelectedColumns = (item) => {
        if (this.selectedColumns.indexOf(item) < 0) {
            this.selectedColumns.push(item);
            this.selectedColumns.sort();
        }
    }
}