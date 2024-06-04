({
    name: "NTP", // Category Name
    description: "Get Real Time Clock from internet",
    author: "Nawa Phansaen",
    category: "Timing",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#FF5757", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: '<label text="For Setup Wifi"></label>',
        },
        {
            xml: `
            <block type="ntp_Setup">
                <value name="ssid">
                    <shadow type="text">
                        <field name="TEXT">--wifi-name--</field>
                    </shadow>
                </value>
                <value name="password">
                    <shadow type="text">
                        <field name="TEXT">--wifi-password--</field>
                    </shadow>
                </value>
            </block>
        `
        },
        {
            xml: '<label text="For Get data"></label>',
        },
       // "NTP_Update",
        "NTP_Get",
    ],
});
