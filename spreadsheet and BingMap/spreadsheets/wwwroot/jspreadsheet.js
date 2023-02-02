export function load_spreadsheet(raw) {
    let travel_plan = [];
    for (let item of raw.split('\n')) {
        if (item.trim().length !== 0)
            travel_plan.push(item.split(', '));
    }


    jspreadsheet.setLicense('[your license key code]');
    jspreadsheet(document.getElementById('spreadsheet'), {
        data: travel_plan,
        columns: [
            { type: 'number', width: 120 },
            { type: 'number', width: 120 },
            { type: 'text', width: 200 },
            {type: 'calendar', width: 100}
        ],
        toolbar: true,
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
        }
    });
    return "";
}
var map = null;
export function load_map() {
    map = new Microsoft.Maps.Map('#map', {
        center: new Microsoft.Maps.Location(44.446165, 26.097133),
        zoom: 16
    });
}