// ==UserScript==
// @name         iCloud Link Extractor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Zeigt direkte iCloud-Links anstelle von Weiterleitungen an
// @author       Dein Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Alle Buttons mit der Klasse "matomo_download" suchen
    document.querySelectorAll('.button.matomo_download').forEach(button => {
        let targetUrl = button.getAttribute('data-content-target');

        // Falls eine URL existiert
        if (targetUrl) {
            let directLink = document.createElement('a');
            directLink.href = targetUrl;
            directLink.textContent = "🔗 Direkter iCloud-Link";
            directLink.style.display = "block";
            directLink.style.marginTop = "5px";
            directLink.style.fontWeight = "bold";
            directLink.style.color = "#007AFF"; // iCloud-Blauton
            directLink.style.textDecoration = "none";

            // Link neben dem Button hinzufügen
            button.parentNode.insertBefore(directLink, button.nextSibling);
        }
    });

})();
