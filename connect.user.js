// ==UserScript==
// @name         Connect to Awing
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Ấn vào nút Connect trên web đăng nhập dể kết nối
// @author       peashooter
// @match        *://v1.awingconnect.vn/*
// @grant        none
// @updateURL    https://github.com/speedtest002/Free-WIMesh-KTXB/raw/main/connect.user.js
// @downloadURL  https://github.com/speedtest002/Free-WIMesh-KTXB/raw/main/connect.user.js
// ==/UserScript==

(function() {
    'use strict';

    function createButton() {
        
        const button = document.createElement("button");
        button.innerText = "Kết nối 2 tiếng";
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "#ffffff";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.zIndex = "1000";

        button.addEventListener("click", function() {
            var usernameInput = document.querySelector('input[name="username"]');
            var passwordInput = document.querySelector('input[name="password"]');
            if (usernameInput && passwordInput) {
                usernameInput.value = "awing120";
                passwordInput.value = "Awing120@2018";
                document.querySelector('form').submit();
            } else {
                console.log("Không tìm thấy các trường username và password.");
            }
        });
        document.body.appendChild(button);
    }
    window.addEventListener("load", createButton);
})();
