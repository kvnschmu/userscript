// ==UserScript==
// @name         Zeige Katfile und Catbox Links auf ipauniverse.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Zeigt alle Links zu Katfile.com und Files.catbox.moe auf ipauniverse.com an
// @author       You
// @match        https://www.ipauniverse.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funktion, um Links zu Katfile und Catbox zu extrahieren
    function showSpecificLinks() {
        // Suche alle Links auf der Seite
        const links = document.querySelectorAll('a[href]');

        // Filtere nur Links, die zu Katfile oder Catbox führen
        const filteredLinks = Array.from(links).filter(link => {
            const href = link.href.toLowerCase();
            return href.includes('https://katfile.com/') || href.includes('https://files.catbox.moe/');
        });

        if (filteredLinks.length > 0) {
            // Erstelle ein Container-Element, um die Links anzuzeigen
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '20px';
            container.style.right = '20px';
            container.style.backgroundColor = '#fff';
            container.style.border = '1px solid #000';
            container.style.padding = '10px';
            container.style.zIndex = '9999';
            container.style.maxHeight = '80vh';
            container.style.overflowY = 'auto';
            container.style.width = '300px';
            container.innerHTML = '<h3>Gefundene Katfile & Catbox Links:</h3>';

            // Füge alle gefilterten Links als Listenelemente hinzu
            filteredLinks.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.href;
                linkElement.target = '_blank';
                linkElement.innerText = link.href;
                linkElement.style.display = 'block';
                linkElement.style.marginBottom = '5px';
                container.appendChild(linkElement);
            });

            // Füge den Container zum Body hinzu
            document.body.appendChild(container);
        }
    }

    // Warte, bis die Seite vollständig geladen ist
    window.addEventListener('load', showSpecificLinks);
})();
