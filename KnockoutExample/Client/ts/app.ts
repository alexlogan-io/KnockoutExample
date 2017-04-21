const $ = require('expose-loader?$!expose-loader?jQuery!jquery');
import * as ko from "knockout";
import { ReportingController } from "./ReportingController";
import { ReportingBaseVM } from "./ReportingBaseVM";
import { AddNewColumn } from "./AddNewColumn";
import { toPascal } from "./Utils";

//page specific css here 
require('../css/site.css');

($(function () {
    let controller = new ReportingController();
    let employeeColumnsVM = new ReportingBaseVM("Employee", "/reporting/getEmployeeColumns");
    let dataCodesVM = new ReportingBaseVM("Data Codes", "/reporting/getDataCodeColumns");
    let absenseVM = new ReportingBaseVM("Absense", "/reporting/getAbsenseColumns");
    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);
    controller.init();
    ko.applyBindings(controller, document.getElementById("employeeColumns"));

    let addNewColumn = new AddNewColumn(controller);
    ko.applyBindings(addNewColumn, document.getElementById("addNewColumn"));
}));