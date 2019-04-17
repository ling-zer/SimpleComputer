var pc, ir, acc, mar, mdr, sp, br, cr, pc_row; //寄存器
var acce, ire, pce, opcodee, operande, mare, mdre, spe, bre, cre; //寄存器值
var mode;
var IODevice = new Array(256);
var input1e, output0e;

var CF = false, ZF = false, SF = false, OF = false;

var root = window.block;
var ledFlag = false;

var jumped = false;
//var deck, input, output;
//var inlist, incard;
var intvar;
var changedAddr;

var blockarray;
var allblockarray = [];
var addrArray = [['指令' + '000', "指令" + '000']];
var addrArrayValue = ['指令' + 000];
var InstrAddrArray = [];
var counter = 0;
var countAddr = 0;

//页面渲染
root.outerRender();

//事件绑定
function bindEvent() {
    //存储器 查看或收起
    $('.list_1').on('click', function () {
        $('.slider').slideToggle();
        // root.getInstruct(root.demoWorkspace);
    });
    //寄存器查看 或收起
    $('.list_2').on('click', function () {
        $('.reg').slideToggle();
    })
    //指令数目变化 地址变化
    // root.demoWorkspace.addChangeListener(handleChange);
    //单步执行
    $('.by_step').on('click', dostep);
    //全速运行
    $('.full_speed').on('click', dorun);
    //slow spped
    $('.slow_speed').on('click', doslow);
    //复位
    $('.reset').on('click', doreset);
    //stop
    $('.stop').on('click', dostop);

}
bindEvent();
var test = function(){
    console.log(!document.getElementById('switch').checked ? "选中" : "未选中");
 }

root.demoWorkspace.addChangeListener(function (event) {
    if (!(event instanceof Blockly.Events.Ui)) {
        if (event instanceof Blockly.Events.Change && event.element == "field" && event.name == "breakpoints") return;
        if (event instanceof Blockly.Events.Change && event.element == "comment") return;
        if (event instanceof Blockly.Events.Change && event.element == "collapsed") return;

        var allblocks = root.demoWorkspace.getAllBlocks(true);
        addrArray = [['指令' + PrefixInteger(0, 3), "指令" + PrefixInteger(0, 3)]];
        addrArrayValue = ['指令' + PrefixInteger(0, 3)];

        var countAddr = 0;
        InstrAddrArray = [];
        for (var ii in allblocks) {
            //allblocks[ii].inputList[0].fieldRow[1].text_="指令"+PrefixInteger(8, 3);
            allblocks[ii].setFieldValue("指令" + PrefixInteger(ii, 3), "Line"); //.getInput("").removeField("InstrAddr");
            allblocks[ii].setFieldValue("地址" + PrefixInteger(countAddr, 3), "InstrAddr");

            InstrAddrArray.push(countAddr);
            if (ii != 0) {
                addrArrayValue.push('指令' + PrefixInteger(ii, 3));
                addrArray.push(['指令' + PrefixInteger(ii, 3), "指令" + PrefixInteger(ii, 3)]);
            }
            if (allblocks[ii].type == "ld" || allblocks[ii].type == "st" || allblocks[ii].type == "call" ||
                allblocks[ii].type == "add" || allblocks[ii].type == "sub" || allblocks[ii].type == "and" ||
                allblocks[ii].type == "or" || allblocks[ii].type == "xor" || allblocks[ii].type == "jc" ||
                allblocks[ii].type == "jz" || allblocks[ii].type == "js" || allblocks[ii].type == "jo" ||
                allblocks[ii].type == "jmp" || allblocks[ii].type == "in" || allblocks[ii].type == "out" ||
                allblocks[ii].type == "mov_reg_data")
                countAddr += 2;
            else countAddr += 1;
        }
        for (var ii in allblocks) {
            if (allblocks[ii].type == "call" || allblocks[ii].type == "jmp" || allblocks[ii].type == "jc" || allblocks[ii].type == "jz" || allblocks[ii].type == "js" || allblocks[ii].type == "jo") {
                var tempFieldValue = allblocks[ii].getFieldValue("Address");
                if (addrArrayValue.indexOf(tempFieldValue) == -1)
                    allblocks[ii].setFieldValue("指令000", "Address");
            }
        }

        dostop();
        doreset();

        // if (isFirstLoad && countEvents != 0) {
        //     countEvents = countEvents - 1;
        //     if (countEvents == 0) {
        //         isSaved = true;
        //         isFirstLoad = false;
        //     }
        // } else {
        //     if (isSaved) document.title += " *";
        //     isSaved = false;
        // }
    }
});

for (var r = 0; r < 256; ++r) {
    memelem(r).value = '00';
    IODevice[r] = 0;
}
init();
doreset();

function showCode() {
    var code = Blockly.JavaScript.workspaceToCode(root.demoWorkspace);
    var data = code;

    data = data.replace(/\/\/.*\n/g, ''); //去掉comment
    data = data.replace(/highlightBlock.{24};\n/g, ''); //去掉highlight语句
    data = data.replace(/(\r\n)|(\n)/g, ''); //去掉回车换行

    var i = 0, j = 0;
    var substr;
    var txtStr = "";
    for (i = 0, j = 0; i < data.length; i += 2, j++) {
        substr = data.substr(i, 2)
        memelem(j).value = substr;
        txtStr = txtStr + "RAM[8'h" + ndig(j.toString(16), 2) + "] <= 8'h" + substr + "; \n";
    }
    if (txtStr != undefined) document.getElementById("memTxt").value = txtStr;

    blockarray = root.demoWorkspace.getTopBlocks(true);
    allblockarray = [];
    if (blockarray != undefined && blockarray.length != 0)
        for (var x = 0, block; block = blockarray[x]; x++) {
            allblockarray.push(block);
            var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
            while (nextBlock != null) {
                allblockarray.push(nextBlock);
                nextBlock = nextBlock.nextConnection && nextBlock.nextConnection.targetBlock();
            }
        }
    if (blockarray != undefined && blockarray.length != 0) {
        var idblock = allblockarray[Number(pc)];
        root.demoWorkspace.highlightBlock(idblock.id);
    }
}

function init() {
    pc = 0; pc_row = 0;
    mode = 0;
    acce = document.getElementById('acc');
    spe = document.getElementById('sp');
    bre = document.getElementById('br');
    cre = document.getElementById('cr');
    mare = document.getElementById('mar');
    mdre = document.getElementById('mdr');
    ire = document.getElementById('ir');
    pce = document.getElementById('pc');
    opcodee = document.getElementById('opcode');
    operande = document.getElementById('operand');
    input1e = document.getElementById('input1');
    output0e = document.getElementById('output0');

    pce.onchange = function () {
        inspectByteHexRange(this);
    }

    input1e.onchange = function () {
        inspectByteHexRange(this);
    }
}

// function ladybug() {
//     memelem(ndig(pc, 3)).style.backgroundColor = '#FFFFFF';
//     pc = Number(parseInt(pce.value, 16));
//     memelem(ndig(pc, 3)).style.backgroundColor = '#99FFCC';
// }

function fireInput() {
    // IODevice[1] = Number(parseInt(input1e.value, 16));
    IODevice[1] = getSwitch();
}

