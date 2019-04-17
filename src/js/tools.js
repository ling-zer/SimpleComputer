function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

function convertAddr2Line(arr, value) {//
    if (arr == null) return -1;
    if (arr instanceof Array) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) {//判断
                return i;
            }
        }
        return -1;//不存在
    }
    else
        return -1;
}

//检查对象数据是否在整数范围0~255
function inspectUByteRange(obj) {
    if (obj) {
        var regx = /^\d+$/g;
        var g = obj.value.match(regx);
        var value = parseInt(g);
        if (value) {
            if (value > 255 || value < 0) {
                alert("值必需在0-255之间");
                obj.focus();
                obj.value = '00';
                if (obj.setSelectionRange) {
                    obj.setSelectionRange(0, obj.value.length);
                    obj.focus();
                } else if (obj.createTextRange) {
                    var rng = obj.createTextRange();
                    rng.select();
                    obj.focus();
                }
            }
        } else {
            alert("请输入是0~255间的整数！");
            obj.focus();
            obj.value = '00';
        }
    }
}

//检查对象数据是否在整数十六进制范围00~FF
function inspectByteHexRange(obj) {
    if (obj) {
        var regx = /^[0-9a-fA-F]{2}$/;
        var g = obj.value.match(regx);
        if (g != null) {
            //obj.value=replace(g);
        } else {
            alert("请输入00~FF间的单字节十六进制整数！");
            obj.focus();
            obj.value = '00';
        }
    }
}

function memelem(addr) {
    var temp = document.getElementById('mem' + Math.floor(addr / 100) + Math.floor((addr / 10) % 10) + (addr) % 10);
    temp.onchange = function () {
        inspectByteHexRange(this);
    }
    return temp;
}

//清除mem为00
function doclearmem() {
    var r;

    for (r = 0; r < 256; ++r) {
        memelem(r).value = '00';
        memelem(r).style.backgroundColor = '#FFFFFF';
    }
}

//处理负数
function ndig(val, n) {
    var ns;

    if (val < 0) {
        ns = '00000' + -val;
        return '-' + ns.substr(ns.length - n);
    } else {
        ns = '00000' + val;
        return ns.substr(ns.length - n);
    }
}

//取指令
function fetch(addr) {
    var result1 = parseInt(memelem(ndig(addr, 3)).value, 16);
    return result1;
}

//取开关值
function getSwitch() {
    var result = '';
    $('.switch input').each(function() {
        var isChecked = $(this).prop('checked');
        if(isChecked === true) {
            result += 1;
        }else{
            result += 0;
        }
    });
    return parseInt(result, 2);
        
}

function resetSwitch () {
    $('.switch input').each(function() {
        $(this).prop({checked: false});
    });
}
