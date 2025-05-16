// actualizarIds.js
const fs = require('fs');
const path = require('path');

// Rutas relativas a la carpeta "src"
const inputPath = path.join(__dirname, 'data/products.json');
const outputPath = path.join(__dirname, 'data/products_con_ids.json');

// Leer y parsear el archivo JSON original
const rawData = fs.readFileSync(inputPath, 'utf8');
const products = JSON.parse(rawData);

// Reasignar los IDs de forma correlativa
const updatedProducts = products.map((product, index) => ({
  ...product,
  id: String(index + 1).padStart(5, '0'),
}));

// Guardar el nuevo archivo
fs.writeFileSync(outputPath, JSON.stringify(updatedProducts, null, 2), 'utf8');

console.log(`✅ IDs actualizados correctamente. Archivo generado en: ${outputPath}`);
