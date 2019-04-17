
Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["red", "R"], ["yellow", "Y"], ["green", "G"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_lightcolor==="red"||dropdown_lightcolor==="R"){
  if(dropdown_switch==="on"){
	var code = "document.getElementById('RedSwitch').style.backgroundColor='red';";
  } else{
	var code = "document.getElementById('RedSwitch').style.backgroundColor='white';";  
  }
  }
  else if(dropdown_lightcolor==="yellow"||dropdown_lightcolor==="Y"){
  if(dropdown_switch==="on"){
	var code = "document.getElementById('YellowSwitch').style.backgroundColor='yellow';";
  } else{
	var code = "document.getElementById('YellowSwitch').style.backgroundColor='white';";  
  }
  }
  else if(dropdown_lightcolor==="green"||dropdown_lightcolor==="G"){
  if(dropdown_switch==="on"){
	var code = "document.getElementById('GreenSwitch').style.backgroundColor='green';";
  } else{
	var code = "document.getElementById('GreenSwitch').style.backgroundColor='white';";  
  }
  }  
  return code;
};


Blockly.Blocks['ld'] = {
  init: function() {
	
    this.appendDummyInput()	
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("LOAD")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
	this.RTL=false;
 this.setTooltip("从存储器取数据");
 this.setHelpUrl("http://cs.ujs.edu.cn");

  }

};



Blockly.JavaScript['ld'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  // TODO: Assemble JavaScript into code variable.
  //var code = 'LD'+ block.getFieldValue('Address')+'\n';
  var code = block.getFieldValue('Address');
  return "00"+code;
};

Blockly.Blocks['st'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("STORE")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("存数据到存储器");
 this.setHelpUrl("http://cs.ujs.edu.cn");
  }/* ,
  onchange: function(event) {	
	 	if(event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CREATE) {
			if(this.isInFlyout) {
				this.getField('breakpoints').setVisible(false);
				this.getField('Line').setVisible(false);
				this.getField('InstrAddr').setVisible(false);
			}			
		}
	} */
};

Blockly.JavaScript['st'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  // TODO: Assemble JavaScript into code variable.
  //var code = '\n';
    var code = block.getFieldValue('Address');
  return "01"+code;
};


Blockly.Blocks['push'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("PUSH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("将累加器AC的值压入堆栈栈顶");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['push'] = function(block) {
  return "02";
};

Blockly.Blocks['pop'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("POP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("从栈顶出栈到累加器AC");
 this.setHelpUrl("");
  }/* ,
    onchange: function(event) {	
	 	if(event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CREATE) {
			if(this.isInFlyout) {
				this.getField('breakpoints').setVisible(false);
				this.getField('Line').setVisible(false);
				this.getField('InstrAddr').setVisible(false);
			}			
		}
	} */
};

Blockly.JavaScript['pop'] = function(block) {
  return "03";
};

Blockly.Blocks['call'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions);	  
    this.appendDummyInput("")
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("CALL")
		.appendField(dropdown, 'Address');
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("调用由指定地址处的子程序");
 this.setHelpUrl("");
 //this.getField('Address').setText("指令000");
  //this.getField('Address').setValue("InstrAddr000");
  }
};

Blockly.JavaScript['call'] = function(block) {
  
  var dropdown_address = block.getFieldValue('Address');
	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);
  return "04"+code;
};

Blockly.Blocks['ret'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("RET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("从子程序返回主程序");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['ret'] = function(block) {
  return "05";
};

Blockly.Blocks['add'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("ADD")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行加法");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['add'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
 
    var code = block.getFieldValue('Address');
  return "06"+code;
};

Blockly.Blocks['sub'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("SUB")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行减法");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sub'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
    var code = block.getFieldValue('Address');
  return "07"+code;
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("AND")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行与运算");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['and'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  
    var code = block.getFieldValue('Address');
  return "08"+code;
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("OR")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行或运算");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['or'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
 
    var code = block.getFieldValue('Address');
  return "09"+code;
};

Blockly.Blocks['xor'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("XOR")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行异或运算");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['xor'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
    var code = block.getFieldValue('Address');
  return "0a"+code;
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("NOT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("执行非运算");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['not'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  return "0b ";
};

Blockly.Blocks['jc'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions); 
	//dropdown.setText("指令0");
	  
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("JC")
		.appendField(dropdown, 'Address');
/*         .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address"); */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("进位或者借位时跳转到指定地址; PC <- ADDR, if CF ==1");
 this.setHelpUrl("");
 //this.getField('Address').setText("指令000");
 //this.getField('Address').setValue("InstrAddr000");
  }//,
    //onchange: function(event) {	
	// 	if(event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CREATE) {

};

Blockly.JavaScript['jc'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');

	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);	
	code="0c"+code;	
  return code;
};

Blockly.Blocks['jz'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions); 
	
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("JZ")
		.appendField(dropdown, 'Address');
/*         .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address"); */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("运算结果为零则跳转; if ZF == 1 then PC <- Addr");
 this.setHelpUrl("");
  //this.getField('Address').setText("指令000");
  // this.getField('Address').setValue("InstrAddr000");
  }
};

Blockly.JavaScript['jz'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  // TODO: Assemble JavaScript into code variable.
		
	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);	
	code="0d"+code;	
  return code;
};

Blockly.Blocks['jo'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions);
	
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("JO")
		.appendField(dropdown, 'Address');
       /*  .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address"); */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("运算结果溢出则跳转; if OF == 1 then PC <- Addr");
 this.setHelpUrl("");
  //this.getField('Address').setText("指令000");
  //this.getField('Address').setValue("InstrAddr000");
  }
};

Blockly.JavaScript['jo'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  // TODO: Assemble JavaScript into code variable.	
	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);
	code="0e"+code;	
  return code;
};

Blockly.Blocks['js'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions);	  
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("JS")
		.appendField(dropdown, 'Address');		
 /*        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address"); */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("运算结果为负则跳转; if SF == 1 then PC <- Addr");
 this.setHelpUrl("");
  //this.getField('Address').setText("指令000");
  // this.getField('Address').setValue("InstrAddr000");
  }
};

Blockly.JavaScript['js'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
  // TODO: Assemble JavaScript into code variable.
	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);	
	code="0f"+code;	
  return code;
};

Blockly.Blocks['jmp'] = {
  init: function() {
 	function dynamicOptions() {
	  var options = addrArray;
	  return options;
	} 
	var dropdown = new Blockly.FieldDropdown(dynamicOptions);	  
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("JMP")
		.appendField(dropdown, 'Address');		
/*         .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address"); */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("无条件直接跳转: PC <- Addr");
 this.setHelpUrl("");
  //this.getField('Address').setText("指令000");
  // this.getField('Address').setValue("InstrAddr000");
  }
};

Blockly.JavaScript['jmp'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
	var code = dropdown_address.slice(2);
	code = parseInt(code);
	code = InstrAddrArray[code];
	code = code.toString(16);
	code =PrefixInteger(code,2);	
	code="10"+code;	
  return code;
};

Blockly.Blocks['in'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("IN")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("从输入设备读取数据：AC <- INPUT[ADDR]");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['in'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
    var code = block.getFieldValue('Address');
	code="11"+code;	
  return code;
};

Blockly.Blocks['out'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("OUT")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("向指定地址的设备输出数据： OUTPUT[ADDR] <- AC");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['out'] = function(block) {
  var dropdown_address = block.getFieldValue('Address');
    var code = block.getFieldValue('Address');
	code="12"+code;	
  return code;
};

Blockly.Blocks['mov_reg_data'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("MOV")
        .appendField(new Blockly.FieldDropdown([["AC","13"], ["SP","14"], ["BR","15"], ["CR","16"]]), "Register")
        .appendField(new Blockly.FieldDropdown([["00H","00"], ["01H","01"], ["02H","02"], ["03H","03"],["04H","04"], ["05H","05"], ["06H","06"], ["07H","07"],["08H","08"], ["09H","09"], ["0aH","0a"], ["0bH","0b"],["0cH","0c"], ["0dH","0d"], ["0eH","0e"], ["0fH","0f"],
												["10H","10"], ["11H","11"], ["12H","12"], ["13H","13"],["14H","14"], ["15H","15"], ["16H","16"], ["17H","17"],["18H","18"], ["19H","19"], ["1aH","1a"], ["1bH","1b"],["1cH","1c"], ["1dH","1d"], ["1eH","1e"], ["1fH","1f"],
												["20H","20"], ["21H","21"], ["22H","22"], ["23H","23"],["24H","24"], ["25H","25"], ["26H","26"], ["27H","27"],["28H","28"], ["29H","29"], ["2aH","2a"], ["2bH","2b"],["2cH","2c"], ["2dH","2d"], ["2eH","2e"], ["2fH","2f"], 
												["30H","30"], ["31H","31"], ["32H","32"], ["33H","33"],["34H","34"], ["35H","35"], ["36H","36"], ["37H","37"],["38H","38"], ["39H","39"], ["3aH","3a"], ["3bH","3b"],["3cH","3c"], ["3dH","3d"], ["3eH","3e"], ["3fH","3f"],
												["40H","40"], ["41H","41"], ["42H","42"], ["43H","43"],["44H","44"], ["45H","45"], ["46H","46"], ["47H","47"],["48H","48"], ["49H","49"], ["4aH","4a"], ["4bH","4b"],["4cH","4c"], ["4dH","4d"], ["4eH","4e"], ["4fH","4f"],
												["50H","50"], ["51H","51"], ["52H","52"], ["53H","53"],["54H","54"], ["55H","55"], ["56H","56"], ["57H","57"],["58H","58"], ["59H","59"], ["5aH","5a"], ["5bH","5b"],["5cH","5c"], ["5dH","5d"], ["5eH","5e"], ["5fH","5f"],		
												["60H","60"], ["61H","61"], ["62H","62"], ["63H","63"],["64H","64"], ["65H","65"], ["66H","66"], ["67H","67"],["68H","68"], ["69H","69"], ["6aH","6a"], ["6bH","6b"],["6cH","6c"], ["6dH","6d"], ["6eH","6e"], ["6fH","6f"],
												["70H","70"], ["71H","71"], ["72H","72"], ["73H","73"],["74H","74"], ["75H","75"], ["76H","76"], ["77H","77"],["78H","78"], ["79H","79"], ["7aH","7a"], ["7bH","7b"],["7cH","7c"], ["7dH","7d"], ["7eH","7e"], ["7fH","7f"],
												["80H","80"], ["81H","81"], ["82H","82"], ["83H","83"],["84H","84"], ["85H","85"], ["86H","86"], ["87H","87"],["88H","88"], ["89H","89"], ["8aH","8a"], ["8bH","8b"],["8cH","8c"], ["8dH","8d"], ["8eH","8e"], ["8fH","8f"],
												["90H","90"], ["91H","91"], ["92H","92"], ["93H","93"],["94H","94"], ["95H","95"], ["96H","96"], ["97H","97"],["98H","98"], ["99H","99"], ["9aH","9a"], ["9bH","9b"],["9cH","9c"], ["9dH","9d"], ["9eH","9e"], ["9fH","9f"],
												["a0H","a0"], ["a1H","a1"], ["a2H","a2"], ["a3H","a3"],["a4H","a4"], ["a5H","a5"], ["a6H","a6"], ["a7H","a7"],["a8H","a8"], ["a9H","a9"], ["aaH","aa"], ["abH","ab"],["acH","ac"], ["adH","ad"], ["aeH","ae"], ["afH","af"],
												["b0H","b0"], ["b1H","b1"], ["b2H","b2"], ["b3H","b3"],["b4H","b4"], ["b5H","b5"], ["b6H","b6"], ["b7H","b7"],["b8H","b8"], ["b9H","b9"], ["baH","ba"], ["bbH","bb"],["bcH","bc"], ["bdH","bd"], ["beH","be"], ["bfH","bf"],
												["c0H","c0"], ["c1H","c1"], ["c2H","c2"], ["c3H","c3"],["c4H","c4"], ["c5H","c5"], ["c6H","c6"], ["c7H","c7"],["c8H","c8"], ["c9H","c9"], ["caH","ca"], ["cbH","cb"],["ccH","cc"], ["cdH","cd"], ["ceH","ce"], ["cfH","cf"],
												["d0H","d0"], ["d1H","d1"], ["d2H","d2"], ["d3H","d3"],["d4H","d4"], ["d5H","d5"], ["d6H","d6"], ["d7H","d7"],["d8H","d8"], ["d9H","d9"], ["daH","da"], ["dbH","db"],["dcH","dc"], ["ddH","dd"], ["deH","de"], ["dfH","df"],
												["e0H","e0"], ["e1H","e1"], ["e2H","e2"], ["e3H","e3"],["e4H","e4"], ["e5H","e5"], ["e6H","e6"], ["e7H","e7"],["e8H","e8"], ["e9H","e9"], ["eaH","ea"], ["ebH","eb"],["ecH","ec"], ["edH","ed"], ["eeH","ee"], ["efH","ef"],
												["f0H","f0"], ["f1H","f1"], ["f2H","f2"], ["f3H","f3"],["f4H","f4"], ["f5H","f5"], ["f6H","f6"], ["f7H","f7"],["f8H","f8"], ["f9H","f9"], ["faH","fa"], ["fbH","fb"],["fcH","fc"], ["fdH","fd"], ["feH","fe"], ["ffH","ff"]												
												]), "Address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("初始化数值给指定的寄存器： Register <- data");
 this.setHelpUrl("");
  //this.getField('Register').setText("AC");
   //this.getField('Register').setValue("13"); 
  }
};

Blockly.JavaScript['mov_reg_data'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
    if(dropdown_register == "AC") dropdown_register="13";
  var dropdown_address  = block.getFieldValue('Address');
 
    var code = dropdown_register + dropdown_address;//block.getFieldValue('Address');
	//code="12"+code;	
  return code;
};

//AC <--- ( reg)
Blockly.Blocks['mov_ac_reg'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("MOV")
		.appendField("AC")
        .appendField(new Blockly.FieldDropdown([["SP","17"], ["BR","18"], ["CR","19"]]), "Register");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("将指定寄存器的数值复制到AC： AC <- Register");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['mov_ac_reg'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
    if(dropdown_register == "SP") dropdown_register="17";
  // TODO: Assemble JavaScript into code variable.
  //var code = '\n';
    var code = dropdown_register;//block.getFieldValue('Address');
	//code="12"+code;	
  return code;
};
// reg  <---- (AC)
Blockly.Blocks['mov_reg_ac'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("MOV")
        .appendField(new Blockly.FieldDropdown([["SP","1a"], ["BR","1b"], ["CR","1c"]]), "Register")
		.appendField("AC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("将累加器AC的值复制到给指定的寄存器： Register <- AC");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['mov_reg_ac'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
  if(dropdown_register == "SP") dropdown_register="1a";  
  // TODO: Assemble JavaScript into code variable.
  //var code = '\n';
    var code = dropdown_register;//block.getFieldValue('Address');
	//code="12"+code;	
  return code;
};

// AC <---- mem[(BR)]
Blockly.Blocks['ldi'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("LDI");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("间接寻址读取存取器到累加器AC： AC <- MEM[BX]");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['ldi'] = function(block) {
    var code = "1d";
	//code="12"+code;	
  return code;
};
//men[(BR)]<---- AC
Blockly.Blocks['sti'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("STI","opcode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("间接寻址将累加器AC存入存取器： MEM[BX] <- AC");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sti'] = function(block) {
  //var dropdown_register = block.getFieldValue('Register');
  // TODO: Assemble JavaScript into code variable.
  //var code = '\n';
    var code = "1e";
	//code="12"+code;	
  return code;
};

Blockly.Blocks['inc_reg'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("INC")
        .appendField(new Blockly.FieldDropdown([["AC","1f"],["SP","23"], ["BR","21"], ["CR","22"]]), "Register");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("将累加器AC的值复制到给指定的寄存器： Register <- AC");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['inc_reg'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
    if(dropdown_register == "AC") dropdown_register="1f";
  // TODO: Assemble JavaScript into code variable.
  //var code = '\n';
    var code = dropdown_register;//block.getFieldValue('Address');
	//code="12"+code;	
  return code;
};

Blockly.Blocks['dec_reg'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldCheckbox("FALSE"), "breakpoints")
        .appendField("指令000", "Line")
        .appendField("地址000", "InstrAddr")	
        .appendField("DEC")
        .appendField(new Blockly.FieldDropdown([["AC","20"],["SP","24"], ["BR","25"], ["CR","26"]]), "Register");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("将累加器AC的值复制到给指定的寄存器： Register <- AC");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dec_reg'] = function(block) {
  var dropdown_register = block.getFieldValue('Register');
  if(dropdown_register == "AC") dropdown_register="23";
    var code = dropdown_register;//block.getFieldValue('Address');
	//code="12"+code;	
  return code;
};
