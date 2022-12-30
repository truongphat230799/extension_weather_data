Blockly.Blocks["yolobit_update_data_weather "] = {
    init: function () {
      this.jsonInit(
        {
            "type": "block_type",
            "message0": "cập nhật thông tin thời tiết tại %5 tọa độ: kinh độ %1%2 vĩ độ %3%4",
            "args0": [
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "LONG",
                },
                {
                    "type": "input_dummy",
                  },
                {
                  "type": "input_value",
                  "name": "LAT",
                },
                {
                    "type": "input_value",
                    "name": "LOCATION",
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
        var long = Blockly.Python.valueToCode(block, 'LONG', Blockly.Python.ORDER_ATOMIC);
        var lat = Blockly.Python.valueToCode(block, 'LAT', Blockly.Python.ORDER_ATOMIC);
        var location = block.getFieldValue('LOCATION');
        // TODO: Assemble Python into code variable.
        var code = "gc.collect()\n"+"http_response = urequests.get('https://weather1.npnlab.com/weather/getdata?code="+location+"&lon="+ long+"&lat="+ lat+"')\n" + "data = http_response.json().get('data')\n";
        return code;
    };

    Blockly.Blocks["yolobit_get_data_weather"] = {
        init: function () {
          this.jsonInit(
            {
                "type": "data_weather",
                "message0": "lấy dữ liệu %1 từ server OhStem",
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
                      ],
                      [
                        "mô tả thời tiết",
                        "DESCRIPTION"
                      ]
                    ]
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
    Blockly.Python['yolobit_get_data_weather'] = function(block) {
    var dropdown_data_weather = block.getFieldValue('data_weather');
    // TODO: Assemble Python into code variable.
    var code = "";
    if (dropdown_data_weather == DESCRIPTION)
        code = "for i in ujson.loads(data)['weather']\n"+ "\treturn i['description']\n";
    else
        code = "ujson.loads(data)['main']."+dropdown_data_weather;
    return [code, Blockly.Python.ORDER_NONE];
    };





