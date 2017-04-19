//import * as $ from "jquery";
//needed for jquery to be available on page
var $ = require('expose-loader?$!expose-loader?jQuery!jquery');
import * as ko from "knockout";
import { ReportingBaseVM } from "./ViewModels";
import { toPascal } from "./Utils";
//page specific css here 
require('../css/site.css');
($(function () {
    var controller = new ReportingController();
    var employeeColumnsVM = new ReportingBaseVM("Employee", "/reporting/getEmployeeColumns");
    var dataCodesVM = new ReportingBaseVM("Data Codes", "/reporting/getDataCodeColumns");
    var absenseVM = new ReportingBaseVM("Absense", "/reporting/getAbsenseColumns");
    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);
    controller.init();
    ko.applyBindings(controller);
}));
var ReportingController = (function () {
    function ReportingController() {
        var _this = this;
        this.init = function () {
            _this.setTitle();
        };
        this.next = function () {
            _this.selectedIndex(_this.selectedIndex() + 1);
            _this.setTitle();
        };
        this.previous = function () {
            _this.selectedIndex(_this.selectedIndex() - 1);
            _this.setTitle();
        };
        this.addViewModel = function () {
            var vm = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vm[_i] = arguments[_i];
            }
            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {
                var item = vm_1[_a];
                _this.vmArray.push(item);
            }
        };
        this.submit = function () {
            var data = {};
            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                var name_1 = item.modelName;
                var arr = item.selectedColumns().map(function (a) { return toPascal(a); });
                data[name_1] = arr;
            }
            $.post("/reporting/submit", { columns: JSON.stringify(data) }, function (res) {
                alert(res);
            });
        };
        this.setTitle = function () {
            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {
                _this.title(_this.vmArray()[_this.selectedIndex()].name);
            }
            else {
                _this.title("Review");
            }
        };
        this.selectedIndex = ko.observable(0);
        this.vmArray = ko.observableArray([]);
        this.title = ko.observable("");
    }
    return ReportingController;
}());
export { ReportingController };
//# sourceMappingURL=Reporting.js.map