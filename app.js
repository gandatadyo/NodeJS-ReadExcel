

const router_module = require('./router_module.js')
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Minervatt',
    database: 'dbexcelgroup',
    multipleStatements: true
});
exports.module_app = () => { return pool }




const proccessdata = async () => {
    // init data
    if (typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(__dirname + '/data1.xlsx');
    // console.log(workbook.Sheets);

    let ctline = 1048576;
    let data1 = workbook.Sheets.data1;
    // console.log(data1);

    let ssql = 'INSERT INTO `dbtest` (`Tebal`,`Lebar`,`Panjang`,`Unit`) values '
    let ssqlitem = ''
    for (let index = 2; index < ctline; index++) { // index 1 for caption

        let cellA = data1['A' + index] // t
        let cellB = data1['B' + index] // w
        let cellC = data1['C' + index] // p
        let cellD = data1['D' + index] // pcs

        let vA = ''
        let vB = ''
        let vC = ''
        let vD = ''


        let stringdata = ""
        if (cellA != null) {
            stringdata = "Column A: " + cellA.v
            vA = cellA.v
        }
        if (cellB != null) {
            stringdata = stringdata + " , Column B: " + cellB.v
            vB = cellB.v
        }
        if (cellC != null) {
            stringdata = stringdata + " , Column C: " + cellC.v
            vC = cellC.v
        }
        if (cellD != null) {
            stringdata = stringdata + " , Column D: " + cellD.v
            vD = cellD.v
        }

        if (stringdata != "") ssqlitem = ssqlitem + `\n ("${vA}","${vB}","${vC}","${vD}"),`
    }
    if (ssqlitem != '') {
        ssqlitem = ssqlitem.replace(/.$/, ";") // replace last character
        ssql = ssql + ssqlitem
    }

    // clear data and inject on database
    await new Promise((resolve) => router_module.ExecQuery('DELETE FROM `dbtest`', resolve))
    await new Promise((resolve) => router_module.ExecQuery(ssql, resolve))
    console.log('successfully insert data');

    // query for group
    let ssql1 = 'SELECT `Tebal`,`Lebar`,`Panjang`,SUM(Unit)AS Unit FROM `dbtest` GROUP BY `Tebal`,`Lebar`,`Panjang`'
    let result_Resolve = await new Promise((resolve) => router_module.OpenQuery(ssql1, resolve))

    // render view to excel
    dataglobal = []
    dataglobal.push(["No","T (TEBAL)", "W (LEBAR)", "P", "Jumlah", "Rumus"])
    let resultdata = result_Resolve.dataset
    for (let i = 0; i < resultdata.length; i++) {
        let datarow = [i+1,resultdata[i].Tebal, resultdata[i].Lebar, resultdata[i].Panjang, resultdata[i].Unit]
        dataglobal.push(datarow)
    }

    // rencder column for formula
    for (let index = 1; index < dataglobal.length; index++) { // index 1 for caption
        let ctaddres = index+1
        dataglobal[index][5]=`=(B${ctaddres}*C${ctaddres}*D${ctaddres})*E${ctaddres}`
    }

    // retrun xlsx hasil data.xlsx
    var wb =  XLSX . utils . book_new ();
    var ws_name = "Hasil Data";
    var ws_data = dataglobal
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    XLSX.writeFile(wb, ws_name+'.xlsb');
    console.log('successfully convert data to excel')
    process.exit()
}

proccessdata()