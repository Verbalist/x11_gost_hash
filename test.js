var x11GostHash = require('bindings')('x11GostHash');
String.prototype.hexEncode = function(){
    var hex, i;
    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    return result;
}

function fromHex(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
function String2Hex(tmp) {
    var str = '';
    for(var i = 0; i < tmp.length; i++) {
        str += tmp[i].charCodeAt(0).toString(16);
    }
    return str;
}

var headerHex = "030000004cfa1ec2874762bc4353e8e71601c6c4bf807657bc6808429034f72b490c0000910c98985bfadae16fa98ff6a46d92a557d53b1f60e0e261bae0bfeaf786b68d61504d55f0ff0f1ed6ae0800";


var bestHash = 'b0d98c92637728f6770e87d505ca390e1ed653c71fa4654491abae235b080000';

var unhexBlockHeader = fromHex(headerHex);

function test_x11_gost_hash() {
    var powHash = String2Hex(x11GostHash.getPoWHash(unhexBlockHeader));
    console.log(powHash === bestHash);
}

test_x11_gost_hash();
