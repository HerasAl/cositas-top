const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Ejemplo de ruta para obtener datos desde la base de datos
app.get('/api/municipios', (req, res) => {
  db.query('SELECT * FROM municipios WHERE estado_id=15', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/productos/:id?', (req, res) => {
  const productId = req.params.id;

  // Utiliza LEFT JOIN para obtener productos incluso si no tienen un registro en la tabla rates
  let query = 'SELECT productos.id, productos.title, productos.price, productos.description, productos.category, productos.image, ' +
              'rates.rate, rates.comment ' +
              'FROM productos ' +
              'LEFT JOIN rates ON productos.id = rates.id_producto';

  const queryParams = [];

  if (productId) {
    query += ' WHERE productos.id = ?';
    queryParams.push(productId);
  }

  query += ' LIMIT 9';

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error retrieving data from database');
    } else {
      // Organiza los resultados en el formato esperado
      const formattedResults = [];

      results.forEach(row => {
        const existingProduct = formattedResults.find(product => product.id === row.id);

        if (!existingProduct) {
          formattedResults.push({
            id: row.id,
            title: row.title,
            price: row.price,
            description: row.description,
            category: row.category,
            image: row.image,
            rating: {
              rate: row.rate || 0,
              comments: row.comment ? [row.comment] : []  // Inicializa un array de comentarios si hay un comentario disponible
            }
          });
        } else {
          existingProduct.rating.comments.push(row.comment);
        }
      });

      if (formattedResults.length === 1 && productId) {
        res.status(200).json(formattedResults[0]); // Retorna el único producto encontrado sin un array
      } else {
        res.status(200).json(formattedResults); // Retorna todos los productos en un array
      }
    }
  });
});





// Nueva ruta para manejar el registro de usuarios
app.post('/api/registro', (req, res) => {
  const {
    nombre,
    ap,
    am,
    curp,
    calle,
    mz,
    lt,
    col,
    id_municipio,
    cp,
    tipo_artesano,
    artesania,
    correo,
    telefono
  } = req.body;

  // Asegúrate de realizar validaciones y manejar las contraseñas de manera segura (puedes agregar esta lógica según sea necesario)
  // const hashedPassword = hashPassword(contrasena);

  const sql = `
    INSERT INTO artesanos (nombre, ap, am, curp, calle, mz, lt, col, id_municipio, cp, tipo_artesano, artesania, correo, telefono)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nombre,
    ap,
    am,
    curp,
    calle,
    mz,
    lt,
    col,
    id_municipio,
    cp,
    tipo_artesano,
    artesania,
    correo,
    telefono
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send({
        'status': 0,
        'message': 'Por favor revise sus campos',
        'consulta': sql
      });
    } else {
      res.status(201).send({
        'status': 1,
        'message': '!Bienvenido a la Comunidad Artesanal de Cositas!'
      });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

