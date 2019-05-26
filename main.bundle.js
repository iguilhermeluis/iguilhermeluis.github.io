webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        //route: ActivatedRouteSnapshot, state: RouterStateSnapshot         state.url
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: "123" } });
        return false;
    };
    AuthGuardService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/authguard.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialService = (function () {
    function MaterialService(http) {
        this.http = http;
        this.url = "https://ezentis.herokuapp.com";
    }
    MaterialService.prototype.cadastrar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/materias";
        var data = JSON.stringify(objeto);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    MaterialService.prototype.editar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/materias";
        var data = JSON.stringify(objeto);
        console.table(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.put(url, data, { headers: headers }).toPromise();
    };
    MaterialService.prototype.listar = function () {
        var url = this.url + "/api/materias";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    MaterialService.prototype.buscarPorId = function (id) {
        var url = this.url + "/api/materias/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    MaterialService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MaterialService);
    return MaterialService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/material.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OsService = (function () {
    function OsService(http) {
        this.http = http;
        this.url = "https://ezentis.herokuapp.com";
    }
    OsService.prototype.cadastrar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/os";
        var data = JSON.stringify(objeto);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    OsService.prototype.editar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/os";
        var data = JSON.stringify(objeto);
        console.table(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.put(url, data, { headers: headers }).toPromise();
    };
    OsService.prototype.listar = function () {
        var url = this.url + "/api/os";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    OsService.prototype.buscarPorId = function (id) {
        var url = this.url + "/api/os/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    OsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], OsService);
    return OsService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/os.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collaborators_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCollaboratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCollaboratorComponent = (function () {
    function AddCollaboratorComponent(collaboratorsService, titleService) {
        this.collaboratorsService = collaboratorsService;
        this.titleService = titleService;
        this.collaborator = {
            matricula: "",
            nome: "",
            sobrenome: "",
            telefone: "",
            senha: "",
            status: "1",
            permissoes: [] };
        this.options = [
            { nome: 'criar', id: 1, checked: false },
            { nome: 'editar', id: 2, checked: false },
            { nome: 'excluir', id: 3, checked: false },
            { nome: 'consultar', id: 4, checked: false },
        ];
    }
    AddCollaboratorComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Cadastrar colaborador");
    };
    AddCollaboratorComponent.prototype.cadastrarColaborador = function () {
        var _this = this;
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Cadastrando...";
        this.collaborator.permissoes = this.selectedOptions();
        console.log(this.collaborator);
        this.collaboratorsService.cadastrar(this.collaborator).then(function (response) {
            console.log(response.json());
            elm.textContent = "CADASTRADO!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
            _this.lastCollaborator = _this.collaborator;
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            console.log("error->", response);
        });
    };
    AddCollaboratorComponent.prototype.criarObjetoCollaborador = function () {
        this.collaborator = {
            "matricula": "",
            "nome": "",
            "sobrenome": "",
            "telefone": "",
            "senha": "",
            "status": "",
            "permissoes": [] };
    };
    AddCollaboratorComponent.prototype.salvar = function () {
        console.log(this.collaborator);
        console.log(this.selectedOptions());
    };
    AddCollaboratorComponent.prototype.selectedOptions = function () {
        return this.options
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt; });
        //.map(opt => opt.value)
    };
    AddCollaboratorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-add-collaborator',
            template: __webpack_require__(735),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__collaborators_service__["a" /* CollaboratorsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__collaborators_service__["a" /* CollaboratorsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object])
    ], AddCollaboratorComponent);
    return AddCollaboratorComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/add-collaborator.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaboratorsComponent = (function () {
    function CollaboratorsComponent() {
    }
    CollaboratorsComponent.prototype.ngOnInit = function () {
    };
    CollaboratorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-collaborators',
            template: __webpack_require__(736),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], CollaboratorsComponent);
    return CollaboratorsComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/collaborators.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collaborators_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCollaboratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCollaboratorComponent = (function () {
    function EditCollaboratorComponent(activatedRoute, titleService, collaboratorsService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.collaboratorsService = collaboratorsService;
        this.isValido = false;
        this.isLoading = true;
        this.isSemConexao = false;
        this.collaborator = {
            matricula: "Carregando...",
            nome: "Carregando...",
            sobrenome: "Carregando...",
            telefone: "Carregando...",
            senha: "Carregando...",
            status: "Carregando...",
            permissoes: [] };
        this.options = [
            { nome: 'Criar', id: '1', checked: false },
            { nome: 'Editar', id: '2', checked: false },
            { nome: 'Deletar', id: '3', checked: false },
            { nome: 'Consultar', id: '4', checked: false },
        ];
        this.titleService.setTitle("Carregando colaborador...");
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    EditCollaboratorComponent.prototype.ngOnInit = function () {
        this.consultarColaborador(this.id);
    };
    EditCollaboratorComponent.prototype.selectedOptions = function () {
        return this.options
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt; });
        //.map(opt => opt.value)
    };
    EditCollaboratorComponent.prototype.consultarColaborador = function (id) {
        var _this = this;
        var elm = document.querySelector("#retornoTxt");
        elm.textContent = "Carregando os colaboradores...";
        var btnAction = document.querySelector("#btnAction");
        btnAction.textContent = "Carregando...";
        this.collaboratorsService.buscarPorId(id)
            .then(function (response) {
            _this.collaborator = response.json();
            console.log(response.json());
            if (_this.collaborator.length == 0) {
                _this.isValido = false;
                elm.textContent = "Colaborador inválido.";
                _this.titleService.setTitle("Colaborador inválido.");
                btnAction.textContent = "Colaborador inválido";
                btnAction.style.background = "#d63031";
            }
            else {
                if (_this.collaborator.id != null) {
                    elm.textContent = "Editando " + _this.collaborator.nome;
                    _this.titleService.setTitle("Editando " + _this.collaborator.nome);
                    btnAction.textContent = "Editar colaborador";
                    _this.checarMarcados();
                }
                else {
                    _this.isValido = false;
                    elm.textContent = "Colaborador inválido.";
                    _this.titleService.setTitle("Colaborador inválido.");
                    btnAction.textContent = "Colaborador inválido";
                    btnAction.style.background = "#d63031";
                }
            }
            _this.isLoading = false;
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "Sem conexão!";
            elm.textContent = "Você está offline";
            _this.titleService.setTitle("Você está offline");
            _this.isSemConexao = true;
            _this.isLoading = false;
        });
    };
    EditCollaboratorComponent.prototype.editarColaborador = function () {
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Editando...";
        elm.style.background = "#d63031";
        this.collaborator.permissoes = this.selectedOptions();
        console.table(this.collaborator);
        this.collaboratorsService.editar(this.collaborator).then(function (response) {
            console.log(response.json());
            elm.textContent = "EDITADO!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
            elm.style.cursor = "not-allowed";
            elm.title = "Já editado os dados!";
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            elm.textContent = "TENTAR NOVAMENTE";
            console.log("error->", response);
        });
    };
    EditCollaboratorComponent.prototype.checarMarcados = function () {
        for (var index = 0; index < this.options.length; index++) {
            var permissoesIntefaces = this.options[index];
            console.log("A " + permissoesIntefaces.nome);
            for (var index_1 = 0; index_1 < this.collaborator.permissoes.length; index_1++) {
                var permissoesBanco = this.collaborator.permissoes[index_1];
                if (permissoesIntefaces.id == permissoesBanco.id) {
                    permissoesIntefaces.checked = true;
                    console.log("b " + permissoesIntefaces.nome);
                }
            }
        }
    };
    EditCollaboratorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit-collaborator',
            template: __webpack_require__(737),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__collaborators_service__["a" /* CollaboratorsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__collaborators_service__["a" /* CollaboratorsService */]) === 'function' && _c) || Object])
    ], EditCollaboratorComponent);
    return EditCollaboratorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/edit-collaborator.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collaborators_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_utils_pagemodify_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListColllaboratorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListColllaboratorsComponent = (function () {
    function ListColllaboratorsComponent(collaboratorsService, titleService, pagemodifyService) {
        this.collaboratorsService = collaboratorsService;
        this.titleService = titleService;
        this.pagemodifyService = pagemodifyService;
        this.isSemMotorista = false;
        this.isSemConexao = false;
        this.qtCollaboradores = 0;
        this.collaboratorInModal = false;
        this.searchQuery = '';
    }
    ListColllaboratorsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Listagem colaboradores");
        this.consultarColaboradores();
        this.initializeItems();
    };
    ListColllaboratorsComponent.prototype.ionViewDidLoad = function () {
    };
    ListColllaboratorsComponent.prototype.initializeItems = function () {
        this.items = this.collaborators;
    };
    ListColllaboratorsComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        //const val = this.searchQuery;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                var stringItems = JSON.stringify(item).toLowerCase();
                console.log(stringItems);
                if (stringItems.indexOf(val.toLowerCase()) > -1) {
                    return item;
                }
            });
        }
    };
    ListColllaboratorsComponent.prototype.consultarColaboradores = function () {
        var _this = this;
        var elm = document.querySelector("#qtRegisterTable");
        elm.textContent = "Carregando os colaboradores...";
        this.collaboratorsService.listar()
            .then(function (response) {
            _this.collaborators = response.json();
            _this.items = response.json();
            console.table(_this.items);
            console.log(_this.collaborators.length);
            if (_this.collaborators.length == 0) {
                _this.isSemMotorista = true;
            }
            elm.textContent = _this.collaborators.length + " colaboradores na tabela";
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "0 colaboradores na tabela";
            _this.isSemConexao = true;
        });
    };
    ListColllaboratorsComponent.prototype.editarView = function (id) {
        //  this.pagemodifyService.setPage("/edit/"+id);
    };
    ListColllaboratorsComponent.prototype.detalhar = function (item) {
        this.collaboratorInModal = item;
        this.titleService.setTitle("Detalhando " + item.nome);
    };
    ListColllaboratorsComponent.prototype.fecharDetalhar = function () {
        this.titleService.setTitle("Listagem colaboradores");
        this.collaboratorInModal = false;
    };
    ListColllaboratorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-list-colllaborators',
            template: __webpack_require__(738),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__collaborators_service__["a" /* CollaboratorsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__collaborators_service__["a" /* CollaboratorsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_utils_pagemodify_service__["a" /* PagemodifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_utils_pagemodify_service__["a" /* PagemodifyService */]) === 'function' && _c) || Object])
    ], ListColllaboratorsComponent);
    return ListColllaboratorsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/list-colllaborators.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMaterialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMaterialsComponent = (function () {
    function AddMaterialsComponent(materialService, titleService) {
        this.materialService = materialService;
        this.titleService = titleService;
        this.material = {
            nome: "",
            tipo: "",
            descricao: ""
        };
    }
    AddMaterialsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Cadastrar material");
    };
    AddMaterialsComponent.prototype.cadastrar = function () {
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Cadastrando...";
        console.log(this.material);
        this.materialService.cadastrar(this.material).then(function (response) {
            console.log(response.json());
            elm.textContent = "CADASTRADO!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            console.log("error->", response);
        });
    };
    AddMaterialsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-add-materials',
            template: __webpack_require__(740),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object])
    ], AddMaterialsComponent);
    return AddMaterialsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/add-materials.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMaterialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMaterialsComponent = (function () {
    function EditMaterialsComponent(activatedRoute, titleService, materialService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.materialService = materialService;
        this.isValido = false;
        this.isLoading = true;
        this.isSemConexao = false;
        this.material = {
            id: "",
            nome: "Carregando...",
            tipo: "Carregando...",
            descricao: "Carregando...",
        };
        this.titleService.setTitle("Carregando material...");
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.material.id = _this.id;
        });
    }
    EditMaterialsComponent.prototype.ngOnInit = function () {
        this.consultarID(this.id);
    };
    EditMaterialsComponent.prototype.consultarID = function (id) {
        var _this = this;
        var elm = document.querySelector("#retornoTxt");
        elm.textContent = "Carregando os material...";
        var btnAction = document.querySelector("#btnAction");
        btnAction.textContent = "Carregando...";
        this.materialService.buscarPorId(id)
            .then(function (response) {
            _this.material = response.json();
            console.log(response.json());
            if (_this.material.length == 0) {
                _this.isValido = false;
                elm.textContent = "Material inválido.";
                _this.titleService.setTitle("Material inválido.");
                btnAction.textContent = "Material inválido";
                btnAction.style.background = "#d63031";
            }
            else {
                if (_this.material.id != null) {
                    elm.textContent = "Editando " + _this.material.nome;
                    _this.titleService.setTitle("Editando " + _this.material.nome);
                    btnAction.textContent = "Editar material";
                }
                else {
                    _this.isValido = false;
                    elm.textContent = "Dados inválidos.";
                    _this.titleService.setTitle("Dados inválidos.");
                    btnAction.textContent = "Dados inválidos";
                    btnAction.style.background = "#d63031";
                }
            }
            _this.isLoading = false;
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "Sem conexão!";
            elm.textContent = "Você está offline";
            _this.titleService.setTitle("Você está offline");
            _this.isSemConexao = true;
            _this.isLoading = false;
        });
    };
    EditMaterialsComponent.prototype.editar = function () {
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Editando...";
        elm.style.background = "#d63031";
        console.table(this.material);
        this.materialService.editar(this.material).then(function (response) {
            console.log(response.json());
            elm.textContent = "EDITADO!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
            elm.style.cursor = "not-allowed";
            elm.title = "Já editado os dados!";
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            elm.textContent = "TENTAR NOVAMENTE";
            console.log("error->", response);
        });
    };
    EditMaterialsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit-materials',
            template: __webpack_require__(741),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */]) === 'function' && _c) || Object])
    ], EditMaterialsComponent);
    return EditMaterialsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/edit-materials.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMaterialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListMaterialsComponent = (function () {
    function ListMaterialsComponent(titleService, materialService) {
        this.titleService = titleService;
        this.materialService = materialService;
        this.isSemMotorista = false;
        this.isSemConexao = false;
        this.qtCollaboradores = 0;
        this.objetoInModal = false;
        this.searchQuery = '';
    }
    ListMaterialsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Listagem materiais");
        this.consultarTodos();
        this.initializeItems();
    };
    ListMaterialsComponent.prototype.ionViewDidLoad = function () {
    };
    ListMaterialsComponent.prototype.initializeItems = function () {
        this.items = this.collaborators;
    };
    ListMaterialsComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        //const val = this.searchQuery;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                var stringItems = JSON.stringify(item).toLowerCase();
                console.log(stringItems);
                if (stringItems.indexOf(val.toLowerCase()) > -1) {
                    return item;
                }
            });
        }
    };
    ListMaterialsComponent.prototype.consultarTodos = function () {
        var _this = this;
        var elm = document.querySelector("#qtRegisterTable");
        elm.textContent = "Carregando os registros...";
        this.materialService.listar()
            .then(function (response) {
            _this.collaborators = response.json();
            _this.items = response.json();
            console.table(_this.items);
            console.log(_this.collaborators.length);
            if (_this.collaborators.length == 0) {
                _this.isSemMotorista = true;
            }
            elm.textContent = _this.collaborators.length + " registros na tabela";
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "0 registros na tabela";
            _this.isSemConexao = true;
        });
    };
    ListMaterialsComponent.prototype.editarView = function (id) {
        //  this.pagemodifyService.setPage("/edit/"+id);
    };
    ListMaterialsComponent.prototype.detalhar = function (item) {
        this.objetoInModal = item;
        this.titleService.setTitle("Detalhando " + item.nome);
    };
    ListMaterialsComponent.prototype.fecharDetalhar = function () {
        this.titleService.setTitle("Listagem materiais");
        this.objetoInModal = false;
    };
    ListMaterialsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-list-materials',
            template: __webpack_require__(742),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__material_service__["a" /* MaterialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__material_service__["a" /* MaterialService */]) === 'function' && _b) || Object])
    ], ListMaterialsComponent);
    return ListMaterialsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/list-materials.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialComponent = (function () {
    function MaterialComponent() {
    }
    MaterialComponent.prototype.ngOnInit = function () {
    };
    MaterialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-material',
            template: __webpack_require__(743),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialComponent);
    return MaterialComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/material.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__os_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_dashboard_projects_projects_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_dashboard_collaborators_collaborators_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOsComponent = (function () {
    function AddOsComponent(projectsService, titleService, collaboratorsService, osService) {
        this.projectsService = projectsService;
        this.titleService = titleService;
        this.collaboratorsService = collaboratorsService;
        this.osService = osService;
        this.isSemConexao = false;
        this.CurrentTime = new Date();
        this.os = {
            id: 1,
            descricao: "",
            local: "",
            dataInicio: this.CurrentTime,
            dataFim: this.CurrentTime,
            status: "1",
            projeto: {
                id: 1
            },
            colaborador: {
                id: 2
            }
        };
    }
    AddOsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Nova Ordem de serviços");
        this.listarProjetos();
        this.listarColaboradores();
    };
    AddOsComponent.prototype.listarProjetos = function () {
        var _this = this;
        var elm = document.querySelector("#txtRetorno");
        elm.textContent = "Carregando informações...";
        this.projectsService.listar()
            .then(function (response) {
            _this.projects = response.json();
            console.log(_this.projects.length);
            if (_this.projects.length == 0) {
            }
            elm.textContent = "Preencha os campos abaixo";
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "Sem conexão, atualize a página.";
            _this.isSemConexao = true;
        });
    };
    AddOsComponent.prototype.listarColaboradores = function () {
        var _this = this;
        this.collaboratorsService.listar()
            .then(function (response) {
            _this.collaborators = response.json();
            if (_this.collaborators.length == 0) {
            }
        })
            .catch(function (response) {
            console.error("error->", response);
            _this.isSemConexao = true;
        });
    };
    AddOsComponent.prototype.exibirProjetoSelecionado = function () {
        this.os.projeto.id = this.projectSelected.id;
        this.os.colaborador.id = this.collaboratorSelected.id;
        console.table(this.os);
    };
    AddOsComponent.prototype.cadastrar = function () {
        this.os.projeto.id = this.projectSelected.id;
        this.os.colaborador.id = this.collaboratorSelected.id;
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Cadastrando...";
        console.log(this.os);
        this.osService.cadastrar(this.os).then(function (response) {
            console.log(response.json());
            elm.textContent = "CADASTRADO!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            console.log("error->", response);
        });
    };
    AddOsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-add-os',
            template: __webpack_require__(744),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_dashboard_projects_projects_service__["a" /* ProjectsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_dashboard_projects_projects_service__["a" /* ProjectsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_dashboard_collaborators_collaborators_service__["a" /* CollaboratorsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_dashboard_collaborators_collaborators_service__["a" /* CollaboratorsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__os_service__["a" /* OsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__os_service__["a" /* OsService */]) === 'function' && _d) || Object])
    ], AddOsComponent);
    return AddOsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/add-os.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_dashboard_projects_projects_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_dashboard_collaborators_collaborators_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__os_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditOsComponent = (function () {
    function EditOsComponent(activatedRoute, projectsService, titleService, collaboratorsService, osService) {
        this.activatedRoute = activatedRoute;
        this.projectsService = projectsService;
        this.titleService = titleService;
        this.collaboratorsService = collaboratorsService;
        this.osService = osService;
        this.CurrentTime = new Date();
        this.isSemConexao = false;
        this.isValido = true;
        this.isLoading = true;
        this.os = {
            id: 1,
            descricao: "",
            local: "",
            dataInicio: this.CurrentTime,
            dataFim: this.CurrentTime,
            status: "1",
            projeto: {
                id: 1
            },
            colaborador: {
                id: 2
            }
        };
    }
    EditOsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Editar Ordem de serviços");
        this.listarProjetos();
        this.listarColaboradores();
        this.activatedRoute.params.subscribe(function (params) {
            _this.os.id = params['id'];
            _this.consultarID(_this.os.id);
        });
    };
    EditOsComponent.prototype.consultarID = function (id) {
        var _this = this;
        var elm = document.querySelector("#retornoTxt");
        elm.textContent = "Carregando os material...";
        var btnAction = document.querySelector("#btnAction");
        btnAction.textContent = "Carregando...";
        this.osService.buscarPorId(id)
            .then(function (response) {
            _this.os = response.json();
            console.log(response.json());
            if (_this.os.length == 0) {
                _this.isValido = false;
                elm.textContent = "OS inválida.";
                _this.titleService.setTitle("OS inválida.");
                btnAction.textContent = "OS inválida.";
                btnAction.style.background = "#d63031";
            }
            else {
                if (_this.os.id != null) {
                    _this.projectSelected = _this.os.projeto;
                    _this.collaboratorSelected = _this.os.colaborador;
                    elm.textContent = "Editando OS: " + _this.os.id;
                    _this.titleService.setTitle("Editando OS: " + _this.os.id);
                    btnAction.textContent = "Editar OS";
                }
                else {
                    _this.isValido = false;
                    elm.textContent = "Dados inválidos.";
                    _this.titleService.setTitle("Dados inválidos.");
                    btnAction.textContent = "Dados inválidos";
                    btnAction.style.background = "#d63031";
                }
            }
            _this.isLoading = false;
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "Sem conexão!";
            elm.textContent = "Você está offline";
            _this.titleService.setTitle("Você está offline");
            _this.isSemConexao = true;
            _this.isLoading = false;
        });
    };
    EditOsComponent.prototype.listarProjetos = function () {
        var _this = this;
        this.projectsService.listar()
            .then(function (response) {
            _this.projects = response.json();
            console.log(_this.projects.length);
            if (_this.projects.length == 0) {
            }
        })
            .catch(function (response) {
            console.error("error->", response);
            _this.isSemConexao = true;
        });
    };
    EditOsComponent.prototype.listarColaboradores = function () {
        var _this = this;
        this.collaboratorsService.listar()
            .then(function (response) {
            _this.collaborators = response.json();
            if (_this.collaborators.length == 0) {
            }
        })
            .catch(function (response) {
            console.error("error->", response);
            _this.isSemConexao = true;
        });
    };
    EditOsComponent.prototype.exibirProjetoSelecionado = function () {
        this.os.projeto.id = this.projectSelected.id;
        this.os.colaborador.id = this.collaboratorSelected.id;
        console.table(this.os);
    };
    EditOsComponent.prototype.editar = function () {
        this.os.projeto.id = this.projectSelected.id;
        this.os.colaborador.id = this.collaboratorSelected.id;
        var elm = document.querySelector("#btnAction");
        elm.textContent = "Editando...";
        console.log(this.os);
        this.osService.editar(this.os).then(function (response) {
            console.log(response.json());
            elm.textContent = "EDITADO!!";
            elm.style.background = "#000000";
            elm.style.color = "#FFFFFF";
        }).catch(function (response) {
            if (response.status == 403 || response.status == "403") {
            }
            console.log("error->", response);
        });
    };
    EditOsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit-os',
            template: __webpack_require__(745),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_dashboard_projects_projects_service__["a" /* ProjectsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_dashboard_projects_projects_service__["a" /* ProjectsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_dashboard_collaborators_collaborators_service__["a" /* CollaboratorsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_dashboard_collaborators_collaborators_service__["a" /* CollaboratorsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__os_service__["a" /* OsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__os_service__["a" /* OsService */]) === 'function' && _e) || Object])
    ], EditOsComponent);
    return EditOsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/edit-os.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__os_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListOsComponent = (function () {
    function ListOsComponent(titleService, osService) {
        this.titleService = titleService;
        this.osService = osService;
        this.isSemMotorista = false;
        this.isSemConexao = false;
        this.qtCollaboradores = 0;
        this.objetoInModal = false;
        this.searchQuery = '';
    }
    ListOsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Listagem de ordens de serviço.");
        this.consultarTodos();
        this.initializeItems();
    };
    ListOsComponent.prototype.ionViewDidLoad = function () {
    };
    ListOsComponent.prototype.initializeItems = function () {
        this.items = this.collaborators;
    };
    ListOsComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        //const val = this.searchQuery;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                var stringItems = JSON.stringify(item).toLowerCase();
                console.log(stringItems);
                if (stringItems.indexOf(val.toLowerCase()) > -1) {
                    return item;
                }
            });
        }
    };
    ListOsComponent.prototype.consultarTodos = function () {
        var _this = this;
        var elm = document.querySelector("#qtRegisterTable");
        elm.textContent = "Carregando os registros...";
        this.osService.listar()
            .then(function (response) {
            _this.collaborators = response.json();
            _this.items = response.json();
            console.table(_this.items);
            console.log(_this.collaborators.length);
            if (_this.collaborators.length == 0) {
                _this.isSemMotorista = true;
            }
            elm.textContent = _this.collaborators.length + " registros na tabela";
        })
            .catch(function (response) {
            console.error("error->", response);
            elm.textContent = "0 registros na tabela";
            _this.isSemConexao = true;
        });
    };
    ListOsComponent.prototype.editarView = function (id) {
        //  this.pagemodifyService.setPage("/edit/"+id);
    };
    ListOsComponent.prototype.detalhar = function (item) {
        console.log(item);
        this.objetoInModal = item;
        this.titleService.setTitle("Detalhando OS " + item.id);
    };
    ListOsComponent.prototype.fecharDetalhar = function () {
        this.titleService.setTitle("Listagem de ordens de serviço");
        this.objetoInModal = false;
    };
    ListOsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-list-os',
            template: __webpack_require__(746),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__os_service__["a" /* OsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__os_service__["a" /* OsService */]) === 'function' && _b) || Object])
    ], ListOsComponent);
    return ListOsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/list-os.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OsComponent = (function () {
    function OsComponent() {
    }
    OsComponent.prototype.ngOnInit = function () {
    };
    OsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-os',
            template: __webpack_require__(747),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [])
    ], OsComponent);
    return OsComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/os.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.url = "https://ezentis.herokuapp.com";
    }
    ProjectsService.prototype.cadastrar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/projetos";
        var data = JSON.stringify(objeto);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    ProjectsService.prototype.editar = function (objeto) {
        console.table(objeto);
        var url = this.url + "/api/projetos";
        var data = JSON.stringify(objeto);
        console.table(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.put(url, data, { headers: headers }).toPromise();
    };
    ProjectsService.prototype.listar = function () {
        var url = this.url + "/api/projetos";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    ProjectsService.prototype.buscarPorId = function (id) {
        var url = this.url + "/api/projetos/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    ProjectsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ProjectsService);
    return ProjectsService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/projects.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddUserComponent = (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__(751),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddUserComponent);
    return AddUserComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/add-user.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditUserComponent = (function () {
    function EditUserComponent() {
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    EditUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__(752),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditUserComponent);
    return EditUserComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/edit-user.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListUserComponent = (function () {
    function ListUserComponent() {
    }
    ListUserComponent.prototype.ngOnInit = function () {
    };
    ListUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-list-user',
            template: __webpack_require__(753),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListUserComponent);
    return ListUserComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/list-user.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__(754),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/users.component.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleService = (function () {
    function TitleService(titleService) {
        this.titleService = titleService;
    }
    TitleService.prototype.setTitle = function (title) {
        this.titleService.setTitle(title);
    };
    TitleService.prototype.getTitle = function () {
        return this.titleService.getTitle();
    };
    TitleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], TitleService);
    return TitleService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/title.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_auth_authguard_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authGuardService, titleService) {
        this.authGuardService = authGuardService;
        this.titleService = titleService;
        this.menu = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Dashboard Ezentis");
        this.authGuardService.canActivate();
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.table(this.user.name);
    };
    DashboardComponent.prototype.logout = function () {
        this.authGuardService.logout();
    };
    DashboardComponent.prototype.abrirMenu = function (opcao) {
        var elm = document.querySelector("#menuMain");
        if (opcao == "abrir") {
            this.menu = true;
            elm.style.right = "260px";
        }
        else {
            if (elm.style.right == "260px") {
                elm.style.right = "0px";
            }
        }
        console.log(elm.style.right);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(739),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_auth_authguard_service__["a" /* AuthGuardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_auth_authguard_service__["a" /* AuthGuardService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_utils_title_service__["a" /* TitleService */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/dashboard.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__(748),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewComponent);
    return OverviewComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/overview.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__(750),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/projects.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_auth_authguard_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(loginService, route, router, authGuardService, titleService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.authGuardService = authGuardService;
        this.titleService = titleService;
        this.msgErro = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Faça o login");
        if (this.authGuardService.canActivate()) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.signin = function () {
        console.log(this.login);
        this.user = this.loginService.signin(this.login, this.password);
        if (this.user == null) {
            this.msgErro = true;
        }
        else {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(755),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_auth_authguard_service__["a" /* AuthGuardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_auth_authguard_service__["a" /* AuthGuardService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__utils_title_service__["a" /* TitleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__utils_title_service__["a" /* TitleService */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/login.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.getUsers = function () {
        return [
            { id: 1, login: "admin", password: "admin", name: "Guilherme Luis Faustino", occupation: "FullStack developer" },
            { id: 2, login: "user", password: "user", name: "Felipe", occupation: "Collaborator" }
        ];
    };
    LoginService.prototype.signin = function (login, password) {
        var users = this.getUsers();
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.login == login) {
                if (user.password == password) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return user;
                }
            }
        }
        return null;
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/login.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagemodifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagemodifyService = (function () {
    function PagemodifyService(titleService, router) {
        this.titleService = titleService;
        this.router = router;
    }
    PagemodifyService.prototype.setPage = function (page) {
        this.router.navigate([page]);
    };
    PagemodifyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], PagemodifyService);
    return PagemodifyService;
    var _a, _b;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/pagemodify.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 423;


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(541);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/projeto_angular/ezentis/src/main.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(734),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/app.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_title_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__ = __webpack_require__(545);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__login_login_module__["a" /* LoginModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__utils_title_service__["a" /* TitleService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/app.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/app.routing.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collaborators_routing_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collaborators_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_colllaborators_list_colllaborators_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_collaborator_add_collaborator_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_collaborator_edit_collaborator_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collaborators_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CollaboratorsModule = (function () {
    function CollaboratorsModule() {
    }
    CollaboratorsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__collaborators_routing_module__["a" /* CollaboratorsRoutingModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__collaborators_component__["a" /* CollaboratorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__list_colllaborators_list_colllaborators_component__["a" /* ListColllaboratorsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_collaborator_add_collaborator_component__["a" /* AddCollaboratorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_collaborator_edit_collaborator_component__["a" /* EditCollaboratorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__collaborators_service__["a" /* CollaboratorsService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CollaboratorsModule);
    return CollaboratorsModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/collaborators.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_colllaborators_list_colllaborators_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_collaborator_edit_collaborator_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_collaborator_add_collaborator_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collaborators_component__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardRoutes = [
    { path: 'collaborators', component: __WEBPACK_IMPORTED_MODULE_5__collaborators_component__["a" /* CollaboratorsComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__list_colllaborators_list_colllaborators_component__["a" /* ListColllaboratorsComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_4__add_collaborator_add_collaborator_component__["a" /* AddCollaboratorComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__edit_collaborator_edit_collaborator_component__["a" /* EditCollaboratorComponent */] },
            { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_5__collaborators_component__["a" /* CollaboratorsComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__collaborators_component__["a" /* CollaboratorsComponent */] },
        ] },
];
var CollaboratorsRoutingModule = (function () {
    function CollaboratorsRoutingModule() {
    }
    CollaboratorsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(DashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], CollaboratorsRoutingModule);
    return CollaboratorsRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/collaborators.routing.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__os_os_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pagemodify_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collaborators_collaborators_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_authguard_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projects_list_projects_list_projects_component__ = __webpack_require__(551);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__collaborators_collaborators_module__["a" /* CollaboratorsModule */],
                __WEBPACK_IMPORTED_MODULE_2__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_0__os_os_module__["a" /* OsModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__projects_list_projects_list_projects_component__["a" /* ListProjectsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__auth_authguard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_1__utils_pagemodify_service__["a" /* PagemodifyService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/dashboard.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_list_materials_list_materials_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_edit_materials_edit_materials_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_add_materials_add_materials_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collaborators_collaborators_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collaborators_list_colllaborators_list_colllaborators_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collaborators_add_collaborator_add_collaborator_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collaborators_edit_collaborator_edit_collaborator_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_add_user_add_user_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_edit_user_edit_user_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_list_user_list_user_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__os_os_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__os_list_os_list_os_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__os_add_os_add_os_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__os_edit_os_edit_os_component__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var DashboardRoutes = [
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */] },
            { path: 'collaborators', component: __WEBPACK_IMPORTED_MODULE_8__collaborators_collaborators_component__["a" /* CollaboratorsComponent */], children: [
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__collaborators_list_colllaborators_list_colllaborators_component__["a" /* ListColllaboratorsComponent */] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_10__collaborators_add_collaborator_add_collaborator_component__["a" /* AddCollaboratorComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__collaborators_edit_collaborator_edit_collaborator_component__["a" /* EditCollaboratorComponent */] },
                    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_8__collaborators_collaborators_component__["a" /* CollaboratorsComponent */] },
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__collaborators_collaborators_component__["a" /* CollaboratorsComponent */] },
                ] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */], children: [
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_13__users_add_user_add_user_component__["a" /* AddUserComponent */] },
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_15__users_list_user_list_user_component__["a" /* ListUserComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_14__users_edit_user_edit_user_component__["a" /* EditUserComponent */] },
                    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */] },
                ] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */], children: [
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */] },
                    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */] },
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_16__projects_projects_component__["a" /* ProjectsComponent */] },
                ] },
            { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_3__material_material_component__["a" /* MaterialComponent */], children: [
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_0__material_list_materials_list_materials_component__["a" /* ListMaterialsComponent */] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_2__material_add_materials_add_materials_component__["a" /* AddMaterialsComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_1__material_edit_materials_edit_materials_component__["a" /* EditMaterialsComponent */] },
                    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_1__material_edit_materials_edit_materials_component__["a" /* EditMaterialsComponent */] },
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__material_edit_materials_edit_materials_component__["a" /* EditMaterialsComponent */] },
                ] },
            { path: 'orderservices', component: __WEBPACK_IMPORTED_MODULE_17__os_os_component__["a" /* OsComponent */], children: [
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_18__os_list_os_list_os_component__["a" /* ListOsComponent */] },
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_19__os_add_os_add_os_component__["a" /* AddOsComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_20__os_edit_os_edit_os_component__["a" /* EditOsComponent */] },
                    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_20__os_edit_os_edit_os_component__["a" /* EditOsComponent */] },
                ] },
        ]
    },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(DashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/dashboard.routing.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_materials_list_materials_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_materials_add_materials_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_materials_edit_materials_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_routing_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_routing_module__["a" /* MaterialRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__material_routing_module__["a" /* MaterialRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__material_component__["a" /* MaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_4__list_materials_list_materials_component__["a" /* ListMaterialsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_materials_add_materials_component__["a" /* AddMaterialsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_materials_edit_materials_component__["a" /* EditMaterialsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__material_service__["a" /* MaterialService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialModule);
    return MaterialModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/material.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_materials_edit_materials_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_materials_add_materials_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_materials_list_materials_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardRoutes = [
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_3__material_component__["a" /* MaterialComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__list_materials_list_materials_component__["a" /* ListMaterialsComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_1__add_materials_add_materials_component__["a" /* AddMaterialsComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_0__edit_materials_edit_materials_component__["a" /* EditMaterialsComponent */] },
            { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_3__material_component__["a" /* MaterialComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__material_component__["a" /* MaterialComponent */] },
        ] },
];
var MaterialRoutingModule = (function () {
    function MaterialRoutingModule() {
    }
    MaterialRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(DashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRoutingModule);
    return MaterialRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/material.routing.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_projects_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__os_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_os_list_os_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_os_edit_os_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_os_add_os_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__os_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__os_routing_module__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OsModule = (function () {
    function OsModule() {
    }
    OsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__os_routing_module__["a" /* OsRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__os_routing_module__["a" /* OsRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__add_os_add_os_component__["a" /* AddOsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_os_edit_os_component__["a" /* EditOsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_os_list_os_component__["a" /* ListOsComponent */],
                __WEBPACK_IMPORTED_MODULE_1__os_component__["a" /* OsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__os_service__["a" /* OsService */],
                __WEBPACK_IMPORTED_MODULE_0__projects_projects_service__["a" /* ProjectsService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OsModule);
    return OsModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/os.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_os_edit_os_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_os_add_os_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_os_list_os_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__os_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardRoutes = [
    { path: 'orderservices', component: __WEBPACK_IMPORTED_MODULE_3__os_component__["a" /* OsComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__list_os_list_os_component__["a" /* ListOsComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_1__add_os_add_os_component__["a" /* AddOsComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_0__edit_os_edit_os_component__["a" /* EditOsComponent */] },
            { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_0__edit_os_edit_os_component__["a" /* EditOsComponent */] },
        ] },
];
var OsRoutingModule = (function () {
    function OsRoutingModule() {
    }
    OsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(DashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], OsRoutingModule);
    return OsRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/os.routing.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListProjectsComponent = (function () {
    function ListProjectsComponent() {
    }
    ListProjectsComponent.prototype.ngOnInit = function () {
    };
    ListProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-list-projects',
            template: __webpack_require__(749),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListProjectsComponent);
    return ListProjectsComponent;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/list-projects.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_routing_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_user_add_user_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_user_list_user_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_user_edit_user_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__users_routing_module__["a" /* UsersRoutingModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_1__add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_3__edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_2__list_user_list_user_component__["a" /* ListUserComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/users.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_user_edit_user_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user_add_user_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_user_list_user_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardRoutes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_0__users_component__["a" /* UsersComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_user_list_user_component__["a" /* ListUserComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_2__add_user_add_user_component__["a" /* AddUserComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_1__edit_user_edit_user_component__["a" /* EditUserComponent */] },
        ] },
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(DashboardRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/users.routing.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_authguard_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_5__auth_authguard_service__["a" /* AuthGuardService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
;
//# sourceMappingURL=C:/projeto_angular/ezentis/src/login.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/projeto_angular/ezentis/src/environment.js.map

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "#add-collaborator .title-form {\n  padding-top: 20px; }\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "#navTab .nav-link {\n  background-color: #bdc3c7;\n  margin-right: 20px; }\n  #navTab .nav-link:hover {\n    background-color: #a1aab0;\n    transition: background-color .3s .2s; }\n\n#navTab .active {\n  background-color: #952dae !important;\n  transition: background-color .3s .2s;\n  cursor: not-allowed;\n  border: 0; }\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "#pageListCollaborator .btn-icon {\n  cursor: pointer; }\n  #pageListCollaborator .btn-icon:hover {\n    color: blueviolet; }\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "#navTab .nav-link {\n  background-color: #bdc3c7;\n  margin-right: 20px; }\n  #navTab .nav-link:hover {\n    background-color: #a1aab0;\n    transition: background-color .3s .2s; }\n\n#navTab .active {\n  background-color: #952dae !important;\n  transition: background-color .3s .2s;\n  cursor: not-allowed;\n  border: 0; }\n\n.iconByGroup:hover {\n  color: red;\n  transition: 0.5s; }\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: linear-gradient(60deg, #ab47bc, #8e24aa);\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "#navTab .nav-link {\n  background-color: #bdc3c7;\n  margin-right: 20px; }\n  #navTab .nav-link:hover {\n    background-color: #a1aab0;\n    transition: background-color .3s .2s; }\n\n#navTab .active {\n  background-color: #952dae !important;\n  transition: background-color .3s .2s;\n  cursor: not-allowed;\n  border: 0; }\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "#navTab .nav-link {\n  background-color: #bdc3c7;\n  margin-right: 20px; }\n  #navTab .nav-link:hover {\n    background-color: #a1aab0;\n    transition: background-color .3s .2s; }\n\n#navTab .active {\n  background-color: #952dae !important;\n  transition: background-color .3s .2s;\n  cursor: not-allowed;\n  border: 0; }\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "#login-page {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  /* STRUCTURE */\n  /* TABS */\n  /* FORM TYPOGRAPHY*/\n  /* ANIMATIONS */\n  /* Simple CSS3 Fade-in-down Animation */\n  /* Simple CSS3 Fade-in Animation */\n  /* Simple CSS3 Fade-in Animation */\n  /* OTHERS */ }\n  #login-page a {\n    color: #92badd;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 400; }\n  #login-page h2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 40px 8px 10px 8px;\n    color: #cccccc; }\n  #login-page .wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px; }\n  #login-page #formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n    text-align: center; }\n  #login-page #formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px; }\n  #login-page h2.inactive {\n    color: #cccccc; }\n  #login-page h2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9; }\n  #login-page input[type=button], #login-page input[type=submit], #login-page input[type=reset] {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out; }\n  #login-page input[type=button]:hover, #login-page input[type=submit]:hover, #login-page input[type=reset]:hover {\n    background-color: #39ace7; }\n  #login-page input[type=button]:active, #login-page input[type=submit]:active, #login-page input[type=reset]:active {\n    transform: scale(0.95); }\n  #login-page input[type=text], #login-page input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px; }\n  #login-page input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9; }\n  #login-page input[type=text]:placeholder {\n    color: #cccccc; }\n  #login-page .fadeInDown {\n    animation-name: fadeInDown;\n    animation-duration: 1s;\n    animation-fill-mode: both; }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  #login-page .fadeIn {\n    opacity: 0;\n    animation: fadeIn ease-in 1;\n    animation-fill-mode: forwards;\n    animation-duration: 1s; }\n  #login-page .fadeIn.first {\n    animation-delay: 0.4s; }\n  #login-page .fadeIn.second {\n    animation-delay: 0.6s; }\n  #login-page .fadeIn.third {\n    animation-delay: 0.8s; }\n  #login-page .fadeIn.fourth {\n    animation-delay: 1s; }\n  #login-page .underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s; }\n  #login-page .underlineHover:hover {\n    color: #0d0d0d; }\n  #login-page .underlineHover:hover:after {\n    width: 100%; }\n  #login-page *:focus {\n    outline: none; }\n  #login-page #icon {\n    width: 30%;\n    margin: 20px; }\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n  {{title}}\n</h1>\n<button class=\"btn btn-primary\">Test Butston</button>\n -->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"content\">\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                      <h4 class=\"card-title\">Cadastrar usuário</h4>\n                      <p class=\"card-category\">Preencha os campos abaixo</p>\n                    </div>\n\n                    <div class=\"card-body\">\n                      <form>\n                        <div class=\"row\">\n                         <!-- \n                          <div class=\"col-md-5\">\n                            <div class=\"form-group\">\n                              <label class=\"bmd-label-floating\">Company (disabled)</label>\n                              <input type=\"text\" class=\"form-control\" disabled>\n                            </div>\n                          </div>\n                           -->\n\n                           <!--\n\n\n                            private Integer id;\n\tprivate String nome;\n\tprivate String sobrenome;\n\tprivate String telefone;\n\tprivate String senha;\n    private String status;\n    \n                           -->\n\n                          <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                              <label class=\"bmd-label-floating\">Matricula</label>\n                              <input type=\"text\" [(ngModel)]=\"collaborator.matricula\" name=\"matricula\" class=\"form-control\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-4\">\n                                <div class=\"form-group\">\n                                  <label class=\"bmd-label-floating\">Nome</label>\n                                  <input type=\"text\" [(ngModel)]=\"collaborator.nome\" name=\"nome\" class=\"form-control\">\n                                </div>\n                              </div>\n                          <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                              <label class=\"bmd-label-floating\">Sobrenome</label>\n                              <input type=\"text\" [(ngModel)]=\"collaborator.sobrenome\" name=\"sobrenome\" class=\"form-control\">\n                            </div>\n                          </div>\n\n                        </div>\n                        \n                        <div class=\"row\">\n                          \n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"bmd-label-floating\">Telefone</label>\n                                    <input type=\"text\"  [(ngModel)]=\"collaborator.telefone\" name=\"sobrenome\" class=\"form-control\">\n                                </div>\n                            </div>\n                          \n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"bmd-label-floating\">Senha</label>\n                                    <input type=\"password\" [(ngModel)]=\"collaborator.senha\" name=\"senha\" class=\"form-control\">\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group\">        \n                                    <label class=\"bmd-label-floating\">Status</label>\n                                    <select  [(ngModel)]=\"collaborator.status\" name=\"status\" class=\"form-control\">\n                                        <option value=\"1\" selected>Ativo</option>\n                                        <option value=\"2\">Desativado</option>\n                                    </select> \n                                </div>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                    <div class=\"form-group\">        \n                                        <label class=\"bmd-label-floating\">Ocupação</label>\n                                        <select  class=\"form-control\">\n                                            <option value=\"1\" selected>Administrador</option>\n                                            <option value=\"2\">Supervisor</option>\n                                            <option value=\"3\">Outros</option>\n                                        </select> \n                                    </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n                            <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                            <label for=\"options\">Permissões:</label>\n                                            <div *ngFor=\"let option of options\">\n                                                <label>\n                                                    <input type=\"checkbox\"\n                                                           name=\"options\"\n                                                           value=\"{{option.id}}\"\n                                                           [(ngModel)]=\"option.checked\"/>\n                                                    {{option.nome}}\n                                                </label>\n                                            </div>\n                                        </div>\n                            </div>        \n                           \n                        </div>\n\n                        <!-- <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label>About Me</label>\n                              <div class=\"form-group\">\n                                <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                <textarea class=\"form-control\" rows=\"5\"></textarea>\n                              </div>\n                            </div>\n                          </div>\n                        </div> -->\n\n                        <button type=\"submit\" id=\"btnAction\" class=\"btn btn-primary pull-right\" (click)=\"cadastrarColaborador()\">Salvar colaborador</button>\n                        <div class=\"clearfix\"></div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n               \n\n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"nav-tabs-navigation\" id=\"navTab\">\n    <div class=\"nav-tabs-wrapper\">\n\n      <!-- <span class=\"nav-tabs-title\">Opções</span> -->\n\n      <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n          <li class=\"nav-item \"  title=\"Listar colaboradores\">\n              <a class=\"nav-link \"  routerLinkActive=\"active\" routerLink=\"list\" data-toggle=\"tab\">\n              <i class=\"material-icons\" >people</i> Listar\n              <div class=\"ripple-container\"></div>\n              </a>\n          </li>\n\n        <li class=\"nav-item\"   title=\"Cadastrar colaborador\">\n          <a class=\"nav-link\"  routerLinkActive=\"active\"  routerLink=\"add\" data-toggle=\"tab\">\n            <i class=\"material-icons\">person_add</i> Cadastrar\n            <div class=\"ripple-container\"></div>\n          </a>\n        </li>\n\n\n\n      </ul>\n\n    </div>\n  </div>\n\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "\n                   \n      <div class=\"content\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n\n                <div class=\"card\">\n                  <div class=\"card-header card-header-primary\">\n                    <h4 class=\"card-title\">Editar colaborador</h4>\n                    <p class=\"card-category\" id=\"retornoTxt\">\n                       Carregando dados...\n                      \n                      </p>\n                      \n                  </div>\n\n                  <div class=\"card-body\">\n                    \n                    <form>\n                      \n                      <div class=\"row\">\n                       <!-- \n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <label class=\"bmd-label-floating\">Company (disabled)</label>\n                            <input type=\"text\" class=\"form-control\" disabled>\n                          </div>\n                        </div>\n                         -->\n\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                            <label class=\"bmd-label-floating\">Matricula</label>\n                            <input type=\"text\" [(ngModel)]=\"collaborator.matricula\" name=\"matricula\" class=\"form-control\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                <label class=\"bmd-label-floating\">Nome</label>\n                                <input type=\"text\" [(ngModel)]=\"collaborator.nome\" name=\"nome\" class=\"form-control\">\n                              </div>\n                            </div>\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                            <label class=\"bmd-label-floating\">Sobrenome</label>\n                            <input type=\"text\" [(ngModel)]=\"collaborator.sobrenome\" name=\"sobrenome\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n                      \n                      <div class=\"row\">\n                        \n                          <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                  <label class=\"bmd-label-floating\">Telefone</label>\n                                  <input type=\"text\"  [(ngModel)]=\"collaborator.telefone\" name=\"sobrenome\" class=\"form-control\">\n                              </div>\n                          </div>\n                        \n                          <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                  <label class=\"bmd-label-floating\">Senha</label>\n                                  <input type=\"password\" [(ngModel)]=\"collaborator.senha\" name=\"senha\" class=\"form-control\">\n                              </div>\n                          </div>\n\n                          <div class=\"col-md-3\">\n                              <div class=\"form-group\">        \n                                  <label class=\"bmd-label-floating\">Status</label>\n                                  <select  [(ngModel)]=\"collaborator.status\" name=\"status\" class=\"form-control\">\n                                      <option value=\"1\" selected>Ativo</option>\n                                      <option value=\"2\">Desativado</option>\n                                  </select> \n                              </div>\n                          </div>\n\n                          <div class=\"col-md-3\">\n                                  <div class=\"form-group\">        \n                                      <label class=\"bmd-label-floating\">Ocupação</label>\n                                      <select  class=\"form-control\">\n                                          <option value=\"1\" selected>Administrador</option>\n                                          <option value=\"2\">Supervisor</option>\n                                          <option value=\"3\">Outros</option>\n                                      </select> \n                                  </div>\n                          </div>\n\n                      </div>\n\n                      <div class=\"row\">\n\n                          <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                          <label for=\"options\">Permissões:</label>\n                                          <div *ngFor=\"let option of options\">\n                                              <label>\n                                                  <input type=\"checkbox\"\n                                                         name=\"options\"\n                                                         value=\"{{option.id}}\"\n                                                         [(ngModel)]=\"option.checked\"/>\n                                                  {{option.nome}}\n                                              </label>\n                                          </div>\n                                      </div>\n                          </div>        \n                         \n                      </div>\n\n                      <!-- <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <label>About Me</label>\n                            <div class=\"form-group\">\n                              <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                              <textarea class=\"form-control\" rows=\"5\"></textarea>\n                            </div>\n                          </div>\n                        </div>\n                      </div> -->\n                      <div class=\"lds-ellipsis\" title=\"carregando os dados\" *ngIf=\"isLoading\">\n                          <div></div>\n                          <div></div>\n                          <div></div>\n                          <div></div>\n                      </div>\n                      <button type=\"submit\" id=\"btnAction\" class=\"btn btn-primary pull-right\" (click)=\"editarColaborador()\">Editar colaborador</button>\n                      <div class=\"clearfix\"></div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n             \n\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "  <div class=\"content\" id=\"pageListCollaborator\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n        <div class=\"col-md-6\"></div>\n        <div class=\"col-md-6\">\n            <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                  <input type=\"text\"  name=\"searchQuery\" ngInput=\"getItems($event)\" class=\"form-control\" placeholder=\"Buscar colaborador...\">\n                  <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i>\n                    <div class=\"ripple-container\"></div>\n                  </button>\n                </div>\n              </form>\n        </div>\n\n          <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Listagem de colaboradores</h4>\n                <p class=\"card-category\" id=\"qtRegisterTable\"> Carregando os colaboradores...</p>\n                </div>\n              <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead class=\" text-primary\">\n                      <th>Matricula</th>\n                      <th>Nome</th>\n                      <th>Sobrenome</th>\n                      <th>Telefone</th>\n                      <th>Permissões</th>\n                      <th>Status</th>\n                      <th>Ação</th>\n                    </thead>\n\n                    <tbody>\n\n                        <tr *ngFor=\"let item of items\">\n                            <td> {{ item?.id }}  </td>\n                            <td> {{ item?.nome }} </td>\n                            <td> {{ item?.sobrenome }} </td>\n                            <td> {{ item?.telefone }}  </td>\n\n                            <td class=\"text-primary\">\n                                <span *ngFor=\"let permissao of item?.permissoes\">\n                                    {{ permissao.nome }}\n                                </span>\n                            </td>\n                            <td>ativo</td>\n\n                            <td>\n                              <i [routerLink]=\"['/dashboard/collaborators/edit/', item?.id]\" (click)=\"editarView(item?.id)\" title=\"Editar colaborador\" class=\"material-icons btn-icon\">edit</i>\n                              <i (click)=\"detalhar(item)\"  title=\"Consultar colaborador\" class=\"material-icons btn-icon\">remove_red_eye</i>\n                            </td>\n\n                        </tr>\n\n\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"col\" *ngIf=\"collaboratorInModal\">\n              <div class=\"card card-profile\">\n\n\t\t\t\t        <div class=\"card-avatar\">\n                  <a href=\"#pablo\">\n                    <img class=\"img\" src=\"../assets/default-user.png\" />\n                  </a>\n                </div>\n\n\t\t\t\t          <div class=\"card-body\">\n                  <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                  <h4 class=\"card-title\">{{ collaboratorInModal?.nome }} {{ collaboratorInModal?.sobrenome }} </h4>\n                  <p class=\"card-description\">\n                    Projetos que ele está trabalhando ...\n\n                    <span *ngFor=\"let permissao of collaboratorInModal?.permissoes\">\n                        {{ permissao.nome }}\n                    </span>\n                  </p>\n                  <a class=\"btn btn-primary btn-round\" (click)=\"fecharDetalhar(item)\" >Fechar</a>\n                </div>\n\n              </div>\n            </div>\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "  <div class=\"wrapper \" >\n    <div class=\"sidebar\" data-color=\"purple\" id=\"menuMain\" data-background-color=\"white\">\n      <!--\n      Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\n\n      Tip 2: you can also add an image using data-image tag\n  -->\n      <div class=\"logo\">\n        \n        <a routerLink=\"overview\" >\n          <img src=\"assets/ezentis-logo.png\" alt=\"logo ezentis\" title=\"Return dashboard\" width=\"150px\" style=\"margin:10px 0 0 45px;\">\n        </a>\n        \n      </div>\n      <div class=\"sidebar-wrapper navbar-toggler\">\n        <ul class=\"nav\">\n\n          <li class=\"nav-item\"  routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"overview\">\n              <i class=\"material-icons\">dashboard</i>\n              <p>Dashboard</p>\n            </a>\n          </li>\n\n          <li class=\"nav-item \" routerLinkActive=\"active\">\n              <a class=\"nav-link\"  routerLink=\"collaborators\" >\n                <i class=\"material-icons\">person</i>\n                <p>Colaboradores</p>\n              </a>\n          </li>\n         \n          <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" routerLink=\"materials\">\n                <i class=\"material-icons\">build</i>\n                <p>Materiais</p>\n              </a>\n          </li>\n\n          <li class=\"nav-item \" routerLinkActive=\"active\">\n              <a class=\"nav-link\" routerLink=\"orderservices\">\n                <i class=\"material-icons\">content_copy</i>\n                <p>Ordens de serviço</p>\n              </a>\n          </li>\n\n          <li class=\"nav-item \" >\n              <a class=\"nav-link\"  >\n                <i class=\"material-icons\">receipt</i>\n                <p>Projetos</p>\n              </a>\n          </li>\n          \n          <li class=\"nav-item \" >\n              <a class=\"nav-link\"  >\n                <i class=\"material-icons\">business</i>\n                <p>Clientes</p>\n              </a>\n          </li>\n\n          <li class=\"nav-item \" >\n              <a class=\"nav-link\" >\n                <i class=\"material-icons\">supervised_user_circle</i>\n                <p>Usuários</p>\n              </a>\n          </li>\n\n          \n          \n          <li class=\"nav-item \" (click)=\"logout()\"> \n              <a class=\"nav-link\" >\n                <i class=\"material-icons\">assignment_return</i>\n                <p>Sair</p>\n              </a>\n          </li>\n\n\n          <!-- your sidebar here -->\n        </ul>\n      </div>\n    </div>\n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" >   {{ titlePage }}   </a>\n          </div>\n          <button class=\"navbar-toggler\" (click)=\"abrirMenu('abrir')\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pablo\">\n                  <i class=\"material-icons\">notifications</i>\n                </a>\n              </li>\n\n              \n              <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownProfile\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">person</i> {{ user.name }}\n                    <p class=\"d-lg-none d-md-block\">\n                      Account\n                    </p>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownProfile\">\n                    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                    <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Log out</a>\n                  </div>\n                </li>\n              \n\n              <!-- your navbar here -->\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      <div class=\"content\" id=\"contentMain\"  (click)=\"abrirMenu('fechar')\" >\n        <div class=\"container-fluid\">\n          <!-- your content here -->\n\n\n\n              <!-- route -->\n              <router-outlet></router-outlet>\n\n\n\n\n        </div>\n      </div>\n      <footer class=\"footer\">\n        <div class=\"container-fluid\">\n          \n          <nav class=\"float-left\">\n            <ul>\n              <li>\n                <a href=\"#\">\n                  Made with <i class=\"material-icons iconByGroup\" title=\"Feito com carinho \">favorite</i> by Group 5 ADS Senac \n                </a>\n              </li>\n            </ul>\n          </nav>\n          \n          <!-- your footer here -->\n        </div>\n      </footer>\n    </div>\n  </div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "      <div class=\"content\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n\n                <div class=\"card\">\n                  <div class=\"card-header card-header-primary\">\n                    <h4 class=\"card-title\">Cadastrar material</h4>\n                    <p class=\"card-category\">Preencha os campos abaixo</p>\n                  </div>\n\n                  <div class=\"card-body\">\n                    <form>\n                     \n                        <div class=\"row\">\n            \n                            <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label class=\"bmd-label-floating\">Nome</label>\n                              <input type=\"text\" name=\"nome\" [(ngModel)]=\"material.nome\" class=\"form-control\">\n                            </div>\n                            </div>\n                            \n                            \n                            <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                <label class=\"bmd-label-floating\">Tipo</label>\n                                <input type=\"text\" name=\"tipo\" [(ngModel)]=\"material.tipo\"  class=\"form-control\">\n                              </div>\n                           </div>\n              \n                        </div> <!-- FIM ROW --> \n                      \n\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label>Descrição</label>\n                              <div class=\"form-group\">\n                                <label class=\"bmd-label-floating\"> Descrição do material</label>\n                                <textarea class=\"form-control\"  name=\"descricao\"  [(ngModel)]=\"material.descricao\"  rows=\"5\"></textarea>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n                      <button type=\"submit\" id=\"btnAction\" class=\"btn btn-primary pull-right\" (click)=\"cadastrar()\">Salvar Material</button>\n                      <div class=\"clearfix\"></div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n             \n\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h4 class=\"card-title\">Editar material</h4>\n              <p class=\"card-category\" id=\"retornoTxt\">Preencha os campos abaixo</p>\n            </div>\n\n            <div class=\"card-body\">\n              <form>\n               \n                  <div class=\"row\">\n      \n                      <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Nome</label>\n                        <input type=\"text\" name=\"nome\" [(ngModel)]=\"material.nome\" class=\"form-control\">\n                      </div>\n                      </div>\n                      \n                      \n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\">Tipo</label>\n                          <input type=\"text\" name=\"tipo\" [(ngModel)]=\"material.tipo\"  class=\"form-control\">\n                        </div>\n                     </div>\n        \n                  </div> <!-- FIM ROW --> \n                \n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label>Descrição</label>\n                        <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\"> Descrição do material</label>\n                          <textarea class=\"form-control\"  name=\"descricao\"  [(ngModel)]=\"material.descricao\"  rows=\"5\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                <button type=\"submit\" id=\"btnAction\" class=\"btn btn-primary pull-right\" (click)=\"editar()\">Editar Material</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n          </div>\n        </div>\n       \n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "     <div class=\"content\" id=\"pageListCollaborator\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n            <div class=\"col-md-6\">\n              \n                <div class=\"lds-ellipsis\" title=\"carregando os dados\" *ngIf=\"isLoading\">\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                </div>\n\n            </div>\n            <div class=\"col-md-6\">\n                <form class=\"navbar-form\">\n                    <div class=\"input-group no-border\">\n                      <input type=\"text\"  name=\"searchQuery\" ngInput=\"getItems($event)\" class=\"form-control\" placeholder=\"Buscar material...\">\n                      <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                      </button>\n                    </div>\n                  </form>\n            </div>\n    \n              <div class=\"col\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-primary\">\n                    <h4 class=\"card-title \">Listagem de materiais</h4>\n                    <p class=\"card-category\" id=\"qtRegisterTable\"> Carregando os materiais...</p>\n                    </div>\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead class=\" text-primary\">\n                            \n                            <th>Código</th>\n                            <th>Nome</th>\n                            <th>Tipo </th>\n                            <!-- <th>Medida</th>\n                            <th>Quantidade</th> -->\n                            <th>Status</th>\n                            <th>Ação</th>\n\n                        </thead>\n    \n                        <tbody>\n    \n                            <tr *ngFor=\"let item of items\">\n                                <td> {{ item?.id }}  </td>\n                                <td> {{ item?.nome }} </td>\n                                <td> {{ item?.tipo }} </td>\n                                <td>Disponível</td>\n                                <td>\n                                  <i [routerLink]=\"['/dashboard/materials/edit/', item?.id]\" (click)=\"editarView(item?.id)\" title=\"Editar colaborador\" class=\"material-icons btn-icon\">edit</i>\n                                  <i (click)=\"detalhar(item)\"  title=\"Consultar colaborador\" class=\"material-icons btn-icon\">remove_red_eye</i>\n                                </td>\n    \n                            </tr>\n    \n    \n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n    \n    \n              <div class=\"col\" *ngIf=\"objetoInModal\">\n                  <div class=\"card card-profile\">\n  \n                      <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">{{ objetoInModal?.nome }}</h6>\n                      <h4 class=\"card-title\"> Tipo: {{ objetoInModal?.tipo }} Código: {{ objetoInModal?.id }} </h4>\n                      <p class=\"card-description\">\n                          {{ objetoInModal?.descricao }}\n                      </p>\n                      <a class=\"btn btn-primary btn-round\" (click)=\"fecharDetalhar(item)\" >Fechar</a>\n                    </div>\n    \n                  </div>\n                </div>\n    \n    \n    \n    \n    \n            </div>\n          </div>\n        </div>\n    \n    "

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"nav-tabs-navigation\" id=\"navTab\">\n      <div class=\"nav-tabs-wrapper\">\n  \n        <!-- <span class=\"nav-tabs-title\">Opções</span> -->\n  \n        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n            <li class=\"nav-item \"  title=\"Listar materiais\">\n                <a class=\"nav-link \"  routerLinkActive=\"active\" routerLink=\"list\" data-toggle=\"tab\">\n                <i class=\"material-icons\" >list</i> Listar\n                <div class=\"ripple-container\"></div>\n                </a>\n            </li>\n  \n          <li class=\"nav-item\"   title=\"Cadastrar material\">\n            <a class=\"nav-link\"  routerLinkActive=\"active\"  routerLink=\"add\" data-toggle=\"tab\">\n              <i class=\"material-icons\">add</i> Cadastrar\n              <div class=\"ripple-container\"></div>\n            </a>\n          </li>\n  \n  \n  \n        </ul>\n  \n      </div>\n    </div>\n  \n  \n    <router-outlet></router-outlet>\n  </div>\n  \n  "

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <h4 class=\"card-title\">Cadastrar OS</h4>\n            <p class=\"card-category\" id=\"txtRetorno\">Preencha os campos abaixo</p>\n          </div>\n\n          <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n\n\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Projeto </label>\n\n                  <select class=\"form-control\" #project name=\"projectSelected\" [(ngModel)]=\"projectSelected\">\n                    <option *ngFor=\"let project of projects\" [ngValue]=\"project\" >{{ project?.nome }}</option>\n                  </select>\n                \n                </div>\n              </div>\n      \n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                \n                  <label class=\"bmd-label-floating\">Cliente</label>\n                  <input type=\"text\" class=\"form-control\" value=\"{{ projectSelected?.cliente?.nome }}\" readonly>\n                \n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n\n                  <label class=\"bmd-label-floating\">Colaborador </label>\n                  <select class=\"form-control\" name=\"collaboratorSelected\" [(ngModel)]=\"collaboratorSelected\">\n                    <option *ngFor=\"let collaborator of collaborators\" [ngValue]=\"collaborator\" >{{ collaborator?.nome }}</option>\n                  </select>\n                \n                </div>\n              </div>\n        \n              \n            </div> \n              \n\n              <div class=\"row\">\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\" >Local</label>\n                        <input type=\"text\" name=\"local\" class=\"form-control\" [(ngModel)]=\"os.local\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Data Inicio</label>\n                        <input type=\"date\" name=\"dataInicio\" [(ngModel)]=\"os.dataInicio\" class=\"form-control\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\">Data final</label>\n                          <input type=\"date\" name=\"dataFim\" [(ngModel)]=\"os.dataFim\" class=\"form-control\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">        \n                      <label class=\"bmd-label-floating\">Status</label>\n                      <select name=\"status\" [(ngModel)]=\"os.status\" class=\"form-control\">\n                        <option value=\"1\" selected>Ativo</option>\n                        <option value=\"2\">Desativado</option>\n                      </select> \n                    </div>\n                  </div>\n\n              </div>\n\n              <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Descrição</label>\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\"> Descrição da ordem de serviço</label>\n                        <textarea class=\"form-control\"  name=\"descricao\" [(ngModel)]=\"os.descricao\"  rows=\"5\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n\n              <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"cadastrar()\" id=\"btnAction\">Salvar OS</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n     \n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n  \n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h4 class=\"card-title\">Editar OS</h4>\n              <p class=\"card-category\" id=\"retornoTxt\">Preencha os campos abaixo</p>\n            </div>\n  \n            <div class=\"card-body\">\n            <form>\n              <div class=\"row\">\n  \n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Projeto </label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{ projectSelected?.nome }}\" readonly>\n                  </div>\n                </div>\n        \n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Cliente</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{ projectSelected?.cliente?.nome }}\" readonly>\n                  </div>\n                </div>\n  \n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Colaborador ( {{ collaboratorSelected?.nome }} ) </label>\n                    <!-- name=\"collaboratorSelected\" ng-init=\"collaboratorSelected\" [(ngModel)]=\"collaboratorSelected\" -->\n                    <select class=\"form-control\" name=\"collaboratorSelected\" ng-init=\"collaboratorSelected\" [(ngModel)]=\"collaboratorSelected\">\n                      <option *ngFor=\"let collaborator of collaborators\" [ngValue]=\"collaborator\" >{{ collaborator?.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n                \n              </div> \n                \n  \n                <div class=\"row\">\n  \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\" >Local</label>\n                          <input type=\"text\" name=\"local\" class=\"form-control\" [(ngModel)]=\"os.local\">\n                        </div>\n                    </div>\n  \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\">Data Inicio</label>\n                          <input type=\"date\" name=\"dataInicio\"  value=\"{{ os?.dataInicio}}\" [(ngModel)]=\"os.dataInicio\" class=\"form-control\">\n                        </div>\n                    </div>\n  \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label class=\"bmd-label-floating\">Data final</label>\n                            <input type=\"date\" name=\"dataFim\" value=\"{{ os?.dataFim}}\" [(ngModel)]=\"os.dataFim\" class=\"form-control\">\n                        </div>\n                    </div>\n  \n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">        \n                        <label class=\"bmd-label-floating\">Status</label>\n                        <select name=\"status\" [(ngModel)]=\"os.status\" class=\"form-control\">\n                          <option value=\"1\" selected>Ativo</option>\n                          <option value=\"2\">Desativado</option>\n                        </select> \n                      </div>\n                    </div>\n  \n                </div>\n  \n                <div class=\"row\">\n  \n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label>Descrição</label>\n                        <div class=\"form-group\">\n                          <label class=\"bmd-label-floating\"> Descrição da ordem de serviço</label>\n                          <textarea class=\"form-control\"  name=\"descricao\" [(ngModel)]=\"os.descricao\"  rows=\"5\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n  \n                  </div>\n  \n  \n                <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"editar()\" id=\"btnAction\">Editar OS</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n          </div>\n        </div>\n       \n  \n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"pageListCollaborator\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n      <div class=\"col-md-6\">\n        \n          <div class=\"lds-ellipsis\" title=\"carregando os dados\" *ngIf=\"isLoading\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n          </div>\n\n      </div>\n      <div class=\"col-md-6\">\n          <form class=\"navbar-form\">\n              <div class=\"input-group no-border\">\n                <input type=\"text\"  name=\"searchQuery\" ngInput=\"getItems($event)\" class=\"form-control\" placeholder=\"Buscar ordens de serviço...\">\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n                </button>\n              </div>\n            </form>\n      </div>\n\n        <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h4 class=\"card-title \">Listagem de ordens de serviço</h4>\n              <p class=\"card-category\" id=\"qtRegisterTable\"> Carregando os materiais...</p>\n              </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead class=\" text-primary\">\n                      \n                      <th>Código</th>\n                      <th>Local</th>\n                      <th>Empresa Cliente</th>\n                      <th>Data inicio</th>\n                      <th>Data final</th>\n                      <th>Status</th>\n                      <th>Ação</th>\n                  </thead>\n\n                  <tbody>\n\n        \n                      <tr *ngFor=\"let item of items\">\n                          <td> {{ item?.id }}  </td>\n                          <td> {{ item?.local }} </td>\n                          <td> {{ item?.projeto?.cliente?.nome  }} </td>\n                          <td> {{ item?.dataInicio }} </td>\n                          <td> {{ item?.dataFim }} </td>\n                          <td>Disponível</td>\n                          <td>\n                            <i [routerLink]=\"['/dashboard/orderservices/edit/', item?.id]\" (click)=\"editarView(item?.id)\" title=\"Editar ordem de servico\" class=\"material-icons btn-icon\">edit</i>\n                            <i (click)=\"detalhar(item)\"  title=\"Consultar colaborador\" class=\"material-icons btn-icon\">remove_red_eye</i>\n                          </td>\n\n                      </tr>\n\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col\" *ngIf=\"objetoInModal\">\n            <div class=\"card card-profile\">\n\n                <div class=\"card-body\">\n                <h6 class=\"card-category text-primary\">{{ objetoInModal?.projeto?.cliente?.nome }}</h6>\n                <h4 class=\"card-title\">  Código: {{ objetoInModal?.id }} - Projeto: {{ objetoInModal?.projeto?.nome }} </h4>\n                <p class=\"card-description\">\n                  Colaborador responsável: {{ objetoInModal?.colaborador?.nome }}\n                  <br>\n                  Descrição da OS: {{ objetoInModal?.descricao }}\n                  <br>\n                   Descrição do projeto: {{ objetoInModal?.projeto?.descricao }}\n                  \n                </p>\n                  <p class=\"list-group-item\">Colaboradores no projeto: \n                      <span *ngFor=\"let colaborador of objetoInModal?.projeto?.colaboradores\"> {{ colaborador.nome }}, </span>\n                  </p>\n\n                <a class=\"btn btn-primary btn-round\" (click)=\"fecharDetalhar(item)\" >Fechar</a>\n              </div>\n\n            </div>\n          </div>\n\n\n\n\n\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"nav-tabs-navigation\" id=\"navTab\">\n    <div class=\"nav-tabs-wrapper\">\n\n      <!-- <span class=\"nav-tabs-title\">Opções</span> -->\n\n      <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n          <li class=\"nav-item \"  title=\"Listar OS\">\n              <a class=\"nav-link \"  routerLinkActive=\"active\" routerLink=\"list\" data-toggle=\"tab\">\n              <i class=\"material-icons\" >list</i> Listar\n              <div class=\"ripple-container\"></div>\n              </a>\n          </li>\n\n        <li class=\"nav-item\"   title=\"Cadastrar OS\">\n          <a class=\"nav-link\"  routerLinkActive=\"active\"  routerLink=\"add\" data-toggle=\"tab\">\n            <i class=\"material-icons\">add</i> Cadastrar\n            <div class=\"ripple-container\"></div>\n          </a>\n        </li>\n\n\n\n      </ul>\n\n    </div>\n  </div>\n\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "    <div class=\"content\" id='page-overview'>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                        <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <p class=\"card-category\">Ordens de serviço</p>\n                      <h3 class=\"card-title\">14/50\n                        <small> </small>\n                      </h3>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons text-danger\">warning</i>\n                        <a href=\"#pablo\">Saiba mais...</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                        <i class=\"material-icons\">receipt</i>\n                      </div>\n                      <p class=\"card-category\">Projetos</p>\n                      <h3 class=\"card-title\">125/200</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">date_range</i> últimas 24 horas\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                        <i class=\"material-icons\">build</i>\n                      </div>\n                      <p class=\"card-category\">Materias</p>\n                      <h3 class=\"card-title\">75</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">local_offer</i> materias\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                  <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                        <i class=\"fa fa-user\"></i>\n                      </div>\n                      <p class=\"card-category\">Colaboradores</p>\n                      <h3 class=\"card-title\">+245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">update</i> Just Updated\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Relatório diário Projeto</h4>\n                      <p class=\"card-category\">\n                        <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> +15% </span> de conclusão nos projetos hoje.</p>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">access_time</i> atualizado há 4 minutos\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Ordens de serviço</h4>\n                      <p class=\"card-category\">Últimos desempenhos</p>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">access_time</i> enviada há 2 dias\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">OS concluída</h4>\n                      <p class=\"card-category\">Últimos desempenhos</p>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-tabs card-header-primary\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <span class=\"nav-tabs-title\">Tasks:</span>\n                          <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">bug_report</i> Bugs\n                                <div class=\"ripple-container\"></div>\n                              </a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">code</i> Website\n                                <div class=\"ripple-container\"></div>\n                              </a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">cloud</i> Server\n                                <div class=\"ripple-container\"></div>\n                              </a>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"tab-content\">\n                        <div class=\"tab-pane active\" id=\"profile\">\n                          <table class=\"table\">\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                </td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div class=\"tab-pane\" id=\"messages\">\n                          <table class=\"table\">\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                </td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div class=\"tab-pane\" id=\"settings\">\n                          <table class=\"table\">\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                </td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                      <span class=\"form-check-sign\">\n                                        <span class=\"check\"></span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                <td class=\"td-actions text-right\">\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                    <i class=\"material-icons\">edit</i>\n                                  </button>\n                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                        <thead class=\"text-warning\">\n                          <th>ID</th>\n                          <th>Name</th>\n                          <th>Salary</th>\n                          <th>Country</th>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>1</td>\n                            <td>Dakota Rice</td>\n                            <td>$36,738</td>\n                            <td>Niger</td>\n                          </tr>\n                          <tr>\n                            <td>2</td>\n                            <td>Minerva Hooper</td>\n                            <td>$23,789</td>\n                            <td>Curaçao</td>\n                          </tr>\n                          <tr>\n                            <td>3</td>\n                            <td>Sage Rodriguez</td>\n                            <td>$56,142</td>\n                            <td>Netherlands</td>\n                          </tr>\n                          <tr>\n                            <td>4</td>\n                            <td>Philip Chaney</td>\n                            <td>$38,735</td>\n                            <td>Korea, South</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<p>\n  list-projects works!\n</p>\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<p>\n    Projects\n</p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email2\" type=\"email\" class=\"validate\" required=\"\" aria-required=\"true\">\n          <label for=\"email2\">Email</label>\n        </div>\n        <div class=\"input-field col s12\">\n          <input id=\"example\" name=\"example\" type=\"text\" class=\"validate\" required=\"\" aria-required=\"true\">\n          <label for=\"example\">Field</label>\n        </div>\n        <div class=\"input-field col s12\">\n          <select required=\"\" aria-required=\"true\">\n  <option value=\"\" disabled selected>Choose your option</option>\n  <option value=\"1\">Option 1</option>\n  <option value=\"2\">Option 2</option>\n  <option value=\"3\">Option 3</option>\n  </select>\n          <label>Materialize Select</label>\n        </div>\n        <div class=\"input-field col s12\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-user works!\n</p>\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<p>\n  list-user works!\n</p>\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<p>\n  Users\n</p>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\" id='login-page'>\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Icon -->\n    <div class=\"fadeIn first\">\n      <img src=\"assets/default-user.png\" id=\"icon\" alt=\"User Icon\" />\n    </div>\n\n    <!-- Login Form -->\n    <form>\n      <input type=\"text\" [(ngModel)]=\"login\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"login\">\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" placeholder=\"senha\">\n      <input type=\"submit\" (click)=\"signin()\" class=\"fadeIn fourth\" value=\"Acessar\">\n      \n        <div class=\"fadeIn\" *ngIf=\"msgErro\"> \n          <p class=\"flow-text center-align \" >Usuário ou senha inválidos</p>\n        </div>\n\n    </form>\n\n    <!-- Remind Passowrd -->\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" href=\"#\">Esqueci minha senha</a>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(424);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaboratorsService = (function () {
    function CollaboratorsService(http) {
        this.http = http;
        this.url = "https://ezentis.herokuapp.com";
    }
    CollaboratorsService.prototype.cadastrar = function (colaborador) {
        console.table(colaborador);
        var url = this.url + "/api/colaboradores";
        var data = JSON.stringify(colaborador);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.post(url, data, { headers: headers }).toPromise();
    };
    CollaboratorsService.prototype.editar = function (colaborador) {
        console.table(colaborador);
        var url = this.url + "/api/colaboradores";
        var data = JSON.stringify(colaborador);
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.put(url, data, { headers: headers }).toPromise();
    };
    CollaboratorsService.prototype.listar = function () {
        var url = this.url + "/api/colaboradores";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    CollaboratorsService.prototype.buscarPorId = function (id) {
        var url = this.url + "/api/colaboradores/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-access-token', this.token);
        return this.http.get(url, { headers: headers }).toPromise();
    };
    CollaboratorsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CollaboratorsService);
    return CollaboratorsService;
    var _a;
}());
//# sourceMappingURL=C:/projeto_angular/ezentis/src/collaborators.service.js.map

/***/ })

},[788]);
//# sourceMappingURL=main.bundle.map