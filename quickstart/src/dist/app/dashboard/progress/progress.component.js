"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProgressComponent = (function () {
    function ProgressComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    // events
    ProgressComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ProgressComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // events
    ProgressComponent.prototype.chartClickeds = function (e) {
        console.log(e);
    };
    ProgressComponent.prototype.chartHovereds = function (e) {
        console.log(e);
    };
    ProgressComponent.prototype.ngOnInit = function () {
    };
    return ProgressComponent;
}());
ProgressComponent = __decorate([
    core_1.Component({
        selector: 'class-progress',
        templateUrl: './progress.component.html',
        styleUrls: ['./progress.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ProgressComponent);
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map