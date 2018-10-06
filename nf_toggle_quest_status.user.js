// ==UserScript==
// @name         NF Toggle Quest Status
// @namespace    https://github.com/tobbe
// @version      0.1
// @description  Toggle quest status by clicking on icon
// @license      MIT
// @author       Tobbe
// @match        https://www.nerdfitness.com/level-up/my-quests/
// @grant        unsafeWindow
// ==/UserScript==

const URL_START = 'https://www.nerdfitness.com/wp-admin/admin-ajax.php' +
    '?action=alm_query_posts&query_type=standard';

(function() {
    'use strict';
    let count = 0;

    function addClickListeners() {
        document.querySelectorAll('.qh-right .qh-rect img')
            .forEach(checkmark => {
                if (checkmark.title === 'Toggle status') {
                    // Already processed this checkmark
                    // Don't want to add another click event listener
                    return;
                }

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
        count = 0;
    }

    unsafeWindow
        .jQuery(document)
        .ajaxComplete((event, jqXHR, ajaxOptions) => {
            if (ajaxOptions.url.startsWith(URL_START)) {
                addClickListeners();
            }
        });
})();