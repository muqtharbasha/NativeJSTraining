var myApp = myApp || {};
myApp.main = (function(videoService, ui){

     function getSearchResults(value) {
        videoService.getSearchData(value).then(function (response) {
            ui.searchResponse(response);
        });
    }

    function init() {
        ui.createSearch(getSearchResults);
    }

    init();

})(myApp.videoService, myApp.ui);