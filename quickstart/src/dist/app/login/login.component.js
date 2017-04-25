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
var user_service_1 = require("../user.service");
var angular2_toaster_1 = require("angular2-toaster");
var LoginComponent = (function () {
    function LoginComponent(userService, toasterService) {
        this.userService = userService;
        this.toasterService = toasterService;
        this.user = userService.userName;
        this.toasterService.pop('success', 'Success Message');
    }
    LoginComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    LoginComponent.prototype.getHeroes = function () {
        var _this = this;
        this.userService.getHeroes()
            .subscribe(function (data) {
            _this.data = data;
            console.log("this.data23", _this.data);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, angular2_toaster_1.ToasterService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map