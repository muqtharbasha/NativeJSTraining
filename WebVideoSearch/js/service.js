
function getVideosApi(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(Error(request.statusText));
                }
            }
        };
        request.onerror = function () {
            reject(Error("Network Error"));
        };
        request.open('GET', url, true);
        request.send(data);
    });
}
