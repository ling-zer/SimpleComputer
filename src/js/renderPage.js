(function (_block) {
    //render blockly toolbox
    function renderBlocklyBox() {
        _block.demoWorkspace = Blockly.inject('blocklyDiv', {
            media: './blockly/media/',
            toolbox: document.getElementById('toolbox')
        });
    }
    //render table
    function renderTable() {
        var r, c;
        var mystr = "存储器区";
        //document.writeln('<div id="memDiv" style="display: inline-block; height: 50%; width: 100%">');
        //document.writeln('<hr><center><h5>存储器(Memory)</h5><table><tbody>');
        document.writeln('<div class="slider"><p class="memery">存储区</p><table><tbody>');
        for (r = 0; r < 32; ++r) {
            document.writeln('<tr>');
            //document.writeln('<td>' + mystr[r%4] + '</td>');
            for (c = 0; c < 8; ++c) {
                document.writeln('<td>' + (((r * 8 + c) > 15) ? (r * 8 + c).toString(16) : ('0' + (r * 8 + c).toString(16))) +
                    ': ' + '<input type="text" id="mem' + Math.floor((r * 8 + c) / 100) + Math.floor(((r * 8 + c) / 10) % 10) + (r * 8 + c) % 10 +
                    '"  size=1 tabindex="' + r * 8 + c + 1 + '"></td>');
            }
            document.writeln('</tr>');
        }
        document.writeln('</tbody></table></div>');
        //document.writeln('</div>');

    }

    //provide to outer
    _block.outerRender = function () {
        renderBlocklyBox();
        renderTable();

    }


})(window.block || (window.block = {}));