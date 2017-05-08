// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.


// Search with Ajax call
function search() {

    var videosList = [],
        videoIds = [];
    var query = document.getElementById('query').value,
        searchUrl = data.url + '&part=snippet&maxResults=' + data.maxResults + '&q=' + query;

    getVideosApi(searchUrl).then(function (response) {
        videoList = JSON.parse(response);
        videoList.items.forEach(function (item) {
            videoIds.push(item.id.videoId);
        });
        return getVideoStatics(videoIds);
    }).then(function (response) {
        // var videoStatics = JSON.parse(response);
        // videoList.items.forEach(function (item) {
        //     videoStatics.items.forEach(function (stats) {
        //         if (stats.id == item.id.videoId) {
        //             item.statistics = stats.statistics;
        //             return;
        //         }
        //     });
        // });

        onSearchResponse(videoList);
    });
}

function getVideoStatics(videoIds) {
    return getVideosApi(data.STATISTICS_API + '&part=statistics,snippet&id=' + videoIds.join());
}

//Binds api data to html elements
function onSearchResponse(searchResultsList) {
    options.totalItems = [];
    clearElementsData();

    var searchResultsWrapper = document.createElement('div');
    searchResultsWrapper.setAttribute('id', 'container');
    var tiles = document.createElement('ul');
    tiles.classList.add('tiles');

    while (tiles.hasChildNodes()) {
        tiles.removeChild(tiles.lastChild);
    }

    searchResultsList.items.forEach(function (item) {
        options.totalItems.push(item);
        tiles.appendChild(createTiles(item));
    });

    searchResultsWrapper.appendChild(tiles);
    document.body.appendChild(searchResultsWrapper);

    initiatePaging();
}

//Clears data from html elements
function clearElementsData() {
    var elem = document.getElementById("container");
    if (elem) {
        elem.parentElement.removeChild(elem);
    }
}

function createTiles(item) {

    var videoData = {
        publishedAt: item.snippet.publishedAt,
        channelId: item.snippet.channelId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnails_default: item.snippet.thumbnails.default.url,
        viewsCount: item.statistics ? item.statistics.viewCount : 0,
        videoID: item.id.videoId
    }
    var tmpl = document.querySelector('#mytemplate'),
        clonedEle = document.importNode(tmpl.content, true);

    var tileEle = clonedEle.querySelector('.title'),
        videoEle = clonedEle.querySelector('#videoID'),
        imgEle = clonedEle.querySelector('#imgTD'),
        publishedAtEle = clonedEle.querySelector('.publishedAt'),
        descriptionEle = clonedEle.querySelector('.description'),
        viewsCount = clonedEle.querySelector('.viewsCount')

    tileEle.appendChild(document.createTextNode(videoData.title));
    videoEle.setAttribute("href", "http://www.youtube.com/watch?v=" + videoData.videoID);
    imgEle.setAttribute("src", videoData.thumbnails_default);
    viewsCount.appendChild(document.createTextNode(videoData.viewsCount));
    publishedAtEle.appendChild(document.createTextNode(videoData.publishedAt));
    descriptionEle.appendChild(document.createTextNode(videoData.description));

    return clonedEle;
}

function displayTiles() {
    var container = document.getElementById("container"),
        prePageIndex = startIndex;
    if (container) {
        var tiles = container.querySelector('.tiles');
    }
    startIndex = (options.currentPageIndex * options.pageSize);
    if (startIndex > options.totalItems.length) {
        startIndex = 0;
        options.currentPageIndex = 0;
    }
    endIndex = startIndex + options.pageSize;

    tiles.querySelectorAll("li").forEach(function (ele, index) {
        if (index >= startIndex && index < endIndex) {
            ele.classList.remove("hide");
        } else {
            ele.classList.add("hide");
        }
    });
    createPager();
}

function createPager() {
    var body = document.body,
        ul = document.createElement('ul'),
        pagerDiv = document.getElementById('pages'),
        li = null;

    pagecount = Math.round(options.totalItems.length / options.pageSize);

    for (var i = 0; i < pagecount; i++) {
        li = document.createElement("li");
        li.setAttribute("pageindex", i)
        li.appendChild(document.createTextNode(i + 1));
        li.addEventListener('click', function (event) {
            event.target.parentNode.childNodes.forEach(function (element) {
                element.classList.remove("selected");
            });
            event.target.classList.add("selected");
            options.currentPageIndex = parseInt(event.target.attributes["pageindex"].value);
            displayTiles();
        });
        ul.appendChild(li);
    }

    ul.className = "pager";
    ul.childNodes.forEach(function (childNode) {
        if (childNode.attributes["pageindex"].value == options.currentPageIndex) {
            childNode.classList.add("selected");
            return;
        }
    });

    if (pagerDiv != null) {
        while (pagerDiv.firstChild) {
            pagerDiv.removeChild(pagerDiv.firstChild);
        }
        pagerDiv.appendChild(ul);
    } else {
        pagerDiv = document.createElement("div");
        pagerDiv.id = "pages";
        pagerDiv.appendChild(ul);
    }
    body.appendChild(pagerDiv);
}

function initiatePaging() {
    width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    if (width < tabResolution.MAX_WIDTH && width > tabResolution.MIN_WIDTH) {
        options.pageSize = 2;
    } else if (width < tabResolution.MAX_WIDTH) {
        options.pageSize = 1;
    } else {
        options.pageSize = 4;
    }
    displayTiles();
}
