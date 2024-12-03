// ==UserScript==
// @name         Block Splash Screen on ipauniverse.com
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Versteckt den Splash-Screen auf ipauniverse.com
// @author       You
// @match        https://www.ipauniverse.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funktion, um das Splash-Screen Element zu blockieren
    function blockSplashScreen() {
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) {
            splashScreen.style.display = 'none'; // Versteckt das Splash-Screen
        }
    }

    // Sofort nach dem Laden und dann alle 500 ms erneut überprüfen
    window.addEventListener('load', function() {
        blockSplashScreen(); // Einmalig nach dem Laden blockieren
        setInterval(blockSplashScreen, 500); // Alle 500ms erneut überprüfen
    });
})();
