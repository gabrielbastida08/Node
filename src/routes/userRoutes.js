const theModel = require('../models/user');

module.exports = function (app){

///////////////////////////////////////////////////////////////////////////////////////////////

    //metodos GET

    app.get('/captura',(req,res)=>{
        theModel.getCaptura((err,data)=>{
            res.json(data);
        });
    });

    app.get('/metas',(req,res)=>{
        theModel.getMetas((err,data)=>{
            res.json(data);
        });
    });

    app.get('/partidas',(req,res)=>{
        theModel.getPartidas((err,data)=>{
            res.json(data);
        });
    });

    app.get('/poa',(req,res)=>{
        theModel.getPoa((err,data)=>{
            res.json(data);
        });
    });

    app.get('/usr',(req,res)=>{
        theModel.getUsr((err,data)=>{
            res.json(data);
        });
    });

///////////////////////////////////////////////////////////////////////////////////////////////

    //metodos POST

    app.post('/captura',(req,res)=>{
        const capturaData = {
            folio: null,
            departamento: req.body.departamento,
            proyecto: req.body.proyecto,
            accion: req.body.accion,
            partida: req.body.partida,
            monto: req.body.monto,
            proceso: req.body.proceso,
            meta: req.body.meta,
            gestiono: req.body.gestiono,
            fecha: req.body.fecha
        };
        theModel.insertCaptura(capturaData,(err,data)=>{
            if (data && data.insertId) {
                res.json({
                    success:true,
                    msg:'dato insertado',
                    data:data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error',
                })
            }
        })
    });

    app.post('/metas',(req,res)=>{
        const metasData = {
            numero_meta: req.body.numero_meta,
            meta_significado: req.body.meta_significado,
            descripcion: req.body.descripcion
        };
        theModel.insertMetas(metasData,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    msg:'dato insertado',
                    data:data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error',
                })
            }
        })
    });

    app.post('/partidas',(req,res)=>{
        const partidasData = {
            numero_partida: req.body.numero_partida,
            monto_presupuestado: req.body.monto_presupuestado,
            monto_ejercido: req.body.monto_ejercido,
            categoria_significado: req.body.categoria_significado
        };
        theModel.insertPartidas(partidasData,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    msg:'dato insertado',
                    data:data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error',
                })
            }
        })
    });

    app.post('/poa',(req,res)=>{
        const poaData = {
            partida: req.body.partida,
            clave_presupuestal: req.body.clave_presupuestal,
            total: req.body.total
        };
        theModel.insertPoa(poaData,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    msg:'dato insertado',
                    data:data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error',
                })
            }
        })
    });

    app.post('/usr',(req,res)=>{
        const usrData = {
            nombre_usuario: req.body.nombre_usuario,
            pass: req.body.pass
        };
        theModel.insertUsr(usrData,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    msg:'dato insertado',
                    data:data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error',
                })
            }
        })
    });

//////////////////////////////////////////////////////////////////////////////////////////////

    //metodos PUT (update)

    app.put('/captura/:folio',(req,res)=>{
        const capturaData = {
            folio: req.params.folio,
            departamento: req.body.departamento,
            proyecto: req.body.proyecto,
            accion: req.body.accion,
            partida: req.body.partida,
            monto: req.body.monto,
            proceso: req.body.proceso,
            meta: req.body.meta,
            gestiono: req.body.gestiono,
            fecha: req.body.fecha
        };
        theModel.updateCaptura(capturaData,(err,data)=>{
            if (data && data.msg) {
                res.json(data)
            }
            else{
                res.json({
                    success:false,
                    msg:"Errorr"
                })
            }
        })
    });

    app.put('/metas/:id',(req,res)=>{
        const metasData = {
            id: req.params.id,
            numero_meta: req.body.numero_meta,
            meta_significado: req.body.meta_significado,
            descripcion: req.body.descripcion
        };
        theModel.updateMetas(metasData,(err,data)=>{
            if (data && data.msg) {
                res.json(data)
            }
            else{
                res.json({
                    success:false,
                    msg:"Errorr"
                })
            }
        })
    });

    app.put('/partidas/:id',(req,res)=>{
        const partidasData = {
            id: req.params.id,
            numero_partida: req.body.numero_partida,
            monto_presupuestado: req.body.monto_presupuestado,
            monto_ejercido: req.body.monto_ejercido,
            categoria_significado: req.body.categoria_significado
        };
        theModel.updatePartidas(partidasData,(err,data)=>{
            if (data && data.msg) {
                res.json(data)
            }
            else{
                res.json({
                    success:false,
                    msg:"Errorr"
                })
            }
        })
    });

    app.put('/poa/:id',(req,res)=>{
        const poaData = {
            id: req.params.id,
            partida: req.body.partida,
            clave_presupuestal: req.body.clave_presupuestal,
            total: req.body.total
        };
        theModel.updatePoa(poaData,(err,data)=>{
            if (data && data.msg) {
                res.json(data)
            }
            else{
                res.json({
                    success:false,
                    msg:"Errorr"
                })
            }
        })
    });

    app.put('/usr/:id',(req,res)=>{
        const usrData = {
            id: req.params.id,
            nombre_usuario: req.body.nombre_usuario,
            pass: req.body.pass
        };
        theModel.updateUsr(usrData,(err,data)=>{
            if (data && data.msg) {
                res.json(data)
            }
            else{
                res.json({
                    success:false,
                    msg:"Errorr"
                })
            }
        })
    });

//////////////////////////////////////////////////////////////////////////////////////////////

    //Metodo DELETE

    app.delete('/captura/:id',(req,res)=>{
        theModel.deleteCaptura(req.params.id,(err,data)=>{
            if (data && data.msg == 'Dato borrado' || data.msg == 'not exist!!!') 
            {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.delete('/metas/:id',(req,res)=>{
        theModel.deleteMetas(req.params.id,(err,data)=>{
            if (data && data.msg == 'Dato borrado' || data.msg == 'not exist!!!') 
            {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.delete('/partidas/:id',(req,res)=>{
        theModel.deletePartidas(req.params.id,(err,data)=>{
            if (data && data.msg == 'Dato borrado' || data.msg == 'not exist!!!') 
            {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.delete('/poa/:id',(req,res)=>{
        theModel.deletePoa(req.params.id,(err,data)=>{
            if (data && data.msg == 'Dato borrado' || data.msg == 'not exist!!!') 
            {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.delete('/usr/:id',(req,res)=>{
        theModel.deleteUsr(req.params.id,(err,data)=>{
            if (data && data.msg == 'Dato borrado' || data.msg == 'not exist!!!') 
            {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

//////////////////////////////////////////////////////////////////////////////////////////////
    
    //metodos GET con id

    app.get('/poaId/:id',(req,res)=>{
        theModel.getSinglePoa(req.params.id,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.get('/capturaId/:id',(req,res)=>{
        theModel.getSingleCaptura(req.params.id,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.get('/partidasId/:id',(req,res)=>{
        theModel.getSinglePartidas(req.params.id,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

    app.get('/metasId/:id',(req,res)=>{
        theModel.getSingleMetas(req.params.id,(err,data)=>{
            if (data) {
                res.json({
                    success:true,
                    data
                })
            }
            else{
                res.json(500).json({
                    msg:"errorr"
                })
            }
        });
    });

//////////////////////////////////////////////////////////////////////////////////////////////    
}