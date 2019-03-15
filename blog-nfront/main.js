(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #04192e;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 26px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"container\">\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <a style=\"color:white;\">First application</a>\n      </div>\n    </div>\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n            aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n\n          </button>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <li><a [routerLink]=\"['/about']\"> About</a></li>\n            <li><a [routerLink]=\"['/create']\"> Post a Blog</a></li>\n          </ul>\n        </div>\n\n\n\n      </div>\n    </nav>\n  </div>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-edit/blog-edit.component */ "./src/app/blog-edit/blog-edit.component.ts");
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-view/blog-view.component */ "./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_7__["BlogEditComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_8__["BlogViewComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
                    { path: 'blog/:blogId', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_8__["BlogViewComponent"] },
                    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"] },
                    { path: 'edit/:blogId', component: _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_7__["BlogEditComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_10__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" *ngIf=\"currentBlog\">\n  <h3> Edit This Blog</h3>\n  <div class=\"row\" style=\"text-align: left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"editThisBlog()\">\n          <div class=\"form-group\">\n              <label>Blog Title</label>\n              <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" class=\"form-control\" placeholder =\"enter the title\" required>\n            </div>\n             <div [hidden]=\"title.valid || title.pristine\" class =\"alert alert-danger\">\n              Blog Title is required\n            </div>\n      \n            <div class=\"form-group\">\n                <label>Description</label>\n                <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description =\"ngModel\"  class=\"form-control\" required>\n              </div>\n      \n              <div class=\"form-group\">\n                  <label>Enter the blog body</label>\n                  <textarea type=\"text\" name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label>Category</label>\n                    <select [(ngModel)]=\"currentBlog.category\" #category1=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                      <option *ngFor=\"let category1 of possibleCategories\" [value]=\"category1\">{{category1}}</option>\n                    </select>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Edit the Blog</button>\n      \n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BlogEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditComponent", function() { return BlogEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(_route, router, blogService) {
        this._route = _route;
        this.router = router;
        this.blogService = blogService;
        this.possibleCategories = ["comedy", "drama", "Action", "technology"];
        console.log("constructor is called");
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngoninit is called");
        // getting blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        // this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
        this.blogService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data['data'];
            console.log(_this.currentBlog.category);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BlogEditComponent.prototype.editThisBlog = function () {
        var _this = this;
        this.blogService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(function (data) {
            console.log(data);
            console.log('edited successfully');
            setTimeout(function () {
                _this.router.navigate(['/blog', _this.currentBlog.blogId]);
            }, 1000);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    BlogEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__(/*! ./blog-edit.component.html */ "./src/app/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__(/*! ./blog-edit.component.css */ "./src/app/blog-edit/blog-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-12\">\n      <h2>{{currentBlog.title}}</h2>\n      <p>posted by {{currentBlog.author}} on {{currentBlog.created | date}} </p>\n      <p *ngIf=\"currentBlog.tags.length!=undefined && currentBlog.tags.length>0\"> tags: <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last ? '': ','}}</span></p>\n        <hr>\n        <div [innerHtml]=\"currentBlog.bodyHtml\"></div>\n        <hr>\n        <h5>category - {{currentBlog.category}}</h5>\n  \n    </div>\n  </div>\n  <br>\n  \n  <div class=\"row\" *ngIf =\"currentBlog\">\n    <div class=\"col-md-4\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/edit',currentBlog.blogId]\">Edit</a>\n    </div>\n    <div class=\"col-md-4\">\n        <a class=\"btn btn-danger\" (click)=\"deleteThisBlog()\">Delete</a>\n      </div>\n      <div class=\"col-md-4\">\n          <a class=\"btn btn-warning\" (click)=\"goBackTopreviousPage()\">Back</a>\n        </div>\n  \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.ts ***!
  \**************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(_route, router, blogService, location) {
        this._route = _route;
        this.router = router;
        this.blogService = blogService;
        this.location = location;
        console.log("constructor is called");
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngoninit is called");
        // getting blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        // this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
        this.blogService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BlogViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        this.blogService.deleteBlog(this.currentBlog.blogId).subscribe(function (data) {
            console.log("data");
            alert("deleted successfully");
            setTimeout(function () {
                _this.router.navigate(['/home']);
            });
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BlogViewComponent.prototype.goBackTopreviousPage = function () {
        this.location.back();
    };
    BlogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/blog-view/blog-view.component.html"),
            styles: [__webpack_require__(/*! ./blog-view.component.css */ "./src/app/blog-view/blog-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// importing http client to make requests

var BlogService = /** @class */ (function () {
    function BlogService(_http) {
        this._http = _http;
        this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
        // tslint:disable-next-line:max-line-length
        this.token = 'YTE1OWE4ZTFiNjA5NWZhOTFmNjQ3YmE5OTgxN2ZjMjBjYWE0OTViZjA0MjU1NDNiMDcyYmU2MjYwNThkOTBiNmJkZWU4NjcyYmFkNjNiNzllODYxYjA4YjQ5NTE4MmY2NjQ5YTFhNDIwNjJiYWYwYTQzNGE5NTBjMzFhOWVkOWI0YQ';
        console.log('blog-http is called');
    }
    /*private handleerror(err: HttpErrorResponse){
      confirm.log("handle error http calls")
      console.log(err.message);
      return Observable.throw(err.message);
    }*/
    BlogService.prototype.getAllBlogs = function () {
        // tslint:disable-next-line:max-line-length
        var myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.token);
        console.log(myResponse);
        return myResponse;
    };
    BlogService.prototype.getSingleBlogInformation = function (currentBlogId) {
        // using for of loop from type script
        var myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.token);
        return myResponse;
    };
    BlogService.prototype.createBlog = function (blogData) {
        // using for of loop from type script
        var myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.token, blogData);
        return myResponse;
    };
    BlogService.prototype.deleteBlog = function (blogId) {
        // using for of loop from type script
        var data = {};
        var myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.token, data);
        return myResponse;
    };
    BlogService.prototype.editBlog = function (blogId, blogData) {
        // using for of loop from type script
        var myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.token, blogData);
        return myResponse;
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], ng-valid.required{\r\n    border-left: 5px solid green;\r\n}\r\n.ng-invalid:not(form){\r\n    border-left: 5px solid red;\r\n}"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"text-align: left\">\n  <div class=\"col-md-12\">\n    <form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n\n      <div class=\"form-group\">\n        <label>Blog Title</label>\n        <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" class=\"form-control\" placeholder =\"enter the title\" required>\n      </div>\n       <div [hidden]=\"title.valid || title.pristine\" class =\"alert alert-danger\">\n        Blog Title is required\n      </div>\n\n      <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description =\"ngModel\"  class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Enter the blog body</label>\n            <textarea type=\"text\" name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyhtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n          </div>\n          <div class=\"form-group\">\n              <label>Category</label>\n              <select [(ngModel)]=\"blogCategory\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n              </select>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Post Blog</button>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </form>\n  </div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function CreateComponent(blogService, _route, router) {
        this.blogService = blogService;
        this._route = _route;
        this.router = router;
        this.possibleCategories = ['comedy', "drama", "Action", "technology"];
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createBlog = function () {
        var _this = this;
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyhtml,
            category: this.blogCategory
        };
        console.log(blogData);
        this.blogService.createBlog(blogData).subscribe(function (data) {
            console.log("Blog created");
            console.log(data);
            alert("posted blog successfully");
            setTimeout(function () {
                _this.router.navigate(['/blog', data.data.blogId]);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            alert("some error occured");
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">All Blogs</div>\n    <br><br><br><br>\n</div>\n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBlogs.length>0\">\n      <div *ngFor=\"let blog of allBlogs\" class=\"col-md-4\">\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color:yellowgreen\">{{ blog.title | uppercase }}</div>\n          <div class=\"panel-body\"><p>{{ blog.description }}</p></div>\n          <div class=\"panel-footer\">Posted on {{ blog.created | date }}  <br/> by {{ blog.author }}\n          <br/><br/> <a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">view</a>\n          </div>\n        </div>\n     <br/>\n    </div>\n  \n  \n  \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogService) {
        this.blogService = blogService;
        console.log('h constructor is called');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(' h init is called');
        this.allBlogs = this.blogService.getAllBlogs().subscribe(function (data) {
            console.log('logging data');
            console.log(data);
            _this.allBlogs = data['data'];
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
        console.log(this.allBlogs);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pradeep V M\Documents\Practice sessions\Angular 4\blog-nfront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map