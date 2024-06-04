Blockly.Python['ntp_Setup'] = function(block) {
  Blockly.Python.definitions_['from_ntp_import_ntp'] = 'import NTP';


  var ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
  
  var code = `NTP.ntp_Setup(${ssid},${password})\n`;
  return code;
};

Blockly.Python['NTP_Update'] = function(block) {
  Blockly.Python.definitions_['from_ntp_import_ntp'] = 'import NTP';
  var code = `NTP.ntp_update\n`;
  return code;
};

Blockly.Python['NTP_Get'] = function(block) {
  Blockly.Python.definitions_['from_ntp_import_ntp'] = 'import NTP';
  var dropdown_axis = block.getFieldValue('time_selection');
  var code = `NTP.get_time(${dropdown_axis})`;
  return [code, Blockly.Python.ORDER_NONE];
};


