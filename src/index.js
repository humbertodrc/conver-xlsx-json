var XLSX = require("xlsx");

const ExcelToJson = () => {
	const excel = XLSX.readFile("src/data/data.xlsx");

	const nombreHoja = excel.SheetNames;
	let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
	// console.log(datos)

	const jDatos = [];

	for (let i = 0; i < jDatos.length; i++) {
		const dato = datos[i];
		jDatos.push({
			...dato,
			Fecha: new Date(dato.Fecha - (25567 + 2) * 86400 * 1000),
		});
	}
};

ExcelToJson();
