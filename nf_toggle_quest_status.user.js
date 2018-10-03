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
        document.querySelectorAll('.qh-right .qh-rect img')
            .forEach(checkmark => {
                count++;
                checkmark.title = 'Toggle status';
                checkmark.alt = 'Toggle status';
                checkmark.addEventListener('click', event => {
                    event.preventDefault();
                    event.stopPropagation();

                    const toggleButton = checkmark
                        .closest('.quests-quests-block')
                        .querySelector('div.qh-complete');
                    toggleButton.click();

                    return false;
                }, true);
            });

        console.log('found', count, 'checkmarks');
    }, 3000);
})();