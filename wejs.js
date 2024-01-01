const my_md5 = {
    b64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    b64re: /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    btoaa: (string, _0x5e2fx3 = true) => {
        string = String(string);
        var _0x5e2fx4;
        var _num_12;
        var _num_13;
        var _num_14;
        var _num_10 = '';
        var _num_11 = 0;
        var _0x5e2fxa = string['length'] % 3;
        for (; _num_11 < string['length'];) {
            if ((_num_12 = string['charCodeAt'](_num_11++)) > 255 || (_num_13 = string['charCodeAt'](_num_11++)) > 255 || (_num_14 = string['charCodeAt'](_num_11++)) > 255) {
                throw new TypeError('Failed to execute \'l\' on \'global\': The string to be encoded contains characters outside of the Latin1 range.');
            }
            ;
            _0x5e2fx4 = _num_12 << 16 | _num_13 << 8 | _num_14;
            _num_10 += my_md5['b64']['charAt'](_0x5e2fx4 >> 18 & 63) + my_md5['b64']['charAt'](_0x5e2fx4 >> 12 & 63) + my_md5['b64']['charAt'](_0x5e2fx4 >> 6 & 63) + my_md5['b64']['charAt'](_0x5e2fx4 & 63);
        }
        
        ;
        if (_0x5e2fx3) {
            return my_md5['btoaa'](_0x5e2fxa ? _num_10['slice'](0, _0x5e2fxa - 3) + '==='['substring'](_0x5e2fxa) : _num_10, false);
        } else {
            if (_0x5e2fxa) {
                return _num_10['slice'](0, _0x5e2fxa - 3) + '==='['substring'](_0x5e2fxa);
            } else {
                return _num_10;
            }
        }
    },
    atobb: (_num_17, _0x5e2fx3 = true) => {
        _num_17 = String(_num_17)['replace'](/[\t\\n\\f\\r ]+/g, '');
        if (!my_md5['b64re']['test'](_num_17)) {
            throw new TypeError('Failed to execute \'l\' on \'global\': The string to be decoded is not correctly encoded.');
        }
        ;
        _num_17 += '=='['slice'](2 - (_num_17['length'] & 3));
        var _0x5e2fx4;
        var _num_15 = '';
        var _0x5e2fxb;
        var _0x5e2fxc;
        var _num_16 = 0;
        for (; _num_16 < _num_17['length'];) {
            _0x5e2fx4 = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)) << 18 | my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)) << 12 | (_0x5e2fxb = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++))) << 6 | (_0x5e2fxc = my_md5['b64']['indexOf'](_num_17['charAt'](_num_16++)));
            _num_15 += _0x5e2fxb === 64 ? String['fromCharCode'](_0x5e2fx4 >> 16 & 255) : _0x5e2fxc === 64 ? String['fromCharCode'](_0x5e2fx4 >> 16 & 255, _0x5e2fx4 >> 8 & 255) : String['fromCharCode'](_0x5e2fx4 >> 16 & 255, _0x5e2fx4 >> 8 & 255, _0x5e2fx4 & 255);
        }
        ;

        
        if (_0x5e2fx3) {
            return my_md5['atobb'](_num_15, false);
        } else {
            return _num_15;
        }
    },
    encodee: element => {
        element = my_md5['btoaa'](encodeURIComponent(JSON['stringify'](element)), false);
        const _NUM = Math['round'](Math['random']() * (element['length'] > 11 ? 8 : 1) + 1);
        const _NUM_2 = element['split']('');
        const _NUM_3 = _NUM_2['filter'](element_1 => {
            element_1 == '=';
        });
        for (let _0x5e2fx9 = 0; _0x5e2fx9 < _NUM_2['length']; _0x5e2fx9++) {
            if (_0x5e2fx9 == _NUM) {
                _NUM_2[_0x5e2fx9] = _NUM_2[_0x5e2fx9] + 'JS';
            }
            ;
            if (_NUM_2[_0x5e2fx9] == '=') {
                _NUM_2[_0x5e2fx9] = '';
            }
        }
        ;
        return my_md5['b64'][Math['floor'](Math['random']() * 62)] + (_NUM_2['join']('') + _NUM) + _NUM_3['length'];
    },
    decodee: element => {
        if (element['startsWith']('JSXL')) {
            element = element['replace']('JSXL', '');
        }
        ;
        element = element['substring'](my_md5['atobb']('TVE9PQ=='));
        const _NUM = element['substring'](element['length'] - 2, element['length'] - 1);
        const _NUM_4 = element['substring'](element['length'] - 1);
        const _NUM_5 = element['substring'](0, element['length'] - 2)['split']('');
        for (let _0x5e2fx9 = 0; _0x5e2fx9 < _NUM_5['length']; _0x5e2fx9++) {
            if (_0x5e2fx9 == Number(_NUM) + 1) {
                _NUM_5[_0x5e2fx9] = '';
                _NUM_5[_0x5e2fx9 + 1] = '';
                break;
            }
        }
        ;
        for (let _0x5e2fx9 = 0; _0x5e2fx9 < Number(_NUM_4); _0x5e2fx9++) {
            _NUM_5['plus']('=');
        }
        ;
        return JSON['parse'](decodeURIComponent(my_md5['atobb'](_NUM_5['join'](''), false)));
    }
};


