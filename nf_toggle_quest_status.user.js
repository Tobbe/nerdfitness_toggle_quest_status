// ==UserScript==
// @name         NF Toggle Quest Status
// @namespace    https://github.com/tobbe
// @version      0.1
// @description  Toggle quest status by clicking on icon
// @license      MIT
// @author       Tobbe
// @match        https://www.nerdfitness.com/level-up/my-quests/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let count = 0;

    setTimeout(() => {
        document.querySelectorAll('.qh-right .qh-rect img').forEach(checkmark => {
            count++;
            checkmark.title = 'Toggle status';
            checkmark.alt = 'Toggle status';
            checkmark.onclick = () => {
                console.log('click');
            };
        });

        console.log('found', count, 'checkmarks');
    }, 3000);
})();