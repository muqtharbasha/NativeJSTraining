
var myApp = myApp || {};

myApp.videoService = (function () {
 
 'use strict';

    var data = {
        key: 'AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
        url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
        STATISTICS_API: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBtE1KvkOqkoLTDAie4kMu2SpxCegAvogE',
        maxResults: '15'
    }

    function getVideoApi(url) {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        var req = new Request(url, { method: 'GET', mode: 'cors', headers: headers });
        return fetch(req)
            .then((resp) => resp.json())
            .then(function (response) {
                return response;
            });
    }

    function searchVideos(searchQuery) {
        var videoList = [],
            videoIds = [],
            videoStatics,
            requestUrl = data.url + '&part=snippet&maxResults=' + data.maxResults + '&q=' + searchQuery;

        return getVideoApi(requestUrl).then(function (response) {
            videoList = response;
            videoList.items.forEach(function (item) {
                videoIds.push(item.id.videoId);
            });
            return getVideoStatics(videoIds);
        }).then(function (response) {
            videoStatics = response;
            videoList.items.forEach(function (item) {
                videoStatics.items.forEach(function (stats) {
                    if (stats.id == item.id.videoId) {
                        item.statistics = stats.statistics;
                        return;
                    }
                });
            });
            return videoList;
        });
    }

    function getVideoStatics(videoIds) {
        return getVideoApi(data.STATISTICS_API + '&part=statistics,snippet&id=' + videoIds.join());
    }

    return {
        getSearchData: searchVideos
    }

})();


