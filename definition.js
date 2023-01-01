Blockly.Blocks['yolobit_update_data_weather'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "block_type",
            "message0": "cập nhật thời tiết tọa độ: kinh độ %1%2 vĩ độ %3%4",
            "args0": [
                {
                  "type": "input_dummy",
                },
                {
                    "type": "input_value",
                    "name": "LONG",
                    "check": "Number"
                },
                {
                    "type": "input_dummy",
                  },
                {
                    "type": "input_value",
                    "name": "LAT",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#8B4030",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };
    Blockly.Python['yolobit_update_data_weather'] = function(block) {
        Blockly.Python.definitions_['import_urequests'] = 'import urequests';
        Blockly.Python.definitions_['import_gc'] = 'import gc';
        Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
        var long = Blockly.Python.valueToCode(block, 'LONG', Blockly.Python.ORDER_ATOMIC);
        var lat = Blockly.Python.valueToCode(block, 'LAT', Blockly.Python.ORDER_ATOMIC);
        var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = "gc.collect()\n"+"http_response = urequests.get('https://weather1.npnlab.com/weather/getdata?code=VN&lon="+long+"&lat="+lat+"')\n" + "data = http_response.json().get('data')\n";
        return code;
    };

    Blockly.Blocks['yolobit_get_data_weather'] = {
        init: function () {
          this.jsonInit(
            {
                "type": "data_weather",
                "message0": "lấy dữ liệu %1",
                "args0": [
                  {
                    "type": "field_dropdown",
                    "name": "data_weather",
                    "options": [
                      [
                        "nhiệt độ",
                        "get('temp')"
                      ],
                      [
                        "độ ẩm",
                        "get('humidity')"
                      ],
                      [
                        "áp suất",
                        "get('pressure')"
                      ],
                      [
                        "tốc độ gió",
                        "get('speed')"
                      ]
                    ]
                  }
                ],
                "output": null,
                "colour": "#8B4030",
                "tooltip": "",
                "helpUrl": ""
              }
          );
            }
        };
    Blockly.Python['yolobit_get_data_weather'] = function(block) {
        Blockly.Python.definitions_['import_urequests'] = 'import urequests';
        Blockly.Python.definitions_['import_gc'] = 'import gc';
        Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
        var dropdown_data_weather = block.getFieldValue('data_weather');
    // TODO: Assemble Python into code variable.
        var code = "ujson.loads(data)['main']." + dropdown_data_weather + "\n";
        return [code, Blockly.Python.ORDER_NONE];
    };



