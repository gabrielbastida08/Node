const mysql = require('mysql');

conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'control_presupuestal'
});

let theModel = {};

///////////////////////////////////////////////////////////////////////////////////////////////////////

//metodos GET

theModel.getCaptura = (callback)=>{
    if(conection){
        conection.query('SELECT * FROM captura ',
    (err,rows)=>{
        if (err){
            throw err;
        }
        else{
            callback(null,rows);
            }
    }
        )
    }
};

theModel.getMetas = (callback)=>{
    if(conection){
        conection.query('SELECT * FROM metas ',
    (err,rows)=>{
        if (err){
            throw err;
        }
        else{
            callback(null,rows);
            }
    }
        )
    }
};

theModel.getPartidas = (callback)=>{
    if(conection){
        conection.query('SELECT * FROM partidas ',
    (err,rows)=>{
        if (err){
            throw err;
        }
        else{
            callback(null,rows);
            }
    }
        )
    }
};

theModel.getPoa = (callback)=>{
    if(conection){
        conection.query('SELECT * FROM poa ',
    (err,rows)=>{
        if (err){
            throw err;
        }
        else{
            callback(null,rows);
            }
    }
        )
    }
};

theModel.getUsr = (callback)=>{
    if(conection){
        conection.query('SELECT * FROM usr ',
    (err,rows)=>{
        if (err){
            throw err;
        }
        else{
            callback(null,rows);
            }
    }
        )
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////

//metodos POST

theModel.insertCaptura = (capturaData,callback) =>{
    if (conection) {
        conection.query(
            'INSERT INTO captura SET ?',capturaData,
            (err,result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null,{
                        'insertId':result.insertId
                    })
                }
            }
        )
    }
};

theModel.insertMetas = (metasData,callback) =>{
    if (conection) {
        conection.query(
            'INSERT INTO metas SET ?',metasData,
            (err,result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null,{
                        'insertId':result.insertId
                    })
                }
            }
        )
    }
};

theModel.insertPartidas = (partidasData,callback) =>{
    if (conection) {
        conection.query(
            'INSERT INTO partidas SET ?',partidasData,
            (err,result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null,{
                        'insertId':result.insertId
                    })
                }
            }
        )
    }
};

theModel.insertPoa = (poaData,callback) =>{
    if (conection) {
        conection.query(
            'INSERT INTO poa SET ?',poaData,
            (err,result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null,{
                        'insertId':result.insertId
                    })
                }
            }
        )
    }
};

theModel.insertUsr = (usrData,callback) =>{
    if (conection) {
        conection.query(
            'INSERT INTO usr SET ?',usrData,
            (err,result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null,{
                        'insertId':result.insertId
                    })
                }
            }
        )
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

//metodos UPDATE

theModel.updateCaptura = (capturaData,callback)=>{
    if (conection) {
        const sql = `UPDATE captura SET 
        departamento = ${conection.escape(capturaData.departamento)},
        proyecto = ${conection.escape(capturaData.proyecto)},
        accion = ${conection.escape(capturaData.accion)},
        partida = ${conection.escape(capturaData.partida)},
        monto = ${conection.escape(capturaData.monto)},
        proceso = ${conection.escape(capturaData.proceso)},
        meta = ${conection.escape(capturaData.meta)},
        gestiono = ${conection.escape(capturaData.gestiono)},
        fecha = ${conection.escape(capturaData.fecha)}
        WHERE folio = ${conection.escape(capturaData.folio)}`

        conection.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }
            else if(result.affectedRows >= 1){
                callback(null,{
                    "msg":"success"
                });
            }
            else {
                callback(null,{
                    "msg":"failure"
                });
            }
        })
    }
};

theModel.updateMetas = (metasData,callback)=>{
    if (conection) {
        const sql = `UPDATE metas SET 
        numero_meta = ${conection.escape(metasData.numero_meta)},
        meta_significado = ${conection.escape(metasData.meta_significado)},
        descripcion = ${conection.escape(metasData.descripcion)}
        WHERE numero_meta = ${conection.escape(metasData.id)}`

        conection.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }
            else if(result.affectedRows >= 1){
                callback(null,{
                    "msg":"success"
                });
            }
            else {
                callback(null,{
                    "msg":"failure"
                });
            }
        })
    }
};

theModel.updatePartidas = (partidasData,callback)=>{
    if (conection) {
        const sql = `UPDATE partidas SET 
        numero_partida = ${conection.escape(partidasData.numero_partida)},
        monto_presupuestado = ${conection.escape(partidasData.monto_presupuestado)},
        monto_ejercido = ${conection.escape(partidasData.monto_ejercido)},
        categoria_significado = ${conection.escape(partidasData.categoria_significado)}
        WHERE numero_partida = ${conection.escape(partidasData.id)}`

        conection.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }
            else if(result.affectedRows >= 1){
                callback(null,{
                    "msg":"success"
                });
            }
            else {
                callback(null,{
                    "msg":"failure"
                });
            }
        })
    }
};

theModel.updatePoa = (poaData,callback)=>{
    if (conection) {
        const sql = `UPDATE poa SET 
        partida = ${conection.escape(poaData.partida)},
        clave_presupuestal = ${conection.escape(poaData.clave_presupuestal)},
        total = ${conection.escape(poaData.total)}
        WHERE partida = ${conection.escape(poaData.id)}`

        conection.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }
            else if(result.affectedRows >= 1){
                callback(null,{
                    "msg":"success"
                });
            }
            else {
                callback(null,{
                    "msg":"failure"
                });
            }
        })
    }
};

theModel.updateUsr = (usrData,callback)=>{
    if (conection) {
        const sql = `UPDATE usr SET 
        nombre_usuario = ${conection.escape(usrData.nombre_usuario)},
        pass = ${conection.escape(usrData.pass)}
        WHERE nombre_usuario = ${conection.escape(usrData.id)}`

        conection.query(sql,(err,result)=>{
            if (err) {
                throw err;
            }
            else if(result.affectedRows >= 1){
                callback(null,{
                    "msg":"success"
                });
            }
            else {
                callback(null,{
                    "msg":"failure"
                });
            }
        })
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Metodos DELETE

theModel.deleteCaptura = (id,callback)=>{
    if (conection) {
        let sql = `
        SELECT * FROM captura WHERE folio = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (row) {
                let sql = `DELETE FROM captura WHERE folio = ${id}`;
                conection.query(sql,(err,result)=>{
                    if (err) {
                        throw err;
                    }
                    else{
                        callback(null,{
                            msg:"Dato borrado"
                        })
                    }
                })
            }
            else{
                callback(null,{
                    msg:"not exist!!!"
                })
            }
        });
    }
};

theModel.deleteMetas = (id,callback)=>{
    if (conection) {
        let sql = `
        SELECT * FROM metas WHERE numero_meta = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (row) {
                let sql = `DELETE FROM metas WHERE numero_meta = ${id}`;
                conection.query(sql,(err,result)=>{
                    if (err) {
                        throw err;
                    }
                    else{
                        callback(null,{
                            msg:"Dato borrado"
                        })
                    }
                })
            }
            else{
                callback(null,{
                    msg:"not exist!!!"
                })
            }
        });
    }
};

theModel.deletePartidas = (id,callback)=>{
    if (conection) {
        let sql = `
        SELECT * FROM partidas WHERE numero_partida = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (row) {
                let sql = `DELETE FROM partidas WHERE numero_partida = ${id}`;
                conection.query(sql,(err,result)=>{
                    if (err) {
                        throw err;
                    }
                    else{
                        callback(null,{
                            msg:"Dato borrado"
                        })
                    }
                })
            }
            else{
                callback(null,{
                    msg:"not exist!!!"
                })
            }
        });
    }
};

theModel.deletePoa = (id,callback)=>{
    if (conection) {
        let sql = `
        SELECT * FROM poa WHERE partida = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (row) {
                let sql = `DELETE FROM poa WHERE partida = ${id}`;
                conection.query(sql,(err,result)=>{
                    if (err) {
                        throw err;
                    }
                    else{
                        callback(null,{
                            msg:"Dato borrado"
                        })
                    }
                })
            }
            else{
                callback(null,{
                    msg:"not exist!!!"
                })
            }
        });
    }
};

theModel.deleteUsr = (id,callback)=>{
    if (conection) {
        let sql = `
        SELECT * FROM usr WHERE nombre_usuario = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (row) {
                let sql = `DELETE FROM usr WHERE nombre_usuario = ${conection.escape(id)} `;
                conection.query(sql,(err,result)=>{
                    if (err) {
                        throw err;
                    }
                    else{
                        callback(null,{
                            msg:"Dato borrado"
                        })
                    }
                })
            }
            else{
                callback(null,{
                    msg:"not exist!!!"
                })
            }
        });
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

//metodos GET con id

theModel.getSinglePoa = (id,callback)=>{
    if (conection) {
        let  sql = `
        SELECT * FROM poa WHERE partida = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (err) {
                throw err;
            }
            else{
                callback(null,{
                    msg:"todo bien",
                    row
                })
            }
        });
    }
};

theModel.getSingleCaptura = (id,callback)=>{
    if (conection) {
        let  sql = `
        SELECT * FROM captura WHERE folio = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (err) {
                throw err;
            }
            else{
                callback(null,{
                    msg:"todo bien",
                    row
                })
            }
        });
    }
};

theModel.getSinglePartidas = (id,callback)=>{
    if (conection) {
        let  sql = `
        SELECT * FROM partidas WHERE numero_partida = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (err) {
                throw err;
            }
            else{
                callback(null,{
                    msg:"todo bien",
                    row
                })
            }
        });
    }
};

theModel.getSingleMetas = (id,callback)=>{
    if (conection) {
        let  sql = `
        SELECT * FROM metas WHERE numero_meta = ${conection.escape(id)}`;

        conection.query(sql,(err,row)=>{
            if (err) {
                throw err;
            }
            else{
                callback(null,{
                    msg:"todo bien",
                    row
                })
            }
        });
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = theModel;