// ==UserScript==
// @name         My Custom Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Custom user script
// @match        https://haijiao.com/post/details?pid=*
// @grant        GM_xmlhttpRequest
// @require      https://lib.baomitu.com/hls.js/0.15.0-alpha.2/hls.min.js?id=1s
// @require      https://lib.baomitu.com/dplayer/1.25.0/DPlayer.min.js
// @require      https://raw.githubusercontent.com/lookmel/md5l/main/wejs.js
// ==/UserScript==

(function() {
    'use strict';

    // 创建播放按钮
    let floatButton = document.createElement("button");
    floatButton.textContent = "点击播放";
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

                // 创建视频播放器容器
                let playerDiv = document.createElement("div");
                playerDiv.style.position = "fixed";
                playerDiv.style.width = "100%";
                playerDiv.style.height = "100%";
                playerDiv.style.top = "0";
                playerDiv.style.left = "0";
                playerDiv.style.zIndex = "99999";
                playerDiv.id = "dplayer";
                document.body.appendChild(playerDiv);

                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    // 使用 hls.js 播放 HLS 流
                    var playerElement = document.createElement("video");
                    if(Hls.isSupported()) {
                        var hls = new Hls();
                        hls.loadSource(downloadUrl);
                        hls.attachMedia(playerElement);
                    }
                    playerDiv.appendChild(playerElement);
                } else {
                    // 使用 DPlayer 播放 HLS 流
                    const dp = new DPlayer({
                        container: document.getElementById('dplayer'),
                        screenshot: true,
                        video: {
                            url: downloadUrl,
                            type: 'hls'
                        }
                    });
                }
            }
        });
    });
})();
