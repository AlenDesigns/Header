define(["jquery"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var $searchTextBox = $('#search-textbox');
        var $searchDropdown = $('#search-dropdown');
        var searchOpen = false;
        $searchTextBox.keyup(function() {
            if($(this).val().length >= 3) {
                if(searchOpen == false) {
                    $searchDropdown.slideDown(250);
                }
                searchOpen = true;
            } else {
                if (searchOpen) {
                    $searchDropdown.slideUp(250);
                }
                searchOpen = false;
            }
        });
    });
});