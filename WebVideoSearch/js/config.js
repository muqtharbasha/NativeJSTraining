/**
 * Common objects and configuration details
 */
var data = {
    key:'AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
    url:'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
    STATISTICS_API:'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
    maxResults:'15'
}

 var pageCount = 0,
        startIndex = 0,
        endIndex = 0,
        swipeStartX = 0,
        options = {
            totalItems: [],
            pageSize: 4,
            currentPageIndex: 0
        },
        tabResolution = {
            MIN_WIDTH: 450,
            MAX_WIDTH: 750
        },
        mobResolution = {
            MAX_WIDTH: 450,
            MIN_WIDTH: 0
        },
        width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

    window.addEventListener("resize", function () {
        initiatePaging();
    });

    window.addEventListener("touchstart", function (event) {
        swipeStartX = event.changedTouches[0].screenX;
    }, false);

    window.addEventListener("touchend", function (event) {
        swipeEndX = event.changedTouches[0].screenX;
        onSwipeEnd();
    }, false);