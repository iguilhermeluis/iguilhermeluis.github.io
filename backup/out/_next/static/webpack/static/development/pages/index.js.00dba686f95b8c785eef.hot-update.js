webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LoginComponent.js":
/*!**************************************!*\
  !*** ./components/LoginComponent.js ***!
  \**************************************/
/*! exports provided: Input, Button, FacebookButton, GoogleButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookButton", function() { return FacebookButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleButton", function() { return GoogleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/home/kali/react-projetos/berap.tv/components/LoginComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 1.8rem;\n  margin-bottom: 1rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: #f7f7f7;\n  border-color: #aaa;\n  color: #484848;\n  box-shadow: rgba(0, 0, 0, 0.25) -1px 2px 2px;\n  padding: 2rem 3rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: #4c69ba;\n  background-image: linear-gradient(#4c69ba, #3b55a0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354c8c;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background: #2f9595;\n  border-radius: 0.5rem;\n  color: #e8ebeb;\n  font-size: 1.6rem;\n\n  width: 100%;\n  border: 0;\n  padding: 1rem 0;\n  transition: 0.5s;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 20rem;\n  height: auto;\n  margin-bottom: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  display: block;\n  padding: 1.5rem;\n  font-size: 1.4rem;\n  color: rgb(185, 187, 190);\n  border-radius: 0.5rem;\n  border: 0px;\n  outline-color: rgb(47, 149, 149);\n  background: #f5f5f5;\n  box-shadow: rgba(0, 0, 0, 0.25) -1px 2px 2px;\n  margin-bottom: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: block;\n  flex-direction: column;\n  align-items: center;\n  min-height: 32rem;\n  width: 100% !important;\n  flex: 1;\n  border-radius: 0.6rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background: #fff;\n  border-radius: 0.4rem;\n  color: #123;\n  width: 12rem;\n  height: 4.5rem;\n  border: 0;\n  cursor: pointer;\n  /* margin: 0 1rem 0 2rem; */\n  margin-right: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ButtonLogin = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button(_templateObject());
var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form(_templateObject3());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input(_templateObject4());
var ImgDrawTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img(_templateObject5());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button(_templateObject6());
var FacebookButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Button)(_templateObject7());
var GoogleButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Button)(_templateObject8());
var TitleModal = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h3(_templateObject9());
function LoginComponent() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      emailUser = _useState[0],
      setEmailUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      passwordUser = _useState2[0],
      setPasswordUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      nameBattle = _useState3[0],
      setNameBattle = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            router.push({
              pathname: "/panel",
              query: {
                name: "Zeit"
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  var handleClickCreateUser = function handleClickCreateUser(email, name) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleClickCreateUser$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.warn("dados", email, name);
            url = "https://berap.com.br/index.php/api-tv/cadastra-roda?email=".concat(email);
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url));

          case 4:
            response = _context2.sent;
            console.warn("token", response);
            localStorage.setItem("info", JSON.stringify(response.data));
            router.push({
              pathname: "/panel",
              query: {
                page: "myAccount"
              }
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var responseFacebook = function responseFacebook(response) {
    console.log("facebook", response);
    handleClickCreateUser("guilhermel.faustino@gmail.com");
  };

  var responseGoogle = function responseGoogle(response) {
    sessionStorage.setItem("userData", JSON.stringify(response));
    console.table("google");
    localStorage.setItem("imageUrl", response.profileObj.imageUrl);
    localStorage.setItem("nameProfile", response.profileObj.name);
    handleClickCreateUser(response.profileObj.email, response.profileObj.name);
  };

  return __jsx(ModalContainer, {
    className: "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(ImgDrawTitle, {
    src: "/images/login-girl-play.svg",
    alt: "Fa\xE7a seu login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(TitleModal, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "Cadastre sua roda de rima")), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(Form, {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2700938043",
    __self: this
  }, ".my-facebook-button-class{border-radius:0.5rem;color:#e8ebeb;font-size:1.6rem;width:100%;border:0;padding:1rem 0;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;margin-bottom:0.5rem;background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbGkvcmVhY3QtcHJvamV0b3MvYmVyYXAudHYvY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTDZCLEFBR29DLHFCQUNQLGNBQ0csaUJBQ04sV0FDRixTQUNNLGVBQ0Msd0NBQ0QsZUFDTSxxQkFDSSx5QkFDMEIsa0RBQ3JEIiwiZmlsZSI6Ii9ob21lL2thbGkvcmVhY3QtcHJvamV0b3MvYmVyYXAudHYvY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCJyZWFjdGpzLXBvcHVwXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiO1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQnV0dG9uTG9naW4gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiAjMTIzO1xuICB3aWR0aDogMTJyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogbWFyZ2luOiAwIDFyZW0gMCAycmVtOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMycmVtO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHJnYigxODUsIDE4NywgMTkwKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZS1jb2xvcjogcmdiKDQ3LCAxNDksIDE0OSk7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgLTFweCAycHggMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuY29uc3QgSW1nRHJhd1RpdGxlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogIzJmOTU5NTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjb2xvcjogI2U4ZWJlYjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMXJlbSAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2OWJhO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRjNjliYSwgIzNiNTVhMCk7XG4gIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRjOGM7XG5gO1xuXG5leHBvcnQgY29uc3QgR29vZ2xlQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgLTFweCAycHggMnB4O1xuICBwYWRkaW5nOiAycmVtIDNyZW07XG5gO1xuXG5jb25zdCBUaXRsZU1vZGFsID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ29tcG9uZW50KCkge1xuICBjb25zdCBbZW1haWxVc2VyLCBzZXRFbWFpbFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZFVzZXIsIHNldFBhc3N3b3JkVXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbbmFtZUJhdHRsZSwgc2V0TmFtZUJhdHRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogXCIvcGFuZWxcIixcbiAgICAgIHF1ZXJ5OiB7IG5hbWU6IFwiWmVpdFwiIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja0NyZWF0ZVVzZXIgPSBhc3luYyAoZW1haWwsIG5hbWUpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXCJkYWRvc1wiLCBlbWFpbCwgbmFtZSk7XG4gICAgbGV0IHVybCA9IGBodHRwczovL2JlcmFwLmNvbS5ici9pbmRleC5waHAvYXBpLXR2L2NhZGFzdHJhLXJvZGE/ZW1haWw9JHtlbWFpbH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc29sZS53YXJuKFwidG9rZW5cIiwgcmVzcG9uc2UpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbmZvXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcblxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBcIi9wYW5lbFwiLFxuICAgICAgcXVlcnk6IHsgcGFnZTogXCJteUFjY291bnRcIiB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZhY2Vib29rXCIsIHJlc3BvbnNlKTtcbiAgICBoYW5kbGVDbGlja0NyZWF0ZVVzZXIoXCJndWlsaGVybWVsLmZhdXN0aW5vQGdtYWlsLmNvbVwiKTtcbiAgfTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXG4gICAgY29uc29sZS50YWJsZShcImdvb2dsZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlVXJsXCIsIHJlc3BvbnNlLnByb2ZpbGVPYmouaW1hZ2VVcmwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVByb2ZpbGVcIiwgcmVzcG9uc2UucHJvZmlsZU9iai5uYW1lKTtcbiAgICBoYW5kbGVDbGlja0NyZWF0ZVVzZXIocmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCwgcmVzcG9uc2UucHJvZmlsZU9iai5uYW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbENvbnRhaW5lciBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgey8qPGEgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtjbG9zZX0+XG4gICAgICAgICAgICAmdGltZXM7XG4gICAgICA8L2E+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPEltZ0RyYXdUaXRsZSBzcmM9XCIvaW1hZ2VzL2xvZ2luLWdpcmwtcGxheS5zdmdcIiBhbHQ9XCJGYcOnYSBzZXUgbG9naW5cIiAvPlxuICAgICAgICA8VGl0bGVNb2RhbD5DYWRhc3RyZSBzdWEgcm9kYSBkZSByaW1hPC9UaXRsZU1vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgey8qXG4gICAgICAgICAgXG4gICAgICAgICAgKi99XG4gICAgICAgICAgey8qPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZS1tYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbWFpbFVzZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPiovfVxuXG4gICAgICAgICAgey8qPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9CdXR0b24+Ki99XG5cbiAgICAgICAgICB7LypcblxuICAgICAgICAgIDxGYWNlYm9va0xvZ2luXG4gICAgICAgICAgICBhcHBJZD1cIjUyMzYxNjQ0NTA1MDMzOFwiXG4gICAgICAgICAgICAvL2FwcElkPVwiMjQ0MzE1MjkwNTkwODY3MlwiXG4gICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxuICAgICAgICAgICAgc2NvcGU9XCJwdWJsaWNfcHJvZmlsZVwiXG4gICAgICAgICAgICB0ZXh0QnV0dG9uPVwiIEVudHJhciBjb20gRmFjZWJvb2tcIlxuICAgICAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcbiAgICAgICAgICAgIGNzc0NsYXNzPVwibXktZmFjZWJvb2stYnV0dG9uLWNsYXNzXCJcbiAgICAgICAgICAgIGNhbGxiYWNrPXtlID0+IHJlc3BvbnNlRmFjZWJvb2soZSl9XG4gICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgPEZhY2Vib29rQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICBFbnRyYXIgY29tIEZhY2Vib29rXG4gICAgICAgICAgICAgIDwvRmFjZWJvb2tCdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgKi99XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5teS1mYWNlYm9vay1idXR0b24tY2xhc3Mge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjZThlYmViO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjliYTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0YzY5YmEsICMzYjU1YTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgY2xpZW50SWQ9XCIyNDc3MzU1OTk1ODctanBiczB2ZmduMzQ3ZGZsMHR0OWZ2bmIxMjN1MzA4dHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgICAgLy9jbGllbnRJZD1cIjkyMTcyMjE4NjQyMi1ycWh1czJ0ZjdjNTZoNmJpcTh1b2EzNTRnNDg5YjI3YS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICBidXR0b25UZXh0PVwiRW50cmFyIGNvbSBHb29nbGVcIlxuICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICBjb29raWVQb2xpY3k9XCJzaW5nbGVfaG9zdF9vcmlnaW5cIlxuICAgICAgICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcbiAgICAgICAgICAgICAgPEdvb2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50cmFyIGNvbSBHb29nbGVcbiAgICAgICAgICAgICAgPC9Hb29nbGVCdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWxDb250YWluZXI+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/kali/react-projetos/berap.tv/components/LoginComponent.js */"), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
    clientId: "247735599587-jpbs0vfgn347dfl0tt9fvnb123u308tr.apps.googleusercontent.com" //clientId="921722186422-rqhus2tf7c56h6biq8uoa354g489b27a.apps.googleusercontent.com"
    ,
    buttonText: "Entrar com Google",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    render: function render(renderProps) {
      return __jsx(GoogleButton, {
        type: "button",
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 15
        }
      }, "Entrar com Google");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.00dba686f95b8c785eef.hot-update.js.map