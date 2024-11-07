// ==UserScript==
// @name         Connect to Awing
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Ấn chuột phải -> Tampermonkey -> Connect -> 6 hours
// @author       peashooter
// @match        *://v1.awingconnect.vn/*
// @grant        none
// @updateURL    https://github.com/speedtest002/Free-WIMesh-KTXB/raw/main/connect.user.js
// @downloadURL  https://github.com/speedtest002/Free-WIMesh-KTXB/raw/main/connect.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand("6 hours", function() {
        var usernameInput = document.querySelector('input[name="username"]');
        var passwordInput = document.querySelector('input[name="password"]');
        if (usernameInput && passwordInput) {
            usernameInput.value = atob("YXdpbmczNjA=");
            passwordInput.value = atob("QXdpbmczNjBAMjAxOA==");
            document.querySelector('form').submit();
        } else {
            console.log("fail");
        }
    });
})();
