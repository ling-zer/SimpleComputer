//复位
function doreset() {
    doclearmem();
    memelem(ndig(pc, 2)).style.backgroundColor = '#FFFFFF';
    ledFlag = false;
    pc = 0; pc_row = 0;
    mode = 0;
    memelem('00').style.backgroundColor = '#99FFCC';
    ire.value = '00';
    acc = 0;
    br = 0;
    cr = 0;
    sp = 0;
    ir = 0;
    mar = 0;
    mdr = 0;
    acce.value = '000';
    pce.value = '00';
    mare.value = '00';
    mdre.value = '00';
    bre.value = '00';
    cre.value = '00';
    spe.value = '00';
    changedAddr = undefined;

    output0e.value = '00';
    input1e.value = '00';

    showCode();
    opcodee.value = '00';
    operande.value = '00';
    document.getElementsByClassName("stop")[0].disabled = true;
    showLed();
    resetSwitch ();
}

//保存结果
function store(addr, val) {
    if (changedAddr == undefined) changedAddr = addr;
    else {
        memelem(ndig(changedAddr, 3)).style.backgroundColor = '#FFFFFF';
        changedAddr = addr;
    }
    val = val.toString(16);
    memelem(ndig(addr, 3)).value = ndig(val, 2);
    memelem(ndig(addr, 3)).style.backgroundColor = '#ff8000';
}

//单步执行
function dostep() {
    var op, addr;
    if (Number(pc_row) >= allblockarray.length) {
        dostop();
        alert("程序结束！没有指令可执行了。\n\n提示：点击\"装载&复位\"按钮后，可以再次运行！");
        return;
    }
    if (changedAddr != undefined) {
        memelem(ndig(changedAddr, 3)).style.backgroundColor = '#FFFFFF';
        changedAddr = undefined;
    }
    memelem(ndig(pc, 3)).style.backgroundColor = '#FFFFFF';
    pc = parseInt(pce.value, 16);
    ir = parseInt(memelem(ndig(pc, 3)).value, 16);
    ire.value = ndig(ir.toString(16), 2);
    pc++;
    pc = pc % 256;
    pce.value = ndig(pc.toString(16), 2);
    op = ir;
    switch (op) {
        case 0: // Load
            mar = fetch(pc);
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc = mdr;
            acce.value = ndig(acc.toString(16), 2);
            pc++;
            break;
        case 1: // ST
            mar = fetch(pc);
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = acc;
            mdre.value = ndig(mdr.toString(16), 2);
            pc++;
            store(addr, mdr);
            break;
        case 2: // push_ac
            sp = (sp - 1) < 0 ? 255 : (sp - 1);
            spe.value = ndig(sp.toString(16), 2);
            mar = sp;
            mare.value = ndig(mar.toString(16), 2);
            mdr = acc;
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mar;
            store(mar, mdr);
            break;
        case 3: // pop_ac
            mar = sp;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc = mdr;
            acce.value = ndig(acc.toString(16), 2);
            sp = (sp + 1) % 256;
            spe.value = ndig(sp.toString(16), 2);
            addr = mar;
            break;
        case 4: // call
            sp = (sp - 1) < 0 ? 255 : (sp - 1);
            spe.value = ndig(sp.toString(16), 2);
            mar = sp;
            mare.value = ndig(mar.toString(16), 2);
            mdr = (pc + 1) % 256;
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mar;
            store(mar, mdr);
            //pc=(pc+1)%256;
            mar = fetch(pc);
            mare.value = ndig(mar.toString(16), 2);
            pc = mar;
            pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));
            jumped = true;
            break;
        case 5: // ret
            mar = sp;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            pc = mdr;
            sp = (sp + 1) % 256;
            spe.value = ndig(sp.toString(16), 2);
            var tempval = convertAddr2Line(InstrAddrArray, pc);//convertAddr2Line(InstrAddrArray,"InstrAddr"+PrefixInteger(pc, 3));
            if (tempval != -1) {
                pc_row = tempval;
                jumped = true;
            } else {
                alert("RET指令执行异常，程序存在问题，请修改！\n\n说明：RET指令需要配合CALL指令，放在子程序结束返回之处。\n\n提示：修改后，点击\"装载&复位\"按钮后，可以再次运行！");
            }
            break;
        case 6: // ADD - Add
            mar = fetch(pc);
            pc++;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            CF = (acc + mdr > 255) ? true : false;
            OF = ((acc >> 7 == 0) && (mdr >> 7 == 0) && (((acc + mdr) % 256) >> 7 == 1)) || ((acc >> 7 == 1) && (mdr >> 7 == 1) && (((acc + mdr) % 256) >> 7 == 0));
            acc += mdr;
            acc = acc % 256;
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 7: // SUB - subtract
            mar = fetch(pc);
            pc++;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            CF = (acc < mdr) ? true : false;
            OF = ((acc >> 7 == 0) && (mdr >> 7 == 0) && (((acc - mdr) % 256) >> 7 == 1)) || ((acc >> 7 == 1) && (mdr >> 7 == 1) && (((acc - mdr) % 256) >> 7 == 0));
            acc -= mdr;
            acc = acc % 256;
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 8: // AND 
            mar = fetch(pc);
            pc++;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc &= mdr;
            //acc = acc % 256;
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            CF = 0;
            OF = 0;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 9: // OR
            mar = fetch(pc);
            pc++;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc |= mdr;
            //acc = acc % 256;
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            CF = 0;
            OF = 0;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 10: // XOR
            mar = fetch(pc);
            pc++;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc ^= mdr;
            //acc = acc % 256;
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            CF = 0;
            OF = 0;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 11: // NOT
            acc = ~acc;
            acce.value = ndig(acc.toString(16), 2);
            SF = ((acc >> 7) == 1);
            ZF = (acc == 0);
            CF = 0;
            OF = 0;
            break;
        case 12: // JC, jump if CF is true
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mdr;
            pc++;
            if (CF == true) {
                pc = addr;
                pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));//parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(9));
                jumped = true;
            }
            break;
        case 13: // JZ, jump if ZF is true
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mdr;
            pc++;
            if (ZF == true) {
                pc = addr;
                pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));//parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(9));
                jumped = true;
            }
            break;
        case 14: // JO, jump if OF is true
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mdr;
            pc++;
            if (OF == true) {
                pc = addr;
                pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));//parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(9));
                jumped = true;
            }
            break;
        case 15: // JS, jump if SF is true
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mdr;
            pc++;
            if (SF == true) {
                pc = addr;
                pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));//parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(9));
                jumped = true;
            }
            break;
        case 16: // JMP, jump unconditionally
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            addr = mdr;
            pc++;
            pc = addr;
            pc_row = parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(2));//convertAddr2Line(addrArray,"InstrAddr"+PrefixInteger(pc, 3));//parseInt((allblockarray[Number(pc_row)].getFieldValue("Address")).slice(9));
            jumped = true;
            break;
        case 17: // IN
            fireInput();
            mar = fetch(pc);
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = IODevice[mar];
            mdre.value = ndig(mdr.toString(16), 2);
            acc = mdr;
            acce.value = ndig(acc.toString(16), 2);
            input1e.value = acce.value;
            pc++;
            break;
        case 18: // OUT
            mar = fetch(pc);
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = acc;
            mdre.value = ndig(mdr.toString(16), 2);
            pc++;
            IODevice[addr] = mdr;
            if (addr == 0) {
                ledFlag = true;
                output0e.value = PrefixInteger(mdr.toString(16), 2);
                showLed();
            }
            break;
        case 19: // MOV ac,data
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc = mdr;
            acce.value = ndig(acc.toString(16), 2);
            pc++;
            break;
        case 20: // MOV sp,data
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            sp = mdr;
            spe.value = ndig(sp.toString(16), 2);
            pc++;
            break;
        case 21: // MOV br,data
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            br = mdr;
            bre.value = ndig(br.toString(16), 2);
            pc++;
            break;
        case 22: // MOV cr,data
            mar = pc;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            cr = mdr;
            cre.value = ndig(cr.toString(16), 2);
            pc++;
            break;
        case 23: // mov ac,sp
            acc = sp;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 24: // mov ac,br
            acc = br;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 25: // mov ac,cr
            acc = cr;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 26: // mov sp,ac
            sp = acc;
            spe.value = ndig(sp.toString(16), 2);
            break;
        case 27: // mov br,ac
            br = acc;
            bre.value = ndig(br.toString(16), 2);
            break;
        case 28: // mov cr,ac
            cr = acc;
            cre.value = ndig(cr.toString(16), 2);
            break;
        case 29: // LDI
            mar = br;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = fetch(mar);
            mdre.value = ndig(mdr.toString(16), 2);
            acc = mdr;
            acce.value = ndig(acc.toString(16), 2);
            break;
        case 30: // STI
            mar = br;
            mare.value = ndig(mar.toString(16), 2);
            addr = mar;
            mdr = acc;
            mdre.value = ndig(mdr.toString(16), 2);
            store(addr, mdr);
            break;
        case 31: // INC AC
            acc = (acc + 1) % 256;
            acce.value = ndig(acc.toString(16), 2);
            ZF = (acc == 0);
            SF = ((acc >> 7) == 1);
            break;
        case 35: // INC SP
            sp = (sp + 1) % 256;
            spe.value = ndig(sp.toString(16), 2);
            ZF = (sp == 0);
            SF = ((sp >> 7) == 1);
            break;
        case 33: // INC BR
            br = (br + 1) % 256;
            bre.value = ndig(br.toString(16), 2);
            ZF = (br == 0);
            SF = ((br >> 7) == 1);
            break;
        case 34: // INC CR
            cr = (cr + 1) % 256;
            cre.value = ndig(cr.toString(16), 2);
            ZF = (cr == 0);
            SF = ((cr >> 7) == 1);
            break;
        case 32: // DEC AC
            acc = acc - 1;
            if (acc < 0) acc = 255;
            acce.value = ndig(acc.toString(16), 2);
            ZF = (acc == 0);
            SF = ((acc >> 7) == 1);
            break;
        case 36: // DEC SP
            sp = sp - 1;
            if (sp < 0) sp = 255;
            spe.value = ndig(sp.toString(16), 2);
            ZF = (sp == 0);
            SF = ((sp >> 7) == 1);
            break;
        case 37: // DEC BR
            br = br - 1;
            if (br < 0) br = 255;
            bre.value = ndig(br.toString(16), 2);
            ZF = (br == 0);
            SF = ((br >> 7) == 1);
            break;
        case 38: // DEC CR
            cr = cr - 1;
            if (cr < 0) cr = 255;
            cre.value = ndig(cr.toString(16), 2);
            ZF = (cr == 0);
            SF = ((cr >> 7) == 1);
            break;
        default:
            alert("未识别的指令，程序存在问题，请修改！\n\n说明：可能由CALL、RET、Jxx类指令导致。\n\n提示：修改后，点击\"装载&复位\"按钮后，可以再次运行！");
            break;
    }

    if (!jumped) pc_row++;
    else jumped = false;

    pce.value = ndig(pc.toString(16), 2);
    memelem(ndig(pc, 3)).style.backgroundColor = '#99FFCC';


    opcodee.value = ndig(ir.toString(16), 2);
    operande.value = ndig(mar.toString(16), 2);

    if (blockarray != undefined && blockarray.length != 0) {
        if (Number(pc_row) < allblockarray.length) {
            var idblock = allblockarray[Number(pc_row)];
            root.demoWorkspace.highlightBlock(idblock.id);
        } else {
            root.demoWorkspace.highlightBlock(null);
            //dostop();
            //alert("程序结束！没有指令可执行了。");
        }
    }
}

function dorstep() {
    if (mode == 0)
        clearInterval(intvar);
    else {
        dostep();
        var tempChecked;
        if (allblockarray[Number(pc_row)]) {
            tempChecked = allblockarray[Number(pc_row)].getFieldValue("breakpoints");
        }
        if (tempChecked == "TRUE") {
            //mode = 0;
            //clearInterval(intvar);
            dostop();
        }
    }
}

//慢速执行
function doslow() {
    mode = 1;
    intvar = setInterval(dorstep, 500);
    document.getElementsByClassName("slow_speed")[0].disabled = true;
    document.getElementsByClassName("full_speed")[0].disabled = true;
    document.getElementsByClassName("by_step")[0].disabled = true;
    // document.getElementsByClassName("save")[0].disabled = true;
    // document.getElementsByClassName("saveAs")[0].disabled = true;
    // document.getElementsByClassName("open")[0].disabled = true;
    document.getElementsByClassName("reset")[0].disabled = true;
    document.getElementsByClassName("stop")[0].disabled = false;
}

//全速运行
function dorun() {
    mode = 1;
    intvar = setInterval(dorstep, 10);
    document.getElementsByClassName("full_speed")[0].disabled = true;
    document.getElementsByClassName("slow_speed")[0].disabled = true;
    document.getElementsByClassName("by_step")[0].disabled = true;
    // document.getElementsByClassName("save")[0].disabled = true;
    // document.getElementsByClassName("saveAs")[0].disabled = true;
    // document.getElementsByClassName("open")[0].disabled = true;
    document.getElementsByClassName("reset")[0].disabled = true;
    document.getElementsByClassName("stop")[0].disabled = false;
}

//led灯显示
function showLed() {
    var ledArr = document.getElementsByClassName('led');
    var ledStr = PrefixInteger(mdr.toString(2), 8);
    // var ledStr = parseInt(output0e.value).toString(2);
    // console.log(ledStr);
    for (var i = 0; i < 8; i++) {
        if(ledFlag){
            if (ledStr[i] == 1) {
                ledArr[i].style.backgroundColor = 'yellow';
            }
        }else{
            ledArr[i].style.backgroundColor = '#ccc';
        }    
    }
}
function dostop() {
    mode = 0;
    document.getElementsByClassName("slow_speed")[0].disabled = false;
    document.getElementsByClassName("full_speed")[0].disabled = false;
    document.getElementsByClassName("by_step")[0].disabled = false;
    // document.getElementsByClassName("save")[0].disabled = false;
    // document.getElementsByClassName("saveAs")[0].disabled = false;
    // document.getElementsByClassName("open")[0].disabled = false;
    document.getElementsByClassName("reset")[0].disabled = false;
    document.getElementsByClassName("stop")[0].disabled = true;
}