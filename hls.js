// ==UserScript==
// @name         My Custom Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Custom user script
// @match        https://haijiao.com/post/details?pid=*
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/lookmel/md5l/main/wejs.js
// @require      https://lib.baomitu.com/hls.js/0.15.0-alpha.2/hls.min.js?id=1s
// ==/UserScript==

(function() {
    'use strict';

    let floatButton = document.createElement("button");
    floatButton.textContent = "点击我！";
    floatButton.style.position = "fixed";
    floatButton.style.left = "0";
    floatButton.style.top = "50%";
    floatButton.style.zIndex = "99999";
    document.body.appendChild(floatButton);

    floatButton.addEventListener('click', () => {
        var urlParams = new URLSearchParams(window.location.search);
        var pid = urlParams.get('pid');
        var timestamp = new Date().getTime();

        var encryptedTimestamp = my_md5.encodee(timestamp.toString());
        var encryptedPid = my_md5.encodee(pid);

        let finalSign = encryptedPid;
        let finalTimestamp = encryptedTimestamp;

        let url = "https://api.jsxl.pro/haijiao1/checkVideoInfo?sign=" + finalSign + "&origin=2" + "&timestamp=" + finalTimestamp;

        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onload: function(response) {
              let downloadUrl = JSON.parse(response.responseText).downloadUrl;

              let fullscreenDiv = document.createElement("div");
              fullscreenDiv.style.position = "fixed";
              fullscreenDiv.style.width = "100%";
              fullscreenDiv.style.height = "100%";
              fullscreenDiv.style.top = "0";
              fullscreenDiv.style.left = "0";
              fullscreenDiv.style.zIndex = "99999";

              let player = document.createElement("video");
              player.controls = "controls";
              player.style.width = "100%";
              player.style.height = "100%";
              fullscreenDiv.appendChild(player);
              document.body.appendChild(fullscreenDiv);

              if (Hls.isSupported()) {
                  var hls = new Hls();
                  hls.loadSource(downloadUrl);
                  hls.attachMedia(player);
                  hls.on(Hls.Events.MANIFEST_PARSED, function() {
                     player.play();
                  });
               } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
                  player.src = downloadUrl;
                  player.addEventListener('loadedmetadata', function() {
                     player.play();
                  });
               }

                console.log("播放器链接: " + player.src);
            }
        });
    });
})();
