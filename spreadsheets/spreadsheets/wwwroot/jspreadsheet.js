export function load_spreadsheet() {



    jspreadsheet.setLicense('[your license key code]');
    jspreadsheet(document.getElementById('spreadsheet'), {
        toolbar: true,
        worksheets: [
            {
                minDimensions: [10, 10],
                worksheetName: "Calculus"
            },
            { minDimensions: [10, 20] }
        ],
        tabs:true
    });
    return "";
}