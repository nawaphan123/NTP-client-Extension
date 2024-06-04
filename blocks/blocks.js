Blockly.defineBlocksWithJsonArray(
  [

    {
      "type": "ntp_Setup",
      "message0": "Setup Wifi ssid %1 | password %2 |",
      "args0": [
        {
          "type": "input_value",
          "name": "ssid",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "password",
          "check": "String"
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#FF5757",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "NTP_Update",
      "message0": "Update Time",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#FF5757",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "NTP_Get",
      "message0": "Get Time %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "time_selection",
          "options": [
            [
              "Year",
              "0"
            ],
            [
              "Month",
              "1"
            ],
            [
              "Day",
              "2"
            ],
            [
              "Hour",
              "3"
            ],
            [
              "Minute",
              "4"
            ],
            [
              "Second",
              "5"
            ]
          ]
        }
      ],
      "output": null,
      "colour": "#FF5757",
      "tooltip": "",
      "helpUrl": ""
    },
  ]
);
