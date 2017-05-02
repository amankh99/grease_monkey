// ==UserScript==
// allow pasting
// @name        auto_login
// @namespace   http://facebook.com
// @description Auto login facebook
// @include     https://*facebook.com/
// @include     https://*facebook.com/login.php
// @version     1
// @grant       none
// ==/UserScript==

var uname = document.getElementsByClassName('inputtext').namedItem("email");
var passw = document.getElementsByClassName('inputtext').namedItem("pass");
uname.value = "Username"; // username goes here
passw.value = "Password"; // password goes here
document.forms.namedItem("login_form").submit();