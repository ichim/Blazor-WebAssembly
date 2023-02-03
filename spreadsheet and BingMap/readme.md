
# Working with Jspreadsheet and Bing Map

## Prerequests

You will need a Bing Map account and a JSpreadsheet account.

For JSpreadsheet, you can get your License Code from here:

    https://jspreadsheet.com/me/profile

For Bing Map, you can get your License Code from here:

    https://www.bingmapsportal.com/Global/Consent


## _Scripts_ and _Cascade Style Sheets_ references

You must copy the following into ./wwwroot/index.html (wwwroot of webassembly project):

- Reference for Jspreadsheet

cascade style sheets:

    <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
    <link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

scripts:

    <script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
    <script src="https://jsuites.net/v4/jsuites.js"></script>
    
- Reference for Bing Map

scripts:

    <script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[your bing ky code]' async defer></script>
    
The interaction of the spreadsheet with the map is done through the context menu:

    contextMenu: function (o, x, y, e, items, section) {
            items.push({
                title: 'Go To',
                onclick: function () {
                    let longitude = parseFloat(o.getCell(0, y).innerHTML);
                    let latitude = parseFloat(o.getCell(1, y).innerHTML);
                    if (map !== null)
                        map.setView({
                            center: new Microsoft.Maps.Location(latitude, longitude),
                            zoom: 10
                        })
                }
            })

For more information, you can watch:

    https://youtu.be/wH5bBRxZk8A

