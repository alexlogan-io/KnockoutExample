/*import * as ko from "knockout";
import { ReportingBaseVM } from "./ReportingBaseVM";
import { ReportingController } from "./ReportingController";

export class AddNewColumn {

    title: KnockoutObservable<string>;
    newColumns: KnockoutObservableArray<string>;
    newColumnName: KnockoutObservable<string>;
    showForm: KnockoutObservable<boolean>;
    reportingController: ReportingController;

    constructor(reportingController?: ReportingController) {

        this.title = ko.observable("");
        this.newColumns = ko.observableArray([]);
        this.newColumnName = ko.observable("");
        this.showForm = ko.observable(false);
        this.reportingController = reportingController;

    }

    toggleForm = () => {
        this.showForm() ? this.showForm(false) : this.showForm(true);
        return this.showForm();
    }

    addColumn = () => {
        this.newColumns.push(this.newColumnName());
        this.newColumnName("");
    }

    submit = () => {
        if (this.title().length > 0 && this.newColumns().length > 0) {
            const newReportingVm = new ReportingBaseVM(this.title(), null, this.newColumns());
            this.reportingController.addViewModel(newReportingVm);
            this.newColumns([]);
            this.title("");
        }
    }

}
*/
