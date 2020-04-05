var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Department = /** @class */ (function () {
    function Department(_id, n, admins) {
        this._id = _id;
        this.name = n;
        this.admins = admins;
        Department.counter++;
    }
    Department.prototype.getName = function () {
        return this.name;
    };
    return Department;
}());
// Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        return _super.call(this, id, "It", admins) || this;
    }
    ITDepartment.prototype.addAdmins = function (admins) {
        if (admins.length > 0)
            this.admins = admins;
    };
    ITDepartment.prototype.showAdmins = function () {
        console.log(this.admins);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "IT", []) || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var array = ["Bruno", "Sérgio", "João"];
var it = new ITDepartment("ItIsTheBest", __spreadArrays(array));
var accounting = new AccountingDepartment("ACC", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
it.showAdmins();
