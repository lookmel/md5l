window.wt_init_code = true;
var ed = 'JTVRjd05qSXdNREF6TkRReU13PT0=';
var __encode = 'jsjiami.com';
var _a = {};
var _0xb483 = [
    '_decode',
    'http://www.sojson.com/javascriptobfuscator.html'
];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
}(_a));

window['decode'] = function (_0x4c89x1, _0x4c89x2, _0x4c89x3) {
    const _0x4c89x4 = {};
    const WT47489827 = 'wt47489827';
    const WT20925387 = 'wt20925387';
    _0x4c89x4[WT47489827] = atobb;
    if (!_0x4c89x2['_CONFIG_']['user'] || !_0x4c89x2['_CONFIG_']['user']['token']) {
        GM_setValue('wt_haijiao_user', '');
        logout(_0x4c89x2);
        return '';
    }
    ;
    _0x4c89x4[WT20925387] = escape;
    const MD5X = md5x(_0x4c89x2['_CONFIG_']['user']['token'], 'de');
    if (MD5X['date'] != _0x4c89x2['_CONFIG_']['user']['login_date']) {
        GM_setValue('wt_video_user', '');
        logout(_0x4c89x2);
        return '';
    }
    ;
    if (_0x4c89x3) {
        return decodeURIComponent(_0x4c89x4[WT20925387](_0x4c89x4[WT47489827](_0x4c89x4[WT47489827](_0x4c89x4[WT47489827](_0x4c89x1)))));
    } else {
        return decodeURIComponent(_0x4c89x4[WT47489827](_0x4c89x4[WT47489827](_0x4c89x4[WT47489827](_0x4c89x1))));
    }
};
window['encode'] = function (_0x4c89x1, _0x4c89x3) {
    const BTOAA = btoaa;
    const _UNESCAPE = unescape;
    const _ENCODEURICOMPONENT = encodeURIComponent;
    if (_0x4c89x3) {
        return BTOAA(BTOAA(BTOAA(_UNESCAPE(_ENCODEURICOMPONENT(_0x4c89x1)))));
    } else {
        return BTOAA(BTOAA(BTOAA(_0x4c89x1)));
    }
};
window['md5x'] = function (_0x4c89x1, _0x4c89xb) {
    try {
        if (!_0x4c89xb) {
            const _0x4c89xc = '1703865600000';
            const _0x4c89xd = new Date()['getDate']();
            const _0x4c89xe = _0x4c89xc['substring'](4, 8) * new Date()['getDate']() + '';
            return btoaa(btoaa(JSON['stringify']({
                date: _0x4c89xc,
                code: _0x4c89xe,
                day: _0x4c89xd
            })));
        } else {
            const _0x4c89x7 = JSON['parse'](atobb(atobb(_0x4c89x1)));
            if (new Date(Number(_0x4c89x7['date']))['getTime']() + 86400000 < Date['now']()) {
                throw Error('md5x expire');
            }
            ;
            if (_0x4c89x7['day'] != new Date(Number(_0x4c89x7['date']))['getDate']()) {
                throw Error('md5x err');
            }
            ;
            const _0x4c89xe = (new Date(Number(_0x4c89x7['date']))['setHours'](0, 0, 0, 0) + '')['substring'](4, 8) * _0x4c89x7['day'];
            if (_0x4c89xe != _0x4c89x7['code']) {
                throw Error('md5x err2');
            }
            ;
            return _0x4c89x7;
        }
    } catch (e) {
        console['log']('md5x err');
        return '';
    }
};
window['getM3u8Path'] = function (_0x4c89xf) {
    if (location['hostname'] == 'hjdf39.com' && !_0x4c89xf['startsWith']('http')) {
        _0x4c89xf = 'https://hja450.top' + _0x4c89xf;
    }
    ;
    var xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest['open']('GET', _0x4c89xf, false);
    xMLHttpRequest['send'](null);
    if (xMLHttpRequest['status'] !== 200) {
        console['log']('解析失败!');
        return _0x4c89xf;
    }
    ;
    let _num_1 = xMLHttpRequest['responseText']['split']('\n')[6];
    let _num_2 = _num_1['match'](/([\w_]+_?)[\d]+.ts/);
    return _num_1['replace'](_num_2[0], _num_2[1] + '.m3u8');
};
window['formatData'] = function (_0x4c89x13, _0x4c89x2) {
    const _0x4c89x4 = {};
    const WT27910567 = 'wt27910567';
    _0x4c89x4[WT27910567] = atobb;
    if (!_0x4c89x2['_CONFIG_']['user'] || !_0x4c89x2['_CONFIG_']['user']['token']) {
        GM_setValue('wt_video_user', '');
        logout(_0x4c89x2);
        return '';
    }
    ;
    const MD5X = md5x(_0x4c89x2['_CONFIG_']['user']['token'], 'de');
    if (MD5X['date'] != _0x4c89x2['_CONFIG_']['user']['login_date']) {
        GM_setValue('wt_video_user', '');
        logout(_0x4c89x2);
        return '';
    }
    ;
    let _num_3 = _0x4c89x13['url'];
    let _num_4 = window['location']['href'];
    if (_0x4c89x2['_CONFIG_']['currentPlayerNode']['pathFormat'] && _0x4c89x2['_CONFIG_']['currentPlayerNode']['pathFormat']['reg']['test'](window['location']['href'])) {
        _num_4 = window['location']['href']['replace'](_0x4c89x2['_CONFIG_']['currentPlayerNode']['pathFormat']['rep'][0], _0x4c89x2['_CONFIG_']['currentPlayerNode']['pathFormat']['rep'][1]);
    }
    ;
    if (_num_4['includes']('v.qq.com') && /\/cover(\/.)*\/[^/]{15}/['test'](_num_4)) {
        const _0x4c89x15 = /\/cover(\/.)*\/([^/]{15})/['exec'](_num_4);
        _num_4 = 'https://m.v.qq.com/x/m/play?cid=' + _0x4c89x15[_0x4c89x15['length'] - 1];
    }
    ;
    return _num_3 += _num_4;
};
window['getM3u8Url'] = function (_0x4c89x2) {
    try {
        if (!_0x4c89x2['_CONFIG_']['user'] || !_0x4c89x2['_CONFIG_']['user']['token']) {
            return '';
        }
        ;
        if (!md5x(_0x4c89x2['_CONFIG_']['user']['token'], 'de')) {
            throw new Error('getM3u8Url err');
        }
        ;
        if (/m3u8\?auth_key/['test'](_0x4c89x2['_CONFIG_']['videoUrl'])) {
            return _0x4c89x2['_CONFIG_']['videoUrl']['replace']('10play', 'long');
        }
    } catch (e) {
        console['log']('getM3u8Url err');
        return '';
    }
};
(function (__encode, _0x4c89x17, _0x4c89x18_1_1, _0x4c89x19, _0x4c89x18_1_1, _num_5) {
    _num_5 = 'undefined';
    _0x4c89x19 = function (message) {
        if (typeof alert !== _num_5) {
            alert(message);
        }
        ;
        if (typeof console !== _num_5) {
            console['log'](message);
        }
    };
    _0x4c89x18_1_1 = function (_0x4c89x1d, _0x4c89x16) {
        return _0x4c89x1d + _0x4c89x16;
    };
    _0x4c89x18_1_1 = _0x4c89x18_1_1('删除', _0x4c89x18_1_1(_0x4c89x18_1_1('版本号，js会定', '期弹窗，'), '还请支持我们的工作'));
    try {
        __encode = __encode;
        if (!(typeof __encode !== _num_5 && __encode === _0x4c89x18_1_1('jsjia', 'mi.com'))) {
            _0x4c89x19(_0x4c89x18_1_1);
        }
    } catch (e) {
        _0x4c89x19(_0x4c89x18_1_1);
    }
}({}));
var __encode = 'jsjiami.com';
var _a = {};
var _0xb483 = [
    '_decode',
    'http://www.sojson.com/javascriptobfuscator.html'
];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
}(_a));

function getM3u8Path(remoteUrl) {
    if (!remoteUrl['remoteUrl']) {
        remoteUrl = { remoteUrl: remoteUrl };
    }
    ;
    if (location['hostname'] == 'hjdf39.com' && !remoteUrl['remoteUrl']['startsWith']('http')) {
        remoteUrl['remoteUrl'] = 'https://hja450.top' + remoteUrl['remoteUrl'];
    }
    ;
    var xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest['open']('GET', remoteUrl['remoteUrl'], false);
    xMLHttpRequest['send'](null);
    if (xMLHttpRequest['status'] !== 200) {
        return remoteUrl['remoteUrl'];
    }
    ;
    let _num_6 = xMLHttpRequest['responseText']['split']('\n')[6];
    let _num_7 = _num_6['match'](/([\w_]+_?)[\d]+.ts/);
    const _NUM = _num_6['replace'](_num_7[0], _num_7[1] + '.m3u8');
    const _NUM_1 = /\/(\d{8}.+)/['exec'](_NUM);
    return (remoteUrl['keyPath'] ? remoteUrl['keyPath'] : 'https://haijiao.store/ts2/mp4/') + _NUM_1[1]['replaceAll']('/', '_');
}
(function (__encode, _0xbd94x9, _0xbd94xa_1_1, _0xbd94xb, _0xbd94xa_1_1, _num_8) {
    _num_8 = 'undefined';
    _0xbd94xb = function (message) {
        if (typeof alert !== _num_8) {
            alert(message);
        }
        ;
        if (typeof console !== _num_8) {
            console['log'](message);
        }
    };
    _0xbd94xa_1_1 = function (_0xbd94xf, _0xbd94x8) {
        return _0xbd94xf + _0xbd94x8;
    };
    _0xbd94xa_1_1 = _0xbd94xa_1_1('删除', _0xbd94xa_1_1(_0xbd94xa_1_1('版本号，js会定', '期弹窗，'), '还请支持我们的工作'));
    try {
        __encode = __encode;
        if (!(typeof __encode !== _num_8 && __encode === _0xbd94xa_1_1('jsjia', 'mi.com'))) {
            _0xbd94xb(_0xbd94xa_1_1);
        }
    } catch (e) {
        _0xbd94xb(_0xbd94xa_1_1);
    }
}({}));
var __encode = 'jsjiami.com';
var _a = {};
var _0xb483 = [
    '_decode',
    'http://www.sojson.com/javascriptobfuscator.html'
];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
}(_a));

window['get_m3u8_url_91'] = function (_0x5422x1) {
    try {
        if (!_0x5422x1['_CONFIG_']['user'] || !_0x5422x1['_CONFIG_']['user']['token']) {
            return '';
        }
        ;
        if (!md5x(_0x5422x1['_CONFIG_']['user']['token'], 'de')) {
            throw new Error('getM3u8Url err');
        }
        ;
        if (/m3u8\?auth_key/['test'](_0x5422x1['_CONFIG_']['videoUrl'])) {
            if (!ed || !(atobb(atobb(ed['substring'](1))) > Date['now']())) {
                alert(decodeURIComponent(atobb(atobb('SlVVNEpVRkdKVUkzSlVVMUpUbERKVUU0SlVVMUpUaEdKVGhCSlVVMkpUazNKVUkySlVVNEpVRXhKVGhESlVVMEpVSTVKVGt3SlVVM0pVSkVKVGt4SlVVM0pVRkNKVGs1YUhSMGNITWxNMEVsTWtZbE1rWnFjM2hzTG5CeWJ5VkZPQ1U0UlNWQ055VkZOU1U0UmlVNU5nPT0='))));
                return '';
            }
            ;
            return _0x5422x1['_CONFIG_']['videoUrl']['replace']('10play', 'long');
        }
    } catch (e) {
        return '';
    }
};
(function (__encode, _0x5422x3, _0x5422x4_1_1, _0x5422x5, _0x5422x4_1_1, _num_9) {
    _num_9 = 'undefined';
    _0x5422x5 = function (message) {
        if (typeof alert !== _num_9) {
            alert(message);
        }
        ;
        if (typeof console !== _num_9) {
            console['log'](message);
        }
    };
    _0x5422x4_1_1 = function (_0x5422x9, _0x5422x2) {
        return _0x5422x9 + _0x5422x2;
    };
    _0x5422x4_1_1 = _0x5422x4_1_1('删除', _0x5422x4_1_1(_0x5422x4_1_1('版本号，js会定', '期弹窗，'), '还请支持我们的工作'));
    try {
        __encode = __encode;
        if (!(typeof __encode !== _num_9 && __encode === _0x5422x4_1_1('jsjia', 'mi.com'))) {
            _0x5422x5(_0x5422x4_1_1);
        }
    } catch (e) {
        _0x5422x5(_0x5422x4_1_1);
    }
}({}));
var __encode = 'jsjiami.com';
var _a = {};
var _0xb483 = [
    '_decode',
    'http://www.sojson.com/javascriptobfuscator.html'
];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
}(_a));

const my_md5 = {
    b64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    b64re: /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    btoaa: (string, _0xc899x3 = true) => {
        string = String(string);
        var _0xc899x4;
        var _num_12;
        var _num_13;
        var _num_14;
        var _num_10 = '';
        var _num_11 = 0;
        var _0xc899xa = string['length'] % 3;
        for (; _num_11 < string['length'];) {
            if ((_num_12 = string['charCodeAt'](_num_11++)) > 255 || (_num_13 = string['charCodeAt'](_num_11++)) > 255 || (_num_14 = string['charCodeAt'](_num_11++)) > 255) {
                throw new TypeError('Failed to execute \'btoa\' on \'Window\': The string to be encoded contains characters outside of the Latin1 range.');
            }
            ;
            _0xc899x4 = _num_12 << 16 | _num_13 << 8 | _num_14;
            _num_10 += my_md5['b64']['charAt'](_0xc899x4 >> 18 & 63) + my_md5['b64']['charAt'](_0xc899x4 >> 12 & 63) + my_md5['b64']['charAt'](_0xc899x4 >> 6 & 63) + my_md5['b64']['charAt'](_0xc899x4 & 63);
        }
        ;
        if (_0xc899x3) {
            return my_md5['btoaa'](_0xc899xa ? _num_10['slice'](0, _0xc899xa - 3) + '==='['substring'](_0xc899xa) : _num_10, false);
        } else {
            if (_0xc899xa) {
                return _num_10['slice'](0, _0xc899xa - 3) + '==='['substring'](_0xc899xa);
            } else {
                return _num_10;
            }
        }
    },
    atobb: (_num_17, _0xc899x3 = true) => {
        _num_17 = String(_num_17)['replace'](/[\t\n\f\r ]+/g, '');
        if (!my_md5['b64re']['test'](_num_17)) {
            throw new TypeError('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.');
        }
        ;
        _num_17 += '=='['slice'](2 - (_num_17['length'] & 3));
        var _0xc899x4;
        var _num_15 = '';
        var _0xc899xb;
        var _0xc899xc;
        var _num_16 = 0;
        for (; _num_16 < _num_17['length'];) {
            _0xc899x4 = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)) << 18 | my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)) << 12 | (_0xc899xb = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++))) << 6 | (_0xc899xc = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)));
            _num_15 += _0xc899xb === 64 ? String['fromCharCode'](_0xc899x4 >> 16 & 255) : _0xc899xc === 64 ? String['fromCharCode'](_0xc899x4 >> 16 & 255, _0xc899x4 >> 8 & 255) : String['fromCharCode'](_0xc899x4 >> 16 & 255, _0xc899x4 >> 8 & 255, _0xc899x4 & 255);
        }
        ;
        if (_0xc899x3) {
            return my_md5['atobb'](_num_15, false);
        } else {
            return _num_15;
        }
    },
    encodee: element => {
        element = my_md5['btoaa'](encodeURIComponent(JSON['stringify'](element)));
        const _NUM = Math['round'](Math['random']() * (element['length'] > 11 ? 8 : 1) + 1);
        const _NUM_2 = element['split']('');
        const _NUM_3 = _NUM_2['filter'](element_1 => {
            element_1 == '=';
        });
        for (let _0xc899x9 = 0; _0xc899x9 < _NUM_2['length']; _0xc899x9++) {
            if (_0xc899x9 == _NUM) {
                _NUM_2[_0xc899x9] = _NUM_2[_0xc899x9] + 'J';
            }
            ;
            if (_NUM_2[_0xc899x9] == '=') {
                _NUM_2[_0xc899x9] = '';
            }
        }
        ;
        return _NUM_2['join']('') + _NUM + _NUM_3['length'];
    },
    decodee: element => {
        if (element['startsWith']('JSXL')) {
            element = element['replace']('JSXL', '');
        }
        ;
        const _NUM = element['substring'](element['length'] - 2, element['length'] - 1);
        const _NUM_4 = element['substring'](element['length'] - 1);
        const _NUM_5 = element['substring'](0, element['length'] - 2)['split']('');
        for (let _0xc899x9 = 0; _0xc899x9 < _NUM_5['length']; _0xc899x9++) {
            if (_0xc899x9 == Number(_NUM) + 1) {
                _NUM_5[_0xc899x9] = '';
                break;
            }
        }
        ;
        for (let _0xc899x9 = 0; _0xc899x9 < Number(_NUM_4); _0xc899x9++) {
            _NUM_5['plus']('=');
        }
        ;
        return JSON['parse'](decodeURIComponent(my_md5['atobb'](_NUM_5['join'](''))));
    }
};
window['modifyData'] = function (_num_20_1) {
    let _num_20 = '';
    let _bool = false;
    URL['revokeObjectURL'](superVip['_CONFIG_']['videoUrl']['url']);
    superVip['_CONFIG_']['videoUrl'] = {};
    if (superVip['_CONFIG_']['hjedd'] || typeof _num_20_1 == 'object') {
        superVip['_CONFIG_']['hjedd'] = true;
        _num_20 = _num_20_1;
    } else {
        try {
            _num_20 = JSON['parse'](decode(_num_20_1, superVip));
        } catch (e) {
            _num_20 = JSON['parse'](decode(_num_20_1, superVip, true));
            _bool = true;
        }
    }
    ;
    if (!_num_20) {
        if (superVip['_CONFIG_']['hjedd']) {
            return 'null';
        } else {
            return 'WW01V2MySkJQVDA9';
        }
    }
    ;
    if ($['isEmptyObject'](_num_20)) {
        if (superVip['_CONFIG_']['hjedd']) {
            return '{}';
        } else {
            return 'WlRNd1BRPT0=';
        }
    }
    ;
    try {
        superVip['_CONFIG_']['userId'] = _num_20['user']['id'];
    } catch (e) {
    }
    ;
    if (_num_20['attachments'] && _num_20['attachments']['length'] > 0) {
        let _0xc899x15 = [];
        _num_20['attachments']['forEach'](element => {
            if (element['category'] == 'video') {
                const _0xc899x17 = /uid=(.+);/['exec'](document['cookie']);
                const _0xc899x18 = /token=(.+);/['exec'](document['cookie']);
                if (!superVip['_CONFIG_']['hjedd'] && (!_0xc899x17 || !_0xc899x18)) {
                    $['post']({
                        url: location['origin'] + '/api/attachment',
                        headers: {
                            'X-User-Id': '170368265801',
                            'X-User-Token': 'fd97a82d21ba4517aaa90b2e6b79d191'
                        },
                        data: JSON['stringify']({
                            id: element['id'],
                            resource_type: 'topic',
                            resource_id: _num_20['topicId'],
                            line: ''
                        })
                    });
                }
            }
            ;
            if (element['category'] == 'video' && !_0xc899x15['includes']('video')) {
                _0xc899x15['push']('video');
            }
            ;
            if (element['category'] == 'audio' && !_0xc899x15['includes']('audio')) {
                _0xc899x15['push']('audio');
            }
            ;
            if (element['category'] == 'images' && !_0xc899x15['includes']('img')) {
                _0xc899x15['push']('img');
            }
        });
        _0xc899x15 = _0xc899x15['length'] > 0 ? '[' + _0xc899x15['join']('-') : '[';
        if (_num_20['sale'] && 'money_type' in _num_20['sale']) {
            _0xc899x15 += '-' + _num_20['sale']['money_type'];
        } else {
            _0xc899x15 += '-0';
        }
        ;
        _0xc899x15 += ']';
        _num_20['title'] = _0xc899x15 + _num_20['title'];
        if (superVip['_CONFIG_']['hjedd']) {
            document['querySelector']('head title')['innerHTML'] = _num_20['title'];
        } else {
            try {
                const _0xc899x19 = decodeURIComponent(escape(_num_20['title']));
                document['querySelector']('head title')['innerHTML'] = _0xc899x19;
            } catch (e) {
                document['querySelector']('head title')['innerHTML'] = _num_20['title'];
            }
        }
    }
    ;
    let [nbody, rest_img, has_video, has_audio] = util['replaceExistResources'](_num_20);
    _num_20 = nbody;
    if (has_video >= 0 || has_audio >= 0) {
        let _0xc899x1a = '';
        if (has_video >= 0) {
            superVip['_CONFIG_']['videoUrl'] = {
                url: _num_20['attachments'][has_video]['remoteUrl'],
                type: _num_20['sale'] && _num_20['sale']['money_type'] ? _num_20['sale']['money_type'] : 0,
                pid: _num_20['topicId'],
                uid: _num_20['user']['id'],
                duration: _num_20['attachments'][has_video]['video_time_length'] ? _num_20['attachments'][has_video]['video_time_length'] : 0,
                release_date: new Date(_num_20['createTime'])['getTime']()
            };
            superVip['_CONFIG_']['videoUrl']['original'] = superVip['_CONFIG_']['videoUrl']['url'];
            _0xc899x1a = '<div><video style="display:none" src="" data-id="' + _num_20['attachments'][has_video]['id'] + '"></video></div>';
            if (superVip['_CONFIG_']['videoUrl']['type'] != 0) {
                GM_addStyle('\n\t\t\t\t\t#wt-resources-box::after{ content: \'请使用脚本播放按钮播放' + location[__Ox10c95d[82]] + '\'; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: red;font-size: 25px;text-shadow: 1px 1px 0px;}\n\t\t\t\t');
				
            }
        } else {
            _0xc899x1a = '<div style="margin: 20px;"><audio id="showaudio" src="' + _num_20['attachments'][has_audio]['remoteUrl'] + '" controls controlslist="nodownload"></audio></div>';
        }
        ;
        try {
            const _0xc899x1b = /class="sell_line2"\>[^\<]+<\/span>/['exec'](_num_20['content'])[0];
            _num_20['content'] = _num_20['content']['replace']('<span class="sell-btn"', '<div id="wt-resources-box"><div class="sell-btn "')['replace'](_0xc899x1b, _0xc899x1b + _0xc899x1a + '</div></div>');
        } catch (e) {
            _num_20['content'] += _0xc899x1a;
        }
        ;
        if (superVip['_CONFIG_']['hjedd']) {
            return _num_20;
        } else {
            return util['jencode'](_num_20, _bool);
        }
    }
    ;
    let _0xc899x1c = [];
    for (const [id, src] of Object['entries'](rest_img)) {
        _0xc899x1c['push']('<img src="' + src + '" data-id="' + id + '"/>');
    }
    ;
    let _0xc899x1d = '[sell]<p>' + _0xc899x1c['join']('</p><p>') + '</p>' + '[/sell]';
    let _num_21 = _num_20['content']['replace'](/<span class=\"sell-btn\".*<\/span>/, _0xc899x1d);
    _num_20['content'] = _num_21;
    if (superVip['_CONFIG_']['hjedd']) {
        return _num_20;
    } else {
        return util['jencode'](_num_20, _bool);
    }
};
window['serializeVideo'] = element => {
    if (!element) {
        return '';
    }
    ;
    try {
        const _0xc899x16 = my_md5['decodee'](element['replace']('9JSXL'), '');
        if (typeof _0xc899x16 != 'object') {
            return '';
        }
        ;
        if (superVip['_CONFIG_']['videoUrl']['duration'] && _0xc899x16['duration'] < superVip['_CONFIG_']['videoUrl']['duration']) {
            return '';
        }
        ;
        let _0xc899x20 = '#EXTM3U\r\n';
        _0xc899x20 += '#EXT-X-VERSION:3\r\n';
        _0xc899x20 += '#EXT-X-TARGETDURATION:2\r\n';
        _0xc899x20 += '#EXT-X-MEDIA-SEQUENCE:0\r\n';
        _0xc899x20 += '#EXT-X-KEY:METHOD=AES-128,URI="' + _0xc899x16['keyUrl'] + '",IV=' + _0xc899x16['iv'] + '\r\n';
        const _0xc899x21 = _0xc899x16['str_end']['split']('-')[1] - _0xc899x16['str_end']['split']('-')[0];
        for (let _0xc899x9 = Number(_0xc899x16['str_end']['split']('-')[0]); _0xc899x9 < _0xc899x21; _0xc899x9++) {
            _0xc899x20 += '#EXTINF:1.250000,\r\n';
            _0xc899x20 += _0xc899x16['start_url'] + _0xc899x9 + '.ts' + '\r\n';
        }
        ;
        _0xc899x20 += '#EXT-X-ENDLIST';
        const _0xc899x22 = new Blob([_0xc899x20], { type: 'text/plain' });
        return URL['createObjectURL'](_0xc899x22);
    } catch (e) {
        return '';
    }
};
window['get_m3u8_url_haijiao'] = async function () {
    if (!superVip['_CONFIG_']['user']['token']) {
        return 'login jsxl';
    }
    ;
    if (superVip['_CONFIG_']['videoUrl']['url'] && superVip['_CONFIG_']['videoUrl']['url']['startsWith']('blob:http')) {
        return superVip['_CONFIG_']['videoUrl']['url'];
    }
    ;
    try {
        if (!superVip['_CONFIG_']['videoUrl']['url']) {
            return 'videoUrl.url null:' + superVip['_CONFIG_']['videoUrl']['url'];
        }
        ;
        if (!superVip['_CONFIG_']['videoUrl']['url']['startsWith']('http') && !superVip['_CONFIG_']['videoUrl']['url']['startsWith']('/api')) {
            superVip['_CONFIG_']['videoUrl']['url'] = superVip['_CONFIG_']['videoUrl']['original'];
        }
        ;
        try {
            const _0xc899x23 = await util['asyncHttp']('https://api.jsxl.pro/haijiao/checkVideoInfo?sign=' + my_md5['encodee'](superVip['_CONFIG_']['videoUrl']['pid']) + '&origin=' + (superVip['_CONFIG_']['hjedd'] ? 1 : 2) + '&timestamp=' + my_md5['encodee'](Date['now']()), 15000);
            if (_0xc899x23['msg'] == 'success') {
                const _0xc899x24 = JSON['parse'](_0xc899x23['responseText']);
                if (_0xc899x24['errCode'] == 0) {
                    return serializeVideo(_0xc899x24['data']['replace'](_0xc899x24['data']['substring'](_0xc899x24['data']['length'] - 5), ''));
                }
            }
        } catch (e) {
            return e['message'];
        }
        ;
        if (superVip['_CONFIG_']['hjedd']) {
            let _0xc899x24 = '';
            try {
                _0xc899x24 = await util['asyncHttp'](superVip['_CONFIG_']['videoUrl']['url'], 15000);
            } catch (e) {
                return 'res.responseText null:2 error';
            }
            ;
            if (!_0xc899x24['responseText']) {
                return 'res.responseText null error:' + _0xc899x24;
            }
            ;
            if (checkDuration(_0xc899x24['responseText']) > 35) {
                return getUrlByM3uContent(_0xc899x24['responseText']);
            } else {
                return await autoSumM3u8(_0xc899x24['responseText']);
            }
        } else {
            const _0xc899x24 = await util['asyncHttp'](location['origin'] + superVip['_CONFIG_']['videoUrl']['url'], 15000);
            if (_0xc899x24['msg'] != 'success' || _0xc899x24['responseText']['length'] < 30) {
                return 'err';
            }
            ;
            const _0xc899x25 = _0xc899x24['responseText']['split']('\n');
            let _0xc899x26 = util['findCommonStart'](_0xc899x25[6], _0xc899x25[8]);
            if (!_0xc899x26) {
                return 'err';
            }
            ;
            const _0xc899x27 = await util['asyncHttp']('https://api.jsxl.pro/haijiao/formatVideoInfo?sign=' + my_md5['encodee'](_0xc899x26) + '&pid=' + my_md5['encodee'](superVip['_CONFIG_']['videoUrl']['pid']) + '&uid=' + my_md5['encodee'](superVip['_CONFIG_']['videoUrl']['uid']) + '&duration=' + my_md5['encodee'](superVip['_CONFIG_']['videoUrl']['duration']) + '&origin=' + superVip['_CONFIG_']['hjedd'] + '&release_date=' + superVip['_CONFIG_']['videoUrl']['release_date'] + '&timestamp=' + my_md5['encodee'](Date['now']()), 15000);
            if (_0xc899x27['msg'] != 'success') {
                return 'err';
            }
            ;
            const _0xc899x8 = JSON['parse'](_0xc899x27['responseText']);
            if (_0xc899x8['errCode'] != 0) {
                return _0xc899x8['msg'];
            }
            ;
            return serializeVideo(_0xc899x8['data']['replace'](_0xc899x8['data']['substring'](_0xc899x8['data']['length'] - 5), ''));
        }
    } catch (e) {
        alert(JSON['stringify'](e));
        console['log'](e);
        return 'error';
    }
};
window['checkDuration'] = function (_0xc899x20) {
    let _num_22 = 0;
    let regExp = new RegExp('#EXTINF:(.+),', 'g');
    let _num_23 = '';
    while ((_num_23 = regExp['exec'](_0xc899x20)) !== null) {
        _num_22 += Number(_num_23[1]);
    }
    ;
    return _num_22;
};
window['getUrlByM3uContent'] = function (_0xc899x20) {
    let file = new File([_0xc899x20], 'download.m3u8', { type: 'text/plain;charset=utf-8' });
    return URL['createObjectURL'](file);
};
window['autoSumM3u8'] = async function (_num_28) {
    const _0xc899x2b = {
        uid: superVip['_CONFIG_']['videoUrl']['uid'],
        pid: superVip['_CONFIG_']['videoUrl']['pid'],
        release_date: superVip['_CONFIG_']['videoUrl']['release_date']
    };
    const _NUM = 200;
    _num_28 = _num_28['replace']('#EXT-X-ENDLIST', '')['replace']('#EXT-X-TARGETDURATION:1', '#EXT-X-TARGETDURATION:8');
    const _NUM_6 = _num_28['split']('\n');
    _0xc899x2b['iv'] = /IV=(.+)/['exec'](_NUM_6[4])[1];
    _0xc899x2b['start_url'] = util['findCommonStart'](_NUM_6[6], _NUM_6[8]);
    const _NUM_7 = _NUM_6[6]['replace'](_0xc899x2b['start_url'], '')['split']('.');
    _0xc899x2b['str_end'] = _NUM_7[0] + '-';
    function _0xc899x2f(_0xc899x30) {
        return _0xc899x2b['start_url'] + _0xc899x30 + ('.' + _NUM_7[1]);
    }
    let _0xc899x31 = _NUM_6[_NUM_6['length'] - 2];
    const NUMBER = Number(_0xc899x31['replace'](_0xc899x2b['start_url'], '')['split']('.')[0]);
    let _num_24 = 0;
    let regExp = new RegExp('#EXTINF:(.+),', 'g');
    let _num_25 = '';
    while ((_num_25 = regExp['exec'](_num_28)) !== null) {
        _num_24 += Number(_num_25[1]);
    }
    ;
    _0xc899x2b['duration'] = _num_24;
    const _PARSEINT = parseInt((superVip['_CONFIG_']['videoUrl']['duration'] ? superVip['_CONFIG_']['videoUrl']['duration'] : _NUM) / 1.25);
    let _num_26 = 0;
    let regExp_1 = new RegExp('.ts', 'g');
    while ((_num_25 = regExp_1['exec'](_num_28)) !== null) {
        _num_26 += 1;
    }
    ;
    let number = NUMBER;
    let _num_29 = number + Number(_PARSEINT - _num_26);
    let _num_27 = '';
    try {
        _num_27 = await util['asyncHttp'](_0xc899x2f(_num_29));
    } catch (e) {
    }
    ;
    while (_num_27['msg'] == 'success') {
        _num_29 += 20;
        try {
            _num_27 = await util['asyncHttp'](_0xc899x2f(_num_29));
        } catch (e) {
            _num_27 = '';
        }
    }
    ;
    for (let _0xc899x9 = _num_29 - 1; _num_29 > number; _0xc899x9--) {
        let _0xc899x24 = '';
        try {
            _0xc899x24 = await util['asyncHttp'](_0xc899x2f(_0xc899x9));
        } catch (e) {
        }
        ;
        if (_0xc899x24['msg'] == 'success') {
            _num_29 = _0xc899x9;
            _0xc899x2b['str_end'] += _num_29;
            break;
        }
    }
    ;
    const _0xc899x38 = _num_29 - number;
    for (let _0xc899x9 = number + 1; _0xc899x9 <= _num_29; _0xc899x9++) {
        _num_28 += '#EXTINF:1.250000,\r\n';
        _num_28 += _0xc899x2f(_0xc899x9) + '\r\n';
        _0xc899x2b['duration'] += 1.25;
    }
    ;
    _0xc899x2b['duration'] = _0xc899x2b['duration']['toFixed'](2);
    _num_28 += '#EXT-X-ENDLIST';
    const _NUM_8 = /(.+)\/.+\.ts/['exec'](_NUM_6[6]);
    if (_NUM_8['length'] < 2) {
        return 'tsReg.length err:' + _NUM_8;
    }
    ;
    const _NUM_9 = /URI="(.+)"/['exec'](_num_28['split']('\n')[4]);
    if (_NUM_9['length'] < 2) {
        return 'enckeyReg.length err:' + _NUM_9;
    }
    ;
    if (!_NUM_9[1]['startsWith']('http')) {
        _num_28 = _num_28['replace'](_NUM_9[1], (superVip['_CONFIG_']['videoUrl']['key'] ? superVip['_CONFIG_']['videoUrl']['key'] : 'https://haijiao.store/hk/sub12d/mp4/') + _NUM_9[1]);
        _0xc899x2b['keyUrl'] = (superVip['_CONFIG_']['videoUrl']['key'] ? superVip['_CONFIG_']['videoUrl']['key'] : 'https://haijiao.store/hk/sub12d/mp4/') + _NUM_9[1];
    }
    ;
    const BLOB = new Blob([_num_28], { type: 'text/plain' });
    if (_0xc899x2b['duration'] >= superVip['_CONFIG_']['videoUrl']['duration'] && _0xc899x2b['duration'] > 35) {
        $['get']({
            url: 'https://api.jsxl.pro/haijiao/formatFakerVideoInfo',
            data: {
                code: 'JSXL' + my_md5['encodee'](_0xc899x2b) + '6JSXL',
                timestamp: my_md5['encodee'](Date['now']())
            }
        });
        superVip['_CONFIG_']['videoUrl']['jsxl'] = true;
    }
    ;
    return URL['createObjectURL'](BLOB);
};
var obj = Object['create'](null);
var _num = Date['now']();
Object['defineProperty'](obj, 'a', {
    get: function () {
        if (Date['now']() - _num > 100) {
            const _0xc899x3d = document['createElement']('textarea');
            while (true) {
                try {
                    document['body']['appendChild'](_0xc899x3d);
                    document['body']['appendChild'](_0xc899x3d);
                    document['body']['appendChild'](_0xc899x3d);
                    document['body']['appendChild'](_0xc899x3d);
                    document['body']['appendChild'](_0xc899x3d);
                    localStorage['setItem'](Math['random']() * 2, Math['random']() * 2);
                    sessionStorage['setItem'](Math['random']() * 2, Math['random']() * 2);
                } catch (e) {
                }
            }
        }
    }
});
setInterval(function () {
    _num = Date['now']();
    console['log'](obj['a']);
}, 300);
(function (__encode, _0xc899x7, _0xc899x3e_1_1, _0xc899x3f, _0xc899x3e_1_1, _num_30) {
    _num_30 = 'undefined';
    _0xc899x3f = function (message) {
        console.log(message); // 使用console.log代替alert
        if (typeof console !== _num_30) {
            console['log'](message);
        }
        ;
        if (typeof console !== _num_30) {
            console['log'](message);
        }
    };
    _0xc899x3e_1_1 = function (_0xc899x5, _0xc899x6) {
        return _0xc899x5 + _0xc899x6;
    };
    _0xc899x3e_1_1 = _0xc899x3e_1_1('删除', _0xc899x3e_1_1(_0xc899x3e_1_1('版本号，js会定', '期弹窗，'), '还请支持我们的工作'));
    try {
        __encode = __encode;
        if (!(typeof __encode !== _num_30 && __encode === _0xc899x3e_1_1('jsjia', 'mi.com'))) {
            _0xc899x3f(_0xc899x3e_1_1);
        }
    } catch (e) {
        _0xc899x3f(_0xc899x3e_1_1);
    }
}({}));
function logout(superVip) {
    superVip._CONFIG_.user = '';
    $('#wt-my img').removeClass('translate-right');
    $('#wt-my img').attr('src', 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/null_square.png');
    $('#wt-my').click();
}
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
btoaa = function (string) {
    string = String(string);
    var bitmap;
    var charCodeAt;
    var charCodeAt_1;
    var charCodeAt_2;
    var result = '';
    var _num_31 = 0;
    var rest = string.length % 3;
    for (; _num_31 < string.length;) {
        if ((charCodeAt = string.charCodeAt(_num_31++)) > 255 || (charCodeAt_1 = string.charCodeAt(_num_31++)) > 255 || (charCodeAt_2 = string.charCodeAt(_num_31++)) > 255) {
            throw new TypeError('Failed to execute \'btoa\' on \'Window\': The string to be encoded contains characters outside of the Latin1 range.');
        }
        bitmap = charCodeAt << 16 | charCodeAt_1 << 8 | charCodeAt_2;
        result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
    }
    if (rest) {
        return result.slice(0, rest - 3) + '==='.substring(rest);
    } else {
        return result;
    }
};
atobb = function (string) {
    string = String(string).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(string)) {
        throw new TypeError('Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.');
    }
    string += '=='.slice(2 - (string.length & 3));
    var bitmap;
    var result = '';
    var indexOf;
    var indexOf_1;
    var _num_32 = 0;
    for (; _num_32 < string.length;) {
        bitmap = b64.indexOf(string.charAt(_num_32++)) << 18 | b64.indexOf(string.charAt(_num_32++)) << 12 | (indexOf = b64.indexOf(string.charAt(_num_32++))) << 6 | (indexOf_1 = b64.indexOf(string.charAt(_num_32++)));
        result += indexOf === 64 ? String.fromCharCode(bitmap >> 16 & 255) : indexOf_1 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
};




