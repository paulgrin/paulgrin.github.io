(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Sl2":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a2) { return ["../", "survey", a2]; };
function LandingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Give your vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, survey_r1.id));
} }
class LandingComponent {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    ngOnInit() {
        this.surveys$ = this.surveyService.getLastSurveysFromCategories();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 8, vars: 3, consts: [["src", "../assets/My_Voice_My_Vote_Matters-01.png", 2, "width", "100%"], [2, "text-align", "center"], [2, "color", "darkcyan"], [1, "row"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", "listing-surveys", 2, "text-align", "center"], [1, "card", "text-white", "bg-info", "mb-3", "listing-surveys", 2, "width", "18rem", "height", "10rem"], [1, "card-header"], [1, "card-body"], [1, "card-title"], ["type", "button", 1, "btn", "btn-outline-success", 3, "routerLink"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last surveys in our categories:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LandingComponent_div_6_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.surveys$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".listing-surveys[_ngcontent-%COMP%]{\n    margin-left: 70px; \n    margin-top: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Rpbmctc3VydmV5c3tcbiAgICBtYXJnaW4tbGVmdDogNzBweDsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming-projects\SurveyApp-main\survey-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0prs":
/*!***************************************************!*\
  !*** ./src/app/resolvers/view-survey.resolver.ts ***!
  \***************************************************/
/*! exports provided: ViewSurveyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSurveyResolver", function() { return ViewSurveyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/survey-service/survey.service */ "cDrq");



class ViewSurveyResolver {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    resolve(route, state) {
        return this.surveyService.getSurvey(route.params['id']);
    }
}
ViewSurveyResolver.ɵfac = function ViewSurveyResolver_Factory(t) { return new (t || ViewSurveyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"])); };
ViewSurveyResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewSurveyResolver, factory: ViewSurveyResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewSurveyResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"] }]; }, null); })();


/***/ }),

/***/ "3ndE":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt-interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-service/auth.service */ "rCn7");



class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        var clonedReq = req.clone({ setHeaders: {
                Authorization: `Bearer ${this.authService.getJwt()}`
            } });
        return next.handle(clonedReq);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GQid":
/*!****************************************!*\
  !*** ./src/app/services/auth-guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service/auth.service */ "rCn7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isAdmin()) {
            this.router.navigate([""]);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "H0RP":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-category/add-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddCategoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description must be at least 12 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddCategoryComponent {
    constructor(formBuilder, categoryService, router) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.router = router;
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)])
        });
    }
    get name() {
        return this.categoryForm.get('name');
    }
    get description() {
        return this.categoryForm.get('description');
    }
    save() {
        this.categoryService.postCategory(this.categoryForm.value).subscribe((res) => {
            let id = res['id'];
            this.router.navigate([""]);
        }, (error) => { console.log(`error: ${error}`); });
    }
}
AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) { return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCategoryComponent, selectors: [["app-add-category"]], decls: 19, vars: 6, consts: [[2, "text-align", "center"], [1, "col-md-6", "offset-md-3", 2, "text-align", "center", 3, "formGroup", "submit"], [1, "form-group", "row"], ["id", "name", "formControlName", "name", "required", "", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "name", "formControlName", "description", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"]], template: function AddCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddCategoryComponent_Template_form_submit_3_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Category Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddCategoryComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddCategoryComponent_div_9_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Category Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddCategoryComponent_div_15_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddCategoryComponent_div_16_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.touched && (ctx.name.errors == null ? null : ctx.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.name.errors == null ? null : ctx.name.errors.minlength) && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description.touched && (ctx.description.errors == null ? null : ctx.description.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.description.errors == null ? null : ctx.description.errors.minlength) && ctx.description.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["button[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbjpkaXNhYmxlZHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-category',
                templateUrl: './add-category.component.html',
                styleUrls: ['./add-category.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ld5z":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-survey/edit-survey/edit-survey.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSurveyComponent", function() { return EditSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_classes_Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/Option */ "W9fp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EditSurveyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cat_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("value", cat_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", cat_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r3.name);
} }
function EditSurveyComponent_div_19_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditSurveyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditSurveyComponent_div_19_div_6_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionIndex_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", optionIndex_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionIndex_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", optionIndex_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.options.controls[optionIndex_r6].controls.option.errors == null ? null : ctx_r1.options.controls[optionIndex_r6].controls.option.errors.required) && ctx_r1.options.controls[optionIndex_r6].touched);
} }
function EditSurveyComponent_div_24_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSurveyComponent_div_24_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const optionIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.removeOption(optionIndex_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditSurveyComponent_div_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditSurveyComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditSurveyComponent_div_24_button_6_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditSurveyComponent_div_24_div_7_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionIndex_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", optionIndex_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionIndex_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", optionIndex_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.options.length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.optionVotes.controls[optionIndex_r9].controls.optionVote.errors == null ? null : ctx_r2.optionVotes.controls[optionIndex_r9].controls.optionVote.errors.required) && ctx_r2.optionVotes.controls[optionIndex_r9].touched);
} }
const _c0 = function () { return ["../"]; };
class EditSurveyComponent {
    constructor(route, formBuilder, router, surveyService, categorySerivce) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.surveyService = surveyService;
        this.categorySerivce = categorySerivce;
    }
    ngOnInit() {
        this.survey = this.route.snapshot.data['survey'];
        this.categoriesList$ = this.categorySerivce.getCategories();
        this.form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.survey.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
            ]),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.survey.categoryId, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            options: this.formBuilder.array([]),
            optionVotes: this.formBuilder.array([]),
        });
        this.fillOptionNames();
        this.fillOptionVotes();
    }
    fillOptionNames() {
        this.survey.options.forEach(opt => {
            this.options.push(this.formBuilder.group({
                option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](opt.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            }));
        });
    }
    fillOptionVotes() {
        this.survey.options.forEach(opt => {
            this.optionVotes.push(this.formBuilder.group({
                optionVote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](opt.votes, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            }));
        });
    }
    get options() {
        return this.form.get('options');
    }
    get optionVotes() {
        return this.form.get('optionVotes');
    }
    removeOption(index) {
        this.options.removeAt(index);
        this.optionVotes.removeAt(index);
        this.surveyService.deleteOptionFromSurvey(this.survey.id, this.survey.options[index].id).subscribe(x => {
            console.log(`Option deleted from ${this.survey.name}`);
        });
    }
    addOption() {
        this.options.push(this.formBuilder.group({
            option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }));
        this.optionVotes.push(this.formBuilder.group({
            optionVote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }));
        let option = new src_app_classes_Option__WEBPACK_IMPORTED_MODULE_2__["Option"]();
        option.name = '';
        option.votes = 0;
        this.survey.options.push(option);
    }
    save() {
        this.updateSurveyProperties();
        this.surveyService.updateSurvey(this.survey).subscribe(x => {
            this.router.navigate(["survey", this.survey.id]);
        });
    }
    get categories() {
        return this.categoriesList$;
    }
    updateSurveyProperties() {
        this.survey.name = this.form.value.name;
        this.survey.categoryId = this.form.value.categoryId;
        this.survey.options.forEach((option, index) => {
            option.name = this.form.value.options[index].option;
            option.votes = this.form.value.optionVotes[index].optionVote;
        });
    }
}
EditSurveyComponent.ɵfac = function EditSurveyComponent_Factory(t) { return new (t || EditSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"])); };
EditSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditSurveyComponent, selectors: [["app-edit-survey"]], decls: 29, vars: 9, consts: [[1, "text-center", "form-center"], [1, "col-md-8", 3, "formGroup"], [1, "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "form-group", "row"], ["id", "name", "formControlName", "name", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row"], [1, "col-md-7"], ["formArrayName", "options"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["formArrayName", "optionVotes"], [1, "btn", "btn-warning", "btn-lg", 2, "margin-right", "50px", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled", "click"], ["formControlName", "categoryId", "type", "radio", 1, "form-check-input", 3, "checked", "id", "value"], [1, "form-check-label", 3, "for"], [3, "formGroupName"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "option", "required", "", 1, "form-control", 3, "id"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "number", "min", "0", "formControlName", "optionVote", "required", "", 1, "form-control", 3, "id"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function EditSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Survey Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditSurveyComponent_div_8_Template, 4, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSurveyComponent_Template_button_click_12_listener() { return ctx.addOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditSurveyComponent_div_19_Template, 7, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditSurveyComponent_div_24_Template, 8, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSurveyComponent_Template_button_click_27_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionVotes.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".form-center[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\nbutton[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN1cnZleS9lZGl0LXN1cnZleS9lZGl0LXN1cnZleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN1cnZleS9lZGl0LXN1cnZleS9lZGl0LXN1cnZleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditSurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-survey',
                templateUrl: './edit-survey.component.html',
                styleUrls: ['./edit-survey.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"] }, { type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "Mnaq":
/*!***********************************************************************************!*\
  !*** ./src/app/components/edit-category/edit-category/edit-category.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EditCategoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCategoryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCategoryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCategoryComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description must be at least 12 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditCategoryComponent {
    constructor(categoryService, formBuilder, route, router) {
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.category = this.route.snapshot.data['category'];
        this.categoryForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)])
        });
    }
    get name() {
        return this.categoryForm.get('name');
    }
    get description() {
        return this.categoryForm.get('description');
    }
    save() {
        console.log(this.categoryForm.value);
        this.category.name = this.categoryForm.value.name;
        this.category.description = this.categoryForm.value.description;
        this.categoryService.updateCategory(this.category).subscribe(data => {
            this.router.navigate(["admin/categories"]);
        });
    }
}
EditCategoryComponent.ɵfac = function EditCategoryComponent_Factory(t) { return new (t || EditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCategoryComponent, selectors: [["app-edit-category"]], decls: 19, vars: 6, consts: [[2, "text-align", "center"], [1, "col-md-6", "offset-md-3", 2, "text-align", "center", 3, "formGroup", "submit"], [1, "form-group", "row"], ["id", "name", "formControlName", "name", "required", "", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "name", "formControlName", "description", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"]], template: function EditCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditCategoryComponent_Template_form_submit_3_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Category Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditCategoryComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditCategoryComponent_div_9_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Category Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditCategoryComponent_div_15_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditCategoryComponent_div_16_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.touched && (ctx.name.errors == null ? null : ctx.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.name.errors == null ? null : ctx.name.errors.minlength) && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description.touched && (ctx.description.errors == null ? null : ctx.description.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.description.errors == null ? null : ctx.description.errors.minlength) && ctx.description.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["button[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWNhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWNhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-category',
                templateUrl: './edit-category.component.html',
                styleUrls: ['./edit-category.component.css']
            }]
    }], function () { return [{ type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QadT":
/*!***************************************************************!*\
  !*** ./src/app/interceptors/response-handling-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: ResponseHandlingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseHandlingInterceptor", function() { return ResponseHandlingInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class ResponseHandlingInterceptor {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((succses) => {
            if (succses instanceof (_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"])) {
                if (succses.url.endsWith("add") || succses.url.endsWith("edit") || succses.url.endsWith("register") || succses.url.endsWith("login"))
                    this.toastr.success(succses.body.message, "Success");
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.toastr.error(error.error, "Error");
            throw error;
        }));
    }
}
ResponseHandlingInterceptor.ɵfac = function ResponseHandlingInterceptor_Factory(t) { return new (t || ResponseHandlingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ResponseHandlingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResponseHandlingInterceptor, factory: ResponseHandlingInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResponseHandlingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "QwKk":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/administration/survey-list-administration/survey-list-administration.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SurveyListAdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListAdministrationComponent", function() { return SurveyListAdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function SurveyListAdministrationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SurveyListAdministrationComponent_div_6_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const cat_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.filterBy(cat_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cat_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.checkedCategory == cat_r2.name ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", cat_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2.name);
} }
const _c0 = function (a2) { return ["../../", "survey", a2]; };
const _c1 = function (a2) { return ["../../", "survey", a2, "edit"]; };
function SurveyListAdministrationComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurveyListAdministrationComponent_tr_22_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const survey_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(survey_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, survey_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r6.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r6.votes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, survey_r6.id));
} }
class SurveyListAdministrationComponent {
    constructor(surveyService, categorySerivce) {
        this.surveyService = surveyService;
        this.categorySerivce = categorySerivce;
    }
    ngOnInit() {
        this.surveys$ = this.surveyService.getAllSurveys();
        this.filteredSurveys$ = this.surveys$;
        this.categoriesList$ = this.categorySerivce.getCategories();
    }
    delete(id) {
        this.surveyService.deleteSurvey(id).subscribe(sub => {
            console.log('Survey was deleted.');
        });
        this.surveys$ = this.surveys$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(surveys => surveys.filter(x => x.id != id)));
        this.filteredSurveys$ = this.surveys$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(surveys => surveys.filter(x => x.id != id)));
    }
    filterBy(categoryName) {
        this.checkedCategory = categoryName;
        this.filteredSurveys$ = this.surveys$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(surveys => surveys.filter(cat => cat.category == categoryName)));
    }
}
SurveyListAdministrationComponent.ɵfac = function SurveyListAdministrationComponent_Factory(t) { return new (t || SurveyListAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
SurveyListAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveyListAdministrationComponent, selectors: [["app-survey-list-administration"]], decls: 24, vars: 6, consts: [[2, "text-align", "center"], ["class", "col-md-10 offset-md-1", 4, "ngFor", "ngForOf"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-10", "offset-md-1"], ["type", "radio", 1, "form-check-input", 3, "checked", "id", "value", "change"], [1, "form-check-label", 3, "for"], ["scope", "row", 2, "width", "5%"], [2, "width", "40%"], [3, "routerLink"], [2, "width", "15%"], [2, "width", "25%"], [1, "link", 3, "click"], [1, "link", 3, "routerLink"]], template: function SurveyListAdministrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Survey \u0410dministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SurveyListAdministrationComponent_div_6_Template, 4, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Survey name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SurveyListAdministrationComponent_tr_22_Template, 16, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.categoriesList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 4, ctx.filteredSurveys$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vc3VydmV5LWxpc3QtYWRtaW5pc3RyYXRpb24vc3VydmV5LWxpc3QtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyListAdministrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-survey-list-administration',
                templateUrl: './survey-list-administration.component.html',
                styleUrls: ['./survey-list-administration.component.css']
            }]
    }], function () { return [{ type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }, { type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() { }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ "rCn7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide your username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must have at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
        });
    }
    login() {
        this.authService.
            login(this.form.value).subscribe(data => {
            this.authService.setToken(data['token']);
            this.authService.setRole(data['role']);
            if (this.authService.isAuthenticated()) {
                this.router.navigate([""]);
            }
        });
        this.form.reset();
        this.router.navigate(["auth/login"]);
    }
    get password() {
        return this.form.get('password');
    }
    get username() {
        return this.form.get('username');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 4, consts: [[1, "container"], [3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled", "click"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.touched && (ctx.username.errors == null ? null : ctx.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.required) && ctx.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["button[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "W9fp":
/*!***********************************!*\
  !*** ./src/app/classes/Option.ts ***!
  \***********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
class Option {
}


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ "rCn7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide your username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must have at least 6 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password must have at least 6 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You passwords are not matching. Please try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
        });
    }
    register() {
        this.authService.
            register(this.form.value).
            subscribe((data) => {
            this.router.navigate(['auth/login']);
        });
    }
    get password() {
        return this.form.get('password');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    get username() {
        return this.form.get('username');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 22, vars: 6, consts: [[1, "container"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled", "click"], [1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_20_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.touched && (ctx.username.errors == null ? null : ctx.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.required) && ctx.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.required) && ctx.confirmPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword.value !== ctx.password.value && (ctx.confirmPassword.touched && ctx.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["button[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "XveF":
/*!********************************************************************************!*\
  !*** ./src/app/components/list-surveys/list-surveys/list-surveys.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListSurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSurveysComponent", function() { return ListSurveysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a2) { return ["../", "survey", a2]; };
function ListSurveysComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Give your vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const survey_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survey_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, survey_r1.id));
} }
class ListSurveysComponent {
    constructor(route, surveyService, categorySerivce) {
        this.route = route;
        this.surveyService = surveyService;
        this.categorySerivce = categorySerivce;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.category = params['category'];
            this.surveys$ = this.surveyService.getSurveysByCategory(this.category);
            this.categorySerivce.getCategoryDescriptionByName(this.category).subscribe(data => {
                this.description = data['description'];
            });
        });
    }
}
ListSurveysComponent.ɵfac = function ListSurveysComponent_Factory(t) { return new (t || ListSurveysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
ListSurveysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListSurveysComponent, selectors: [["app-list-surveys"]], decls: 9, vars: 5, consts: [[1, "listing-title"], [1, "listing-description"], [1, "row"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", 2, "text-align", "center"], [1, "card", "text-white", "bg-info", "mb-3", "listing-surveys", 2, "width", "18rem", "height", "10rem"], [1, "card-header"], [1, "card-body"], [1, "card-title"], ["type", "button", 1, "btn", "btn-outline-success", 3, "routerLink"]], template: function ListSurveysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListSurveysComponent_div_7_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.surveys$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".listing-title[_ngcontent-%COMP%]{\n   margin-left: 70px; \n   margin-top: 40px;\n}\n\n.listing-surveys[_ngcontent-%COMP%]{\n   margin-left: 70px; \n   margin-top: 10px;\n}\n\n.listing-description[_ngcontent-%COMP%]{\n    margin-left: 70px; \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXN1cnZleXMvbGlzdC1zdXJ2ZXlzL2xpc3Qtc3VydmV5cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csaUJBQWlCO0dBQ2pCLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBR0E7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3Qtc3VydmV5cy9saXN0LXN1cnZleXMvbGlzdC1zdXJ2ZXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGluZy10aXRsZXtcbiAgIG1hcmdpbi1sZWZ0OiA3MHB4OyBcbiAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5saXN0aW5nLXN1cnZleXN7XG4gICBtYXJnaW4tbGVmdDogNzBweDsgXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5saXN0aW5nLWRlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyBcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSurveysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-surveys',
                templateUrl: './list-surveys.component.html',
                styleUrls: ['./list-surveys.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }, { type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "H0RP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pie-chart/pie-chart.component */ "t9y5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-survey/add-survey.component */ "ahj3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_view_chart_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/view-chart/view-chart/view-chart.component */ "vS/+");
/* harmony import */ var _components_edit_survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-survey/edit-survey/edit-survey.component */ "Ld5z");
/* harmony import */ var _components_list_surveys_list_surveys_list_surveys_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/list-surveys/list-surveys/list-surveys.component */ "XveF");
/* harmony import */ var _components_administration_category_list_administration_category_list_administration_category_list_administration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/administration/category-list-administration/category-list-administration/category-list-administration.component */ "e1VB");
/* harmony import */ var _components_edit_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-category/edit-category/edit-category.component */ "Mnaq");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interceptors/jwt-interceptor */ "3ndE");
/* harmony import */ var _interceptors_response_handling_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interceptors/response-handling-interceptor */ "QadT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _components_administration_survey_list_administration_survey_list_administration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/administration/survey-list-administration/survey-list-administration.component */ "QwKk");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_response_handling_interceptor__WEBPACK_IMPORTED_MODULE_20__["ResponseHandlingInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
        _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
        _components_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_9__["AddSurveyComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
        _components_view_chart_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_12__["ViewChartComponent"],
        _components_edit_survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_13__["EditSurveyComponent"],
        _components_list_surveys_list_surveys_list_surveys_component__WEBPACK_IMPORTED_MODULE_14__["ListSurveysComponent"],
        _components_administration_category_list_administration_category_list_administration_category_list_administration_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListAdministrationComponent"],
        _components_edit_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_16__["EditCategoryComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"],
        _components_administration_survey_list_administration_survey_list_administration_component__WEBPACK_IMPORTED_MODULE_23__["SurveyListAdministrationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
                    _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
                    _components_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_9__["AddSurveyComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                    _components_view_chart_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_12__["ViewChartComponent"],
                    _components_edit_survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_13__["EditSurveyComponent"],
                    _components_list_surveys_list_surveys_list_surveys_component__WEBPACK_IMPORTED_MODULE_14__["ListSurveysComponent"],
                    _components_administration_category_list_administration_category_list_administration_category_list_administration_component__WEBPACK_IMPORTED_MODULE_15__["CategoryListAdministrationComponent"],
                    _components_edit_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_16__["EditCategoryComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_22__["LandingComponent"],
                    _components_administration_survey_list_administration_survey_list_administration_component__WEBPACK_IMPORTED_MODULE_23__["SurveyListAdministrationComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_response_handling_interceptor__WEBPACK_IMPORTED_MODULE_20__["ResponseHandlingInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ahj3":
/*!***************************************************************!*\
  !*** ./src/app/components/add-survey/add-survey.component.ts ***!
  \***************************************************************/
/*! exports provided: AddSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSurveyComponent", function() { return AddSurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddSurveyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddSurveyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddSurveyComponent_div_14_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSurveyComponent_div_14_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const optionIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeOption(optionIndex_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddSurveyComponent_div_14_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is requred! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddSurveyComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddSurveyComponent_div_14_button_6_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddSurveyComponent_div_14_div_7_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionIndex_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", optionIndex_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionIndex_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", optionIndex_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.options.controls.length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.options.controls[optionIndex_r5].controls.option.errors == null ? null : ctx_r2.options.controls[optionIndex_r5].controls.option.errors.required) && ctx_r2.options.controls[optionIndex_r5].touched);
} }
function AddSurveyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cat_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", cat_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r11.name);
} }
class AddSurveyComponent {
    constructor(formBuilder, surveyService, categorySerivce, router) {
        this.formBuilder = formBuilder;
        this.surveyService = surveyService;
        this.categorySerivce = categorySerivce;
        this.router = router;
    }
    ngOnInit() {
        this.categoriesList$ = this.categorySerivce.getCategories();
        this.surveyForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
            ]),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            options: this.formBuilder.array([this.formBuilder.group({
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                }),
                this.formBuilder.group({
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                })]),
        });
    }
    get options() {
        return this.surveyForm.get('options');
    }
    get categories() {
        return this.categoriesList$;
    }
    get name() {
        return this.surveyForm.get('name');
    }
    addOption() {
        this.options.push(this.formBuilder.group({
            option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }));
    }
    save() {
        this.surveyService.postSurvey(this.surveyForm.value).
            subscribe((res) => {
            let id = res['id'];
            this.router.navigate(["survey", id]);
        }, (error) => { console.log(`error: ${error}`); });
    }
    removeOption(index) {
        this.options.removeAt(index);
    }
}
AddSurveyComponent.ɵfac = function AddSurveyComponent_Factory(t) { return new (t || AddSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AddSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSurveyComponent, selectors: [["app-add-survey"]], decls: 24, vars: 8, consts: [[2, "text-align", "center"], [1, "col-md-6", "offset-md-3", 2, "text-align", "center", 3, "formGroup", "submit"], [1, "form-group", "row"], ["id", "name", "formControlName", "name", "required", "", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["formArrayName", "options"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"], [3, "formGroupName"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "option", "required", "", 1, "form-control", 3, "id"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["formControlName", "categoryId", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"]], template: function AddSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddSurveyComponent_Template_form_submit_3_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Survey Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddSurveyComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddSurveyComponent_div_9_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddSurveyComponent_div_14_Template, 8, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSurveyComponent_Template_button_click_15_listener() { return ctx.addOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddSurveyComponent_div_19_Template, 4, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.surveyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.touched && (ctx.name.errors == null ? null : ctx.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.name.errors == null ? null : ctx.name.errors.minlength) && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 6, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.surveyForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["button[_ngcontent-%COMP%]:disabled{\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtc3VydmV5L2FkZC1zdXJ2ZXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN1cnZleS9hZGQtc3VydmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246ZGlzYWJsZWR7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-survey',
                templateUrl: './add-survey.component.html',
                styleUrls: ['./add-survey.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"] }, { type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "btyw":
/*!*******************************************************************!*\
  !*** ./src/app/resolvers/view-category/view-category.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: ViewCategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryResolver", function() { return ViewCategoryResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");



class ViewCategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    resolve(route, state) {
        return this.categoryService.getCategory(route.params['id']);
    }
}
ViewCategoryResolver.ɵfac = function ViewCategoryResolver_Factory(t) { return new (t || ViewCategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"])); };
ViewCategoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewCategoryResolver, factory: ViewCategoryResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCategoryResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "cDrq":
/*!***********************************************************!*\
  !*** ./src/app/services/survey-service/survey.service.ts ***!
  \***********************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SurveyService {
    constructor(http) {
        this.http = http;
        this.API = 'https://zhp-surveys.azurewebsites.net/api';
    }
    getSurvey(id) {
        var survey = this.http.get(`${this.API}/surveys/${id}`);
        return survey;
    }
    getAllSurveys() {
        return this.http.get(`${this.API}/surveys/all`);
    }
    postSurvey(survey) {
        let result = {
            name: survey.name,
            categoryId: survey.categoryId,
            options: []
        };
        survey.options.map(opt => {
            result.options.push(opt.option);
        });
        return this.http.post(`${this.API}/surveys`, result);
    }
    postVoteForSurvey(surveyId, optionId) {
        this.setInStorage(surveyId);
        let votingInfo = [surveyId, optionId];
        return this.http.post(`${this.API}/surveys/voting`, votingInfo);
    }
    setInStorage(surveyId) {
        localStorage.setItem(surveyId, surveyId);
    }
    alreadyVoted(surveyId) {
        return localStorage.getItem(surveyId) !== null;
    }
    deleteSurvey(id) {
        console.log(id);
        return this.http.delete(`${this.API}/surveys/${id}`);
    }
    deleteOptionFromSurvey(surveyId, optionId) {
        let votingInfo = [surveyId, optionId];
        return this.http.post(`${this.API}/surveys/delete-option`, votingInfo);
    }
    updateSurvey(survey) {
        return this.http.post(`${this.API}/surveys/update`, survey);
    }
    getSurveysByCategory(categoryName) {
        return this.http.get(`${this.API}/surveys/category/${categoryName}`);
    }
    getLastSurveysFromCategories() {
        return this.http.get(`${this.API}/surveys/last`);
    }
}
SurveyService.ɵfac = function SurveyService_Factory(t) { return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SurveyService, factory: SurveyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "e1VB":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/components/administration/category-list-administration/category-list-administration/category-list-administration.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CategoryListAdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListAdministrationComponent", function() { return CategoryListAdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a2) { return ["../../", "category", a2, "edit"]; };
function CategoryListAdministrationComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListAdministrationComponent_tr_18_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.delete(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.surveys.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, category_r1.id));
} }
class CategoryListAdministrationComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.categories$ = this.categoryService.getCategories();
    }
    delete(id) {
        this.categories$ = this.categories$.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(categories => categories.filter(x => x.id != id)));
        this.categoryService.deleteCategory(id).subscribe(() => {
            console.log(`Category was deleted.`);
        });
    }
}
CategoryListAdministrationComponent.ɵfac = function CategoryListAdministrationComponent_Factory(t) { return new (t || CategoryListAdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
CategoryListAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListAdministrationComponent, selectors: [["app-category-list-administration"]], decls: 20, vars: 3, consts: [[2, "text-align", "center"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "link", 3, "click"], [1, "link", 3, "routerLink"]], template: function CategoryListAdministrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories \u0410dministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Category name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CategoryListAdministrationComponent_tr_18_Template, 15, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 1, ctx.categories$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["button.link[_ngcontent-%COMP%] { background:none;border:none; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9jYXRlZ29yeS1saXN0LWFkbWluaXN0cmF0aW9uL2NhdGVnb3J5LWxpc3QtYWRtaW5pc3RyYXRpb24vY2F0ZWdvcnktbGlzdC1hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsZUFBZSxDQUFDLFdBQVcsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vY2F0ZWdvcnktbGlzdC1hZG1pbmlzdHJhdGlvbi9jYXRlZ29yeS1saXN0LWFkbWluaXN0cmF0aW9uL2NhdGVnb3J5LWxpc3QtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5saW5rIHsgYmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListAdministrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-list-administration',
                templateUrl: './category-list-administration.component.html',
                styleUrls: ['./category-list-administration.component.css']
            }]
    }], function () { return [{ type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category-service/category.service */ "qhOM");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ "rCn7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavBarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", category_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r5.name);
} }
function NavBarComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Administration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavBarComponent {
    constructor(categorySerivce, authService, router) {
        this.categorySerivce = categorySerivce;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.categorySerivce.getCategories().subscribe(cats => {
            this.categories = cats;
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate([""]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 23, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-white", "bg-dark", 2, "font-size", "20px"], ["href", "#", 1, "navbar-brand", 2, "font-size", "20px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLink", "survey/add", 1, "nav-link"], ["routerLink", "category/add", 1, "nav-link"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "navbar-nav"], ["class", "nav-item", "style", "float: right;", 4, "ngIf"], ["class", "nav-item", "style", " float: right;", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "orange"], ["routerLink", "/admin/categories", 1, "dropdown-item"], ["routerLink", "/admin/surveys", 1, "dropdown-item"], [1, "nav-item", 2, "float", "right"], ["routerLink", "auth/login", 1, "nav-link"], ["routerLink", "auth/register", 1, "nav-link"], [1, "nav-link", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavBarComponent_div_11_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavBarComponent_li_18_Template, 8, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_li_20_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavBarComponent_li_21_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavBarComponent_li_22_Template, 3, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: src_app_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }, { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "qhOM":
/*!***************************************************************!*\
  !*** ./src/app/services/category-service/category.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoryService {
    constructor(http) {
        this.http = http;
        this.API = 'https://zhp-surveys.azurewebsites.net/api';
    }
    getCategories() {
        return this.http.get(`${this.API}/categories`);
    }
    deleteCategory(id) {
        return this.http.delete(`${this.API}/categories/${id}`);
    }
    postCategory(category) {
        return this.http.post(`${this.API}/categories`, category);
    }
    getCategory(id) {
        return this.http.get(`${this.API}/categories/${id}`);
    }
    updateCategory(category) {
        return this.http.post(`${this.API}/categories/update`, category);
    }
    getCategoryDescriptionByName(name) {
        return this.http.get(`${this.API}/categories/description/${name}`);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rCn7":
/*!*******************************************************!*\
  !*** ./src/app/services/auth-service/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
        this.API = 'https://zhp-surveys.azurewebsites.net/api';
    }
    login(user) {
        return this.http.post(`${this.API}/users/login`, user);
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    setRole(role) {
        localStorage.setItem('role', role);
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
    register(user) {
        return this.http.post(`${this.API}/users/register`, user);
    }
    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    isAdmin() {
        if (localStorage.getItem('role') !== null) {
            return localStorage.getItem('role') === 'Admin';
        }
        ;
    }
    getJwt() {
        return localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t9y5":
/*!*************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");




class PieChartComponent {
    constructor() {
        this.chartOptions = {
            chart: {
                width: 500,
                type: "pie"
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
    updateSeries(votes) {
        this.chart.updateSeries(votes, true);
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-piechart"]], viewQuery: function PieChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { inputLabels: "inputLabels", inputVotes: "inputVotes" }, decls: 2, vars: 4, consts: [["id", "chart"], [3, "series", "chart", "labels", "responsive"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.inputVotes)("chart", ctx.chartOptions.chart)("labels", ctx.inputLabels)("responsive", ctx.chartOptions.responsive);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-piechart",
                templateUrl: "./pie-chart.component.html",
                styleUrls: ["./pie-chart.component.css"]
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]]
        }], inputLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputVotes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vS/+":
/*!**************************************************************************!*\
  !*** ./src/app/components/view-chart/view-chart/view-chart.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChartComponent", function() { return ViewChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pie-chart/pie-chart.component */ "t9y5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/survey-service/survey.service */ "cDrq");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ "rCn7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ViewChartComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewChartComponent_div_4_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const labelIndex_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.voteFor(labelIndex_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.toUpperCase());
} }
function ViewChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewChartComponent_div_4_div_1_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.labels);
} }
function ViewChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You already voted in this survey. Come back later, thank you!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewChartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your vote is for: ", ctx_r2.votedFor == null ? null : ctx_r2.votedFor.toUpperCase(), ". Thank you!");
} }
const _c0 = function () { return ["edit"]; };
function ViewChartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Administrative tools:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewChartComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteSurvey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class ViewChartComponent {
    constructor(route, surveyService, router, authService) {
        this.route = route;
        this.surveyService = surveyService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.survey = this.route.snapshot.data['survey'];
        this.votes = this.survey.options.map(x => x.votes);
        this.labels = this.survey.options.map(x => x.name);
        this.isVoted = false;
        this.survey.name = this.survey.name.endsWith('?') ? this.survey.name : this.survey.name + '?';
        this.alreadyVoted = this.surveyService.alreadyVoted(this.survey.id);
    }
    voteFor(index) {
        this.votes[index]++;
        this.votedFor = this.labels[index];
        this.isVoted = true;
        this.chart.updateSeries(this.votes);
        this.surveyService.postVoteForSurvey(this.survey.id, this.survey.options[index].id).subscribe(x => {
            console.log(`Your vote is for ${this.votedFor}`);
        });
    }
    deleteSurvey() {
        this.surveyService.deleteSurvey(this.survey.id).subscribe(survey => {
            console.log(survey);
        });
        this.router.navigate([""]);
    }
}
ViewChartComponent.ɵfac = function ViewChartComponent_Factory(t) { return new (t || ViewChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ViewChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewChartComponent, selectors: [["app-view-chart"]], viewQuery: function ViewChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 11, vars: 7, consts: [[1, "center"], ["class", "btn-group", 4, "ngIf"], [4, "ngIf"], [3, "inputVotes", "inputLabels"], ["pieChart", ""], [1, "btn-group"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 2, "margin-right", "20px", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 2, "margin-right", "30px", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "routerLink"]], template: function ViewChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewChartComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewChartComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewChartComponent_div_6_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-piechart", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewChartComponent_div_10_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.survey.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVoted && !ctx.alreadyVoted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyVoted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVoted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputVotes", ctx.votes)("inputLabels", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n    height: 200px;\n    position: relative;\n    border: 3px solid green;\n  }\n  \n  .center[_ngcontent-%COMP%] {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color:lightcoral; \n    border: 1px solid black; \n    color: white; \n    padding: 10px 24px; \n    cursor: pointer; \n    float: left; \n  }\n  \n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n    border-right: none; \n  }\n  \n  \n  \n  .btn-group[_ngcontent-%COMP%]:after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  \n  \n  .btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWNoYXJ0L3ZpZXctY2hhcnQvdmlldy1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBRVQsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQyxZQUFZLEVBQUUsZUFBZTtJQUM3QixrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsZUFBZSxFQUFFLHNCQUFzQjtJQUN2QyxXQUFXLEVBQUUsbUNBQW1DO0VBQ2xEOztFQUVBO0lBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0VBQ2pEOztFQUVBLGlDQUFpQzs7RUFDakM7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUEsb0NBQW9DOztFQUNwQztJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1jaGFydC92aWV3LWNoYXJ0L3ZpZXctY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAuYnRuLWdyb3VwIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGNvcmFsOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IC8qIEdyZWVuIGJvcmRlciAqL1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDsgLyogU29tZSBwYWRkaW5nICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyL2hhbmQgaWNvbiAqL1xuICAgIGZsb2F0OiBsZWZ0OyAvKiBGbG9hdCB0aGUgYnV0dG9ucyBzaWRlIGJ5IHNpZGUgKi9cbiAgfVxuICBcbiAgLmJ0bi1ncm91cCBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXG4gIH1cbiAgXG4gIC8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cbiAgLmJ0bi1ncm91cDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBcbiAgLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xuICAuYnRuLWdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-chart',
                templateUrl: './view-chart.component.html',
                styleUrls: ['./view-chart.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"]]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "H0RP");
/* harmony import */ var _components_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-survey/add-survey.component */ "ahj3");
/* harmony import */ var _components_administration_category_list_administration_category_list_administration_category_list_administration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/administration/category-list-administration/category-list-administration/category-list-administration.component */ "e1VB");
/* harmony import */ var _components_administration_survey_list_administration_survey_list_administration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/administration/survey-list-administration/survey-list-administration.component */ "QwKk");
/* harmony import */ var _components_edit_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-category/edit-category/edit-category.component */ "Mnaq");
/* harmony import */ var _components_edit_survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-survey/edit-survey/edit-survey.component */ "Ld5z");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _components_list_surveys_list_surveys_list_surveys_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-surveys/list-surveys/list-surveys.component */ "XveF");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_view_chart_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/view-chart/view-chart/view-chart.component */ "vS/+");
/* harmony import */ var _resolvers_view_category_view_category_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/view-category/view-category.resolver */ "btyw");
/* harmony import */ var _resolvers_view_survey_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/view-survey.resolver */ "0prs");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard */ "GQid");


















const routes = [
    {
        path: "",
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
    },
    {
        path: "category/add",
        component: _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"],
    },
    {
        path: "survey/add",
        component: _components_add_survey_add_survey_component__WEBPACK_IMPORTED_MODULE_3__["AddSurveyComponent"],
    },
    {
        path: "survey/:id",
        component: _components_view_chart_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_12__["ViewChartComponent"],
        resolve: { survey: _resolvers_view_survey_resolver__WEBPACK_IMPORTED_MODULE_14__["ViewSurveyResolver"] }
    },
    {
        path: "survey/:id/edit",
        component: _components_edit_survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_7__["EditSurveyComponent"],
        resolve: { survey: _resolvers_view_survey_resolver__WEBPACK_IMPORTED_MODULE_14__["ViewSurveyResolver"] }
    },
    {
        path: ":category",
        component: _components_list_surveys_list_surveys_list_surveys_component__WEBPACK_IMPORTED_MODULE_9__["ListSurveysComponent"],
    },
    {
        path: "category/:id/edit",
        component: _components_edit_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__["EditCategoryComponent"],
        resolve: { category: _resolvers_view_category_view_category_resolver__WEBPACK_IMPORTED_MODULE_13__["ViewCategoryResolver"] }
    },
    {
        path: "admin/categories",
        component: _components_administration_category_list_administration_category_list_administration_category_list_administration_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListAdministrationComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    },
    {
        path: "admin/surveys",
        component: _components_administration_survey_list_administration_survey_list_administration_component__WEBPACK_IMPORTED_MODULE_5__["SurveyListAdministrationComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]]
    },
    {
        path: "auth/login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
    },
    {
        path: "auth/register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map