const db = require('./util/database');  // contiene la configuracion de mi dependecia sql, de toda la BD
const express = require('express');
const router = express.Router();

// ROUTES 

//crear el html con respuesta
router.get('/', function (req, res) {  // http://localhost:3000
    const sql = 'SELECT id, name, lastname, email, edad, create_add FROM respuestas';
    db.query(sql, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.render('home', {
                respuestas: result
            })
        }
    })
});

router.get('/add-response', function(req, res) {
    res.render('getTestForm', {
        editing: false
    })
})

router.post('/add-response', function (req, res) {
    const sql = `INSERT INTO respuestas (res_1, res_2, res_3, res_4, res_5, res_6, res_7, res_8, res_9, res_10, res_11, res_12, res_13, res_14, res_15, res_16, res_17, res_18, res_19, res_20, name, lastname, email, edad) VALUES ('${req.body.res_1}', '${req.body.res_2}', '${req.body.res_3}','${req.body.res_4}','${req.body.res_5}','${req.body.res_6}','${req.body.res_7}','${req.body.res_8}','${req.body.res_9}','${req.body.res_10}','${req.body.res_11}','${req.body.res_12}','${req.body.res_13}','${req.body.res_14}','${req.body.res_15}','${req.body.res_16}','${req.body.res_17}','${req.body.res_18}','${req.body.res_19}','${req.body.res_20}','${req.body.name}','${req.body.lastname}','${req.body.email}','${req.body.edad}')`;
    db.query(sql, function (err, result){
        if (err) {
           console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

router.get('/result', function (req, res){
    let sql = `SELECT * FROM respuestas` 
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
  

//Borrado
router.post('/delete/:answerId', function (req, res) {
    const answerId = req.params.answerId;
    const sql = `DELETE FROM respuestas where id = ${answerId}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
    });
}); 



// Actualizar

router.get('/actualiza/:answerId', function(req, res){
    const answerId = parseInt(req.params.answerId);
    const sql = `SELECT * FROM respuestas where id = ${answerId}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.render('getTestForm', {
                datos: result[0],
                editing:true
            });
        }
    });
});


/*`UPDATE trip SET trip_name = '${req.body.name}', trip_description = '${req.body.description}', trip_partner = '${req.body.partner}', trip_photo = '${req.body.photo}' where trip_id = '${req.body.id}'`;*/

router.post('/actualiza/:answerId', function (req, res) {
    const responseID = req.params.answerId;
    const sql = `UPDATE respuestas SET 
                        res_1 = ${req.body.res_1}, 
                        res_2 = ${req.body.res_2}, 
                        res_3 = ${req.body.res_3}, 
                        res_4 = ${req.body.res_4}, 
                        res_5 = ${req.body.res_5}, 
                        res_6 = ${req.body.res_6}, 
                        res_7 = ${req.body.res_7}, 
                        res_8 = ${req.body.res_8}, 
                        res_9 = ${req.body.res_9}, 
                        res_10 = ${req.body.res_10}, 
                        res_11 = ${req.body.res_11}, 
                        res_12 = ${req.body.res_12}, 
                        res_13 = ${req.body.res_13}, 
                        res_14 = ${req.body.res_14}, 
                        res_15 = ${req.body.res_15}, 
                        res_16 = ${req.body.res_16}, 
                        res_17 = ${req.body.res_17}, 
                        res_18 = ${req.body.res_18}, 
                        res_19 = ${req.body.res_19}, 
                        res_20 = ${req.body.res_20}, 
                        name = '${req.body.name}', 
                        lastname = '${req.body.lastname}', 
                        email = '${req.body.email}', 
                        edad = ${req.body.edad} WHERE respuestas.id = ${responseID}`;
    db.query(sql, function (err, result){
        if (err) {
           console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

/*router.post('/add-response', function (req, res) {
    let sql = `INSERT INTO trip (trip_name, trip_description, trip_partner, trip_photo) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.partner}', '${req.body.photo}')`;
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            let trip = {
                id: result.insertId,
                name: req.body.name,
                description: req.body.description,
                partner: req.body.partner,
                photo: req.body.photo
            }
            res.send(trip);
        }
    });
});
*/



/*

app.get('/trips', function (req, res) {
    let sql = `SELECT * FROM trip`
    db.query(sql, function (err, result) {   // query method has 2 parameters: sql variable and a callback function that bears the query and the error
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});
*/

/*
app.patch('/trips/update', function (req, res) {
    let sql = `UPDATE trip SET trip_name = '${req.body.name}', trip_description = '${req.body.description}', trip_partner = '${req.body.partner}', trip_photo = '${req.body.photo}' where trip_id = '${req.body.id}'`;
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.post('/trips/delete', function (req, res) {
    let sql = `DELETE FROM trip where trip_id = '${req.body.id}'`;
    db.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});  */

module.exports = router;