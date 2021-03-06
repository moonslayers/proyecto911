const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const exportData = require('./controller/mov-entr'); // CONTROLLER
const exportData2 = require('./controller/mov-sali'); // CONTROLLER
const exportData3 = require('./controller/inter-entr'); // CONTROLLER
const exportData4 = require('./controller/inter-sali'); // CONTROLLER
const exportData5 = require('./controller/convenios'); // CONTROLLER
const encoder = bodyParser.urlencoded();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');



//para poder acceder a los recursos staticos como los js o los css o los htmls...
app.use(express.static(__dirname+"/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

//session initialize
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


router.get('/',function(req,res){
  if(req.session.username){
    res.render('views/main.html',{name:req.session.username,tipo:req.session.tipo});
  }else{
    res.render('views/login.html',{data:''});
  }
});

router.get('/main',function(req,res){
  if(req.session.username){
    res.render('views/main.html',{name:req.session.username,tipo:req.session.tipo})
  }else{
    res.redirect("/");
  }
});

router.get('/movilidad-entrada-tabla',function(req,res){
  var con = require('./config');
  if(req.session.username){
    if(req.session.tipo=="Coordinador"){
      con.query('SELECT * FROM movilidad_academica_entrada order by validar',function(err,rows)     {
        if(err){
         throw err;
         res.render('views/movilidad-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
         }else{
          res.render('views/movilidad-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
         }
      });
    }else{
      con.query('SELECT * FROM movilidad_academica_entrada where AUTOR=? order by validar',req.session.username,function(err,rows)     {
        if(err){
         throw err; 
         res.render('views/movilidad-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
        }else{
          res.render('views/movilidad-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
        }
      });
    }
  }else{
    res.redirect("/");
  }
});

router.get('/movilidad-salida-tabla',function(req,res){
  var con = require('./config');
  if(req.session.username){
    if(req.session.tipo=="Coordinador"){
      con.query('SELECT * FROM movilidad_academica_salida order by validar',function(err,rows)     {
        if(err){
         res.render('views/movilidad-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
         }else{
          res.render('views/movilidad-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
         }
      });
    }else{
      con.query('SELECT * FROM movilidad_academica_salida where AUTOR=? order by validar',req.session.username,function(err,rows)     {
        if(err){
         res.render('views/movilidad-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
        }else{
          res.render('views/movilidad-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
        }
      });
    }
  }else{
    res.redirect("/");
  }
});

router.get('/intercambio-entrada-tabla',function(req,res){
  var con = require('./config');
  if(req.session.username){
    if(req.session.tipo=="Coordinador"){
      con.query('SELECT * FROM intercambio_estudiantil_entrada order by validar',function(err,rows)     {
        if(err){
         throw err;
         res.render('views/intercambio-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
         }else{
          res.render('views/intercambio-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
         }
      });
    }else{
      con.query('SELECT * FROM intercambio_estudiantil_entrada where AUTOR=? order by validar',req.session.username,function(err,rows)     {
        if(err){
         throw err; 
         res.render('views/intercambio-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
        }else{
          res.render('views/intercambio-entrada-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
        }
      });
    }
  }else{
    res.redirect("/");
  }
});

router.get('/intercambio-salida-tabla',function(req,res){
  var con = require('./config');
  if(req.session.username){
    if(req.session.tipo=="Coordinador"){
      con.query('SELECT * FROM intercambio_estudiantil_salida order by validar',function(err,rows)     {
        if(err){
         throw err;
         res.render('views/intercambio-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
         }else{
          res.render('views/intercambio-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
         }
      });
    }else{
      con.query('SELECT * FROM intercambio_estudiantil_salida where AUTOR=? order by validar',req.session.username,function(err,rows)     {
        if(err){
         throw err; 
         res.render('views/intercambio-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
        }else{
          res.render('views/intercambio-salida-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
        }
      });
    }
  }else{
    res.redirect("/");
  }
});

router.get('/convenios-tabla',function(req,res){
  var con = require('./config');
  if(req.session.username && req.session.tipo=="Coordinador"){
    if(req.session.tipo=="Coordinador"){
      con.query('SELECT * FROM convenios order by validar',function(err,rows)     {
        if(err){
         throw err;
         res.render('views/convenios-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
         }else{
          res.render('views/convenios-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
         }
      });
    }else{
      con.query('SELECT * FROM intercambio_academica_entrada where AUTOR=? order by validar',req.session.username,function(err,rows)     {
        if(err){
         throw err; 
         res.render('views/convenios-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:''});
        }else{
          res.render('views/convenios-tabla.html',{name:req.session.username,tipo:req.session.tipo,data:rows});
        }
      });
    }
  }else{
    res.redirect("/");
  }
});


//aqui convertimos la data de la base de datos a excel y la exportamos
router.get('/excel-movilidad-entrada', exportData);
router.get('/excel-movilidad-salida', exportData2);
router.get('/excel-intercambio-entrada', exportData3);
router.get('/excel-intercambio-salida', exportData4);
router.get('/excel-convenios', exportData5);

//formularios
router.get('/movilidad-entrada',function(req,res){
  if(req.session.username){
    res.render('views/movilidad-entrada.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/movilidad-salida',function(req,res){
  if(req.session.username){
    res.render('views/movilidad-salida.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/intercambio-entrada',function(req,res){
  if(req.session.username){
    res.render('views/intercambio-entrada.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/intercambio-salida',function(req,res){
  if(req.session.username){
    res.render('views/intercambio-salida.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/convenios',function(req,res){
  if(req.session.username){
    res.render('views/convenios.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/passchange',function(req,res){
  if(req.session.username){
    res.render('views/passchange.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/newcor',function(req,res){
  if(req.session.username && req.session.tipo=="Coordinador"){
    res.render('views/newcor.html',{name:req.session.username,data:'',tipo:req.session.tipo});
  }else{
    res.redirect("/");
  }
});

router.get('/usuarios',function(req,res){
  if(req.session.tipo=='Coordinador'){
    var con = require('./config');
      con.query('SELECT * FROM usuarios where APROBADO=0',function(err,rows)     {
        if(err){
         throw err; 
          res.render('views/usuarios.html',{name:req.session.username,tipo:req.session,data:'',data2:''});   
        }else{
            con.query('SELECT * FROM usuarios where NEWPASS=1',function(err,rows2)     {
              if(err){
               throw err; 
               res.render('views/usuarios.html',{name:req.session.username,tipo:req.session.tipo,data:rows,data2:''});
              }else{
                res.render('views/usuarios.html',{name:req.session.username,tipo:req.session.tipo,data:rows,data2:rows2});
              }
            });
        }
      });
  }else{
    res.redirect("/");
  }
});

router.get('/signup',function(req,res){
  res.render('views/signup.html',{data:''});
});

router.get('/signout',function(req,res){
  req.session.destroy();
  res.redirect('/');
});
router.get('/ayuda',function(req,res){
  res.render('views/ayuda.html',{data:''});
});


//add the router, HERE FINISH ALL ROUTES GET PAGES ------------------------------
app.use('/', router);

//main post methods here, we get main request, specific when coordinador wants to edit/validate some row.

app.post('/passchange',encoder,function(req,res){
  var con = require('./config');
  var username = req.session.username;
  var password = req.body.password;
  con.query("select * from usuarios where USUARIO = ? and PASSWORD = UPPER(SHA1(UNHEX(SHA1(?)))) and APROBADO=1", [username, password], function(error, results, fields){
	  if (error) throw error;
	  if (results && results.length > 0) {
	    var sql="update usuarios set PASSWORD=upper(sha1(unhex(sha1(?)))) where USUARIO=?"
      var values=[req.body.password1,username];
      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("Passchange");
        res.render('views/passchange.html',{name:req.session.username,tipo:req.session.tipo,data:'Success'});
      });
	  }else{
	    res.render('views/passchange.html',{name:req.session.username,tipo:req.session.tipo,data:'Error'});
	  }
  });
});

app.post('/newcor',encoder,function(req,res){
  var con = require('./config');
  var username = req.body.username;
  con.query("select * from usuarios where USUARIO = ? and APROBADO=1", [username], function(error, results, fields){
	  if (error) throw error;
	  if (results && results.length > 0) {
	    var sql="update usuarios set TIPO='Coordinador' where USUARIO=?"
      var values=[username];
      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("newcor");
        res.render('views/newcor.html',{name:req.session.username,tipo:req.session.tipo,data:'Success'});
      });
	  }else{
	    res.render('views/newcor.html',{name:req.session.username,tipo:req.session.tipo,data:'Error'});
	  }
  });
});

app.post('/ayuda',encoder,function(req,res){
    var con = require('./config');
    var sql="update usuarios set NEWPASS=1 where USUARIO=?";
    sql="update usuarios set NEWPASS=1 where USUARIO=?";
    con.query(sql,[req.body.usuario],function(err,result){
      if (err) throw err;
    });
    res.render('views/ayuda.html',{data:'success'});
});

app.post('/delete',encoder,function(req,res){
  var con = require('./config');
  if(req.body.usuario){
    var sql="delete from "+req.body.table+" where USUARIO='"+req.body.usuario+"'";
    con.query(sql,function(err,result){
      if(err)
        throw err;
      res.redirect('/usuarios');
    });
  }else if(req.body.table){
    var sql="delete from "+req.body.table+" where ID="+req.body.id;
    con.query(sql,function(err,result){
      if(err)
        throw err;
      if(req.body.table=="movilidad_academica_entrada"){
        res.redirect('/movilidad-entrada-tabla');
      }else if(req.body.table=="movilidad_academica_salida"){
        res.redirect('/movilidad-salida-tabla');
      }else if(req.body.table=="intercambio_estudiantil_entrada"){
        res.redirect('/intercambio-entrada-tabla');
      }else if(req.body.table=="intercambio_estudiantil_salida"){
        res.redirect('/intercambio-salida-tabla');
      }else if(req.body.table=="convenios"){
        res.redirect('/convenios-tabla');
      }
    });
  }
});

app.post('/usuarios',encoder,function(req,res){
  var con = require('./config');
  if(req.body.table=='aprobar'){
    var sql="update usuarios set APROBADO=1 where USUARIO=?";
    con.query(sql,[req.body.usuario],function(err,result){
      if (err) throw err;
      console.log("New user aproved");
      res.redirect('/usuarios')
    });
  }else if (req.body.table=='newpass'){
    var sql="update usuarios set PASSWORD=upper(sha1(unhex(sha1('qwerty')))) where USUARIO=?";
    con.query(sql,[req.body.usuario],function(err,result){
      if (err) throw err;
      console.log("New pass reset");
    });
    sql="update usuarios set NEWPASS=0 where USUARIO=?";
    con.query(sql,[req.body.usuario],function(err,result){
      if (err) throw err;
    });
    res.redirect('/usuarios')
  }
});

app.post('/signup',encoder,function(req,res){
  var con = require('./config');
  var sql= "select * from usuarios where USUARIO=?";
  con.query(sql,[req.body.usuario],function(err,row){
    if (err) throw err;
    if(!row.length){
      var sql="insert into usuarios values (?,?,?,?,upper(sha1(unhex(sha1(?)))),?,?,?)"
      var values=[req.body.usuario,req.body.nombre,req.body.apellido1,req.body.apellido2,req.body.password1,'Unidad',0,0];
      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log("New user added");
        res.render('views/login.html',{data:'Success'});
      });
    }else{
      res.render('views/login.html',{data:'Email'});
    }
  });
  
  
});

app.post('/main',encoder, function(req, res) {
  var table = req.body.table;
  var ids = req.body.id;
  //console.log("POST success");
  if(table== "convenios"){
    var con = require('./config');
    con.query('SELECT * FROM convenios where ID='+ids,function(err,row)     {
      if(err){
        throw error;
      }else{
        res.render('views/convenios.html',{name:req.session.username,tipo:req.session.tipo,data:row});
      }
    });
  }else if(table== "movilidad-entrada"){
    var con = require('./config');
    con.query('SELECT * FROM movilidad_academica_entrada where ID='+ids,function(err,row)     {
      if(err){
        throw error;
      }else{
        res.render('views/movilidad-entrada.html',{name:req.session.username,tipo:req.session.tipo,data:row});
      }
    });
  }else if(table== "movilidad-salida"){
    var con = require('./config');
    con.query('SELECT * FROM movilidad_academica_salida where ID='+ids,function(err,row)     {
      if(err){
        throw error;
      }else{
        res.render('views/movilidad-salida.html',{name:req.session.username,tipo:req.session.tipo,data:row});
      }
    });
  }else if(table== "intercambio-entrada"){
    var con = require('./config');
    con.query('SELECT * FROM intercambio_estudiantil_entrada where ID='+ids,function(err,row)     {
      if(err){
        throw error;
      }else{
        res.render('views/intercambio-entrada.html',{name:req.session.username,tipo:req.session.tipo,data:row});
      }
    });
  }else if(table== "intercambio-salida"){
    var con = require('./config');
    con.query('SELECT * FROM intercambio_estudiantil_salida where ID='+ids,function(err,row)     {
      if(err){
        throw error;
      }else{
        res.render('views/intercambio-salida.html',{name:req.session.username,tipo:req.session.tipo,data:row});
      }
    });
  }
});

app.post('/convenios',encoder,function(req,res){
  var con = require('./config');
  if(req.body.form=="guardar"){
    var sql = "UPDATE convenios SET PERIODO_ID=?,PERIODO=?,CONVENIO_VINCID=?,CONVENIO_VINC=?,FECHA=?,SECTOR_ID=?,SECTOR=?"
    +",ORIGEN_ID=?,ORIGEN=?,PAIS_VINC=?,INST_ORG=?,COOP=?,INVE=?,INTER=?,MOVI=?,validar=? WHERE ID="+req.body.id;
    
    var vali=0;
    if(req.session.tipo=='Coordinador'){
      vali=1;}
    var sector,origen;
    if(req.body.sectorId== 1){
      sector="Publico";
    }else if (req.body.sectorId==2){
      sector="Social";
    }else{
      sector="Privado";
    }
    if(req.body.origenId==1){
      origen="Nacional";
    }else{
      origen="Internacional";
    }
    
    var values=[parseInt(req.body.periodoId),req.body.periodo,req.body.convenioVincId,
      req.body.convenioVinc,req.body.fecha,parseInt(req.body.sectorId),
      sector,parseInt(req.body.origenId),origen,
      req.body.paisVinc,req.body.instOrg,parseInt(req.body.coop),
      parseInt(req.body.inve),parseInt(req.body.inter),parseInt(req.body.movi),vali];
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  }
  res.redirect('/convenios-tabla');
});

app.post('/movilidad-entrada',encoder,function(req,res){
  var con = require('./config');
  if(req.body.form=="guardar"){
    var sql = "UPDATE movilidad_academica_entrada SET PERIODO_ID=?,PERIODO=?,CAMPUS_ID=?,CAMPUS_DESC=?,UNIDAD_ID=?,UNIDAD=?,"
    +"VISITANTE_ID=?,VISITANTE_NOMBRE=?,VISITANTE_APELLIDO1=?,VISITANTE_APELLIDO2=?,SEXO_ID=?,SEXO=?,NIVEL_ID=?,NIVEL=?,DISCAPACIDAD=?,"
    +"HABLANTE_INDIGENA=?,ORIGEN_INDIGENA=?,UE=?,UE_PAIS=?,UE_ENTIDAD=?,UE_IDIOMA=?,TMA_ID=?,TMA=?,validar=? WHERE ID="+req.body.id;
    
    var sexo,nivel,tma;
    
    var vali=0;
    if(req.session.tipo=='Coordinador')
      vali=1;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    if(req.body.tmaId == 1)
      tma="Docencia"
    else if(req.body.tmaId ==2)
      tma="Estancias Sabaticas"
    else
      tma="Estancia de Investigacion"
    
    
    var values = [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),
      req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.visistanteId),req.body.visitante_nombre,
      req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),
      sexo,parseInt(req.body.nivelId),nivel,parseInt(req.body.discapacidadId),
      parseInt(req.body.hablanteId),parseInt(req.body.origenId),req.body.ue,
      req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,
      parseInt(req.body.tmaId),tma,vali];
    
    con.query(sql,values, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  }
  res.redirect('/movilidad-entrada-tabla');
});

app.post('/movilidad-salida',encoder,function(req,res){
  var con = require('./config');
  if(req.body.form=="guardar"){
    var sql = "UPDATE movilidad_academica_salida SET PERIODO_ID=?,PERIODO=?,CAMPUS_ID=?,CAMPUS_DESC=?,UNIDAD_ID=?,UNIDAD=?,"
    +"EMPLEADO_ID=?,EMPLEADO_NOMBRE=?,EMPLEADO_APELLIDO1=?,EMPLEADO_APELLIDO2=?,SEXO_ID=?,SEXO=?,"
    +"UR=?,UR_PAIS=?,UR_ENTIDAD=?,UR_IDIOMA=?,TMA_ID=?,TMA=?,validar=? WHERE ID="+req.body.id;
    var tma,sexo,nivel;
    var vali=0;
    if(req.session.tipo=='Coordinador')
      vali=1;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    if(req.body.tmaId == 1)
      tma="Docencia"
    else if(req.body.tmaId ==2)
      tma="Estancias Sabaticas"
    else
      tma="Estancia de Investigacion"
    
    var values = [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),
      req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.empleadoId),req.body.empleado_nombre,
      req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),
      sexo,req.body.ur,req.body.urPais,req.body.urEntidad,
      req.body.urIdioma,parseInt(req.body.tmaId),tma,vali];
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  }
  res.redirect('/movilidad-salida-tabla');
});

app.post('/intercambio-entrada',encoder,function(req,res){
  var con = require('./config');
  if(req.body.form=="guardar"){
    var sql = "UPDATE intercambio_estudiantil_entrada SET PERIODO_ID=?,PERIODO=?,CAMPUS_ID=?,CAMPUS_DESC=?,UNIDAD_ID=?,UNIDAD=?,"
    +"NIVEL_ID=?,NIVEL=?,PROGRAMA_ID=?,PROGRAMA_DESC=?,AREA_ID=?,AREA=?,ESTUDIANTE_ID=?,ESTUDIANTE_NOMBRE=?,ESTUDIANTE_APELLIDO1=?,ESTUDIANTE_APELLIDO2=?,SEXO_ID=?,SEXO=?,DISCAPACIDAD=?,"
    +"HABLANTE_INDIGENA=?,ORIGEN_INDIGENA=?,UR=?,UR_PAIS=?,UR_ENTIDAD=?,UR_IDIOMA=?,FINAN_ID=?,FINAN=?,FINAN_VAL=?,DATE_START=?,DATE_END=?,validar=? WHERE ID="+req.body.id;
    var nivel,sexo,finan;
    var vali=0;
    if(req.session.tipo=='Coordinador')
      vali=1;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
      
    if(req.body.finanId == 1)
      finan="Si"
    else
      finan="No"
    
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    var values = [
      parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.nivelId),nivel,parseInt(req.body.programaId),req.body.programa,parseInt(req.body.areaId),req.body.area,parseInt(req.body.estudianteId),
      req.body.estudiante_nombre,req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),sexo,parseInt(req.body.discapacidadId),parseInt(req.body.hablanteId),parseInt(req.body.origenId),
      req.body.ue,req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,parseInt(req.body.finanId),finan,parseInt(req.body.finan_val),req.body.fechaInicio,req.body.fechaFinal,vali
    ];
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  }
  res.redirect('/intercambio-entrada-tabla');
});

app.post('/intercambio-salida',encoder,function(req,res){
  var con = require('./config');
  if(req.body.form=="guardar"){
    var sql = "UPDATE intercambio_estudiantil_salida SET PERIODO_ID=?,PERIODO=?,CAMPUS_ID=?,CAMPUS_DESC=?,UNIDAD_ID=?,UNIDAD=?,"
    +"NIVEL_ID=?,NIVEL=?,PROGRAMA_ID=?,PROGRAMA_DESC=?,AREA_ID=?,AREA=?,ESTUDIANTE_ID=?,ESTUDIANTE_NOMBRE=?,ESTUDIANTE_APELLIDO1=?,ESTUDIANTE_APELLIDO2=?,SEXO_ID=?,SEXO=?,DISCAPACIDAD=?,"
    +"HABLANTE_INDIGENA=?,ORIGEN_INDIGENA=?,UR=?,UR_PAIS=?,UR_ENTIDAD=?,UR_IDIOMA=?,FINAN_ID=?,FINAN=?,FINAN_VAL=?,DATE_START=?,DATE_END=?,validar=? WHERE ID="+req.body.id;
    var nivel,sexo,finan;
    var vali=0;
    if(req.session.tipo=='Coordinador')
      vali=1;
    
    if(req.body.sexoId == 1)
      sexo="Femenino";
    else
      sexo="Masculino";
      
    if(req.body.finanId == 1)
      finan="Si";
    else
      finan="No";
    
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    var values = [
      parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.nivelId),nivel,parseInt(req.body.programaId),req.body.programa,parseInt(req.body.areaId),req.body.area,parseInt(req.body.estudianteId),
      req.body.estudiante_nombre,req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),sexo,parseInt(req.body.discapacidadId),parseInt(req.body.hablanteId),parseInt(req.body.origenId),
      req.body.ue,req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,parseInt(req.body.finanId),finan,parseInt(req.body.finan_val),req.body.fechaInicio,req.body.fechaFinal,vali
    ];
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  }
  res.redirect('/intercambio-salida-tabla');
});
//formularios and login inputs ---------------------------------------------
app.post('/', encoder, function(req, res){
  var con = require('./config');

  if(req.body.form == "login"){
  //DIEGO para agregar contrase??as la funcion password no esta soportada en mysql 8
  // debemos usar la funcion directa UPPER(SHA1(UNHEX(SHA1('qwerty'))))
  //asi quedaria insert into usuarios (USUARIO, PASSWORD, TIPO) values ('judith',UPPER(SHA1(UNHEX(SHA1('qwerty')))), 'Coordinador');


	  /* login */
	  var username = req.body.username;
	  var password = req.body.password;
	  con.query("select * from usuarios where USUARIO = ? and PASSWORD = UPPER(SHA1(UNHEX(SHA1(?)))) and APROBADO=1", [username, password], function(error, results, fields) {
		  if (error) throw error;
		  if (results  && results.length > 0) {
		    req.session.tipo=results[0].TIPO;
		    req.session.username=req.body.username;
		    console.log("Sesion iniciada: "+req.session.username +"\ntipo: "+req.session.tipo);
			  res.redirect("/main");
		  } else {
		    console.log("LOGIN INCORRECTO: "+ results)
			  res.render('views/login.html',{data:'loginbad'});
		  }
	  })
	  /* falta probar y probablemente arreglar el query */
  }
  
  if(req.body.form == "movilidad-entrada"){
    console.log("Connected!");
    var sql = "INSERT INTO movilidad_academica_entrada (`PERIODO_ID`,`PERIODO`,`CAMPUS_ID`,`CAMPUS_DESC`,`UNIDAD_ID`,`UNIDAD`,"
    +"`VISITANTE_ID`,`VISITANTE_NOMBRE`,`VISITANTE_APELLIDO1`,`VISITANTE_APELLIDO2`,`SEXO_ID`,`SEXO`,`NIVEL_ID`,`NIVEL`,`DISCAPACIDAD`,"
    +"`HABLANTE_INDIGENA`,`ORIGEN_INDIGENA`,`UE`,`UE_PAIS`,`UE_ENTIDAD`,`UE_IDIOMA`,`TMA_ID`,`TMA`,`validar`,`AUTOR` ) VALUES ?";
    var sexo,nivel,tma;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    if(req.body.tmaId == 1)
      tma="Docencia"
    else if(req.body.tmaId ==2)
      tma="Estancias Sabaticas"
    else
      tma="Estancia de Investigacion"
    
    
    var values = [
      [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),
      req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.visistanteId),req.body.visitante_nombre,
      req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),
      sexo,parseInt(req.body.nivelId),nivel,parseInt(req.body.discapacidadId),
      parseInt(req.body.hablanteId),parseInt(req.body.origenId),req.body.ue,
      req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,
      parseInt(req.body.tmaId),tma,0,req.session.username]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    console.log(req.body.periodo);
    res.redirect('/main');
  }else if(req.body.form == "movilidad-salida"){
    console.log("Connected!");
    var sql = "INSERT INTO movilidad_academica_salida (`PERIODO_ID`,`PERIODO`,`CAMPUS_ID`,`CAMPUS_DESC`,`UNIDAD_ID`,`UNIDAD`,"
    +"`EMPLEADO_ID`,`EMPLEADO_NOMBRE`,`EMPLEADO_APELLIDO1`,`EMPLEADO_APELLIDO2`,`SEXO_ID`,`SEXO`,"
    +"`UR`,`UR_PAIS`,`UR_ENTIDAD`,`UR_IDIOMA`,`TMA_ID`,`TMA`,`validar`,`AUTOR`) VALUES ?";
    var tma,sexo,nivel;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    if(req.body.tmaId == 1)
      tma="Docencia"
    else if(req.body.tmaId ==2)
      tma="Estancias Sabaticas"
    else
      tma="Estancia de Investigacion"
    
    var values = [
      [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),
      req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.empleadoId),req.body.empleado_nombre,
      req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),
      sexo,req.body.ur,req.body.urPais,req.body.urEntidad,
      req.body.urIdioma,parseInt(req.body.tmaId),tma,0,req.session.username]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  console.log(req.body.form);
  res.redirect('/main');
}else if(req.body.form == "convenios"){
    console.log("Connected!");
    var sql = "INSERT INTO convenios (`PERIODO_ID`,`PERIODO`,`CONVENIO_VINCID`,`CONVENIO_VINC`,`FECHA`,`SECTOR_ID`,"
    +"`SECTOR`,`ORIGEN_ID`,`ORIGEN`,`PAIS_VINC`,`INST_ORG`,"
    +"`COOP`,`INVE`,`INTER`,`MOVI`,`validar`,`AUTOR`) VALUES ?";
    var sector,origen;
    if(req.body.sectorId== 1){
      sector="Publico";
    }else if (req.body.sectorId==2){
      sector="Social";
    }else{
      sector="Privado";
    }
    if(req.body.origenId==1){
      origen="Nacional";
    }else{
      origen="Internacional";
    }
    
    var values = [
      [parseInt(req.body.periodoId),req.body.periodo,req.body.convenioVincId,
      req.body.convenioVinc,req.body.fecha,parseInt(req.body.sectorId),
      sector,parseInt(req.body.origenId),origen,
      req.body.paisVinc,req.body.instOrg,parseInt(req.body.coop),
      parseInt(req.body.inve),parseInt(req.body.inter),parseInt(req.body.movi),0,req.session.username]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    console.log(req.body.form);
    res.redirect('/main');
  }else if(req.body.form == "intercambio-entrada"){
    console.log("Connected!");
    var sql = "INSERT INTO intercambio_estudiantil_entrada (`PERIODO_ID`,`PERIODO`,`CAMPUS_ID`,`CAMPUS_DESC`,`UNIDAD_ID`,`UNIDAD`,"
    +"`NIVEL_ID`,`NIVEL`,`PROGRAMA_ID`,`PROGRAMA_DESC`,`AREA_ID`,`AREA`,`ESTUDIANTE_ID`,`ESTUDIANTE_NOMBRE`,`ESTUDIANTE_APELLIDO1`,`ESTUDIANTE_APELLIDO2`,`SEXO_ID`,`SEXO`,`DISCAPACIDAD`,"
    +"`HABLANTE_INDIGENA`,`ORIGEN_INDIGENA`,`UR`,`UR_PAIS`,`UR_ENTIDAD`,`UR_IDIOMA`,`FINAN_ID`,`FINAN`,`FINAN_VAL`,`DATE_START`,`DATE_END`,`validar`,`AUTOR`) VALUES ?"
    var nivel,sexo,finan;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
      
    if(req.body.finanId == 1)
      finan="Si"
    else
      finan="No"
    
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    var values = [
      [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.nivelId),nivel,parseInt(req.body.programaId),req.body.programa,parseInt(req.body.areaId),req.body.area,parseInt(req.body.estudianteId),
      req.body.estudiante_nombre,req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),sexo,parseInt(req.body.discapacidadId),parseInt(req.body.hablanteId),parseInt(req.body.origenId),
      req.body.ue,req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,parseInt(req.body.finanId),finan,parseInt(req.body.finan_val),req.body.fechaInicio,req.body.fechaFinal,0,req.session.username]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    console.log(req.body.form);
    res.redirect('/main');
  }else if(req.body.form == "intercambio-salida"){
    console.log("Connected!");
    var sql = "INSERT INTO intercambio_estudiantil_salida (`PERIODO_ID`,`PERIODO`,`CAMPUS_ID`,`CAMPUS_DESC`,`UNIDAD_ID`,`UNIDAD`,"
    +"`NIVEL_ID`,`NIVEL`,`PROGRAMA_ID`,`PROGRAMA_DESC`,`AREA_ID`,`AREA`,`ESTUDIANTE_ID`,`ESTUDIANTE_NOMBRE`,`ESTUDIANTE_APELLIDO1`,`ESTUDIANTE_APELLIDO2`,`SEXO_ID`,`SEXO`,`DISCAPACIDAD`,"
    +"`HABLANTE_INDIGENA`,`ORIGEN_INDIGENA`,`UR`,`UR_PAIS`,`UR_ENTIDAD`,`UR_IDIOMA`,`FINAN_ID`,`FINAN`,`FINAN_VAL`,`DATE_START`,`DATE_END`,`validar`,`AUTOR`) VALUES ?"
    var nivel,sexo,finan;
    
    if(req.body.sexoId == 1)
      sexo="Femenino"
    else
      sexo="Masculino"
      
    if(req.body.finanId == 1)
      finan="Si"
    else
      finan="No"
    
    if(req.body.nivelId == 1)
      nivel="Licenciatura"
    else if (req.body.nivelId == 2)
      nivel="Especialidad"
    else if (req.body.nivelId == 3)
      nivel="Maestria"
    else
      nivel="Doctorado"
    
    var values = [
      [parseInt(req.body.periodoId),req.body.periodo,parseInt(req.body.campusId),req.body.campus,parseInt(req.body.unidadId),req.body.unidad,
      parseInt(req.body.nivelId),nivel,parseInt(req.body.programaId),req.body.programa,parseInt(req.body.areaId),req.body.area,parseInt(req.body.estudianteId),
      req.body.estudiante_nombre,req.body.apellido1,req.body.apellido2,parseInt(req.body.sexoId),sexo,parseInt(req.body.discapacidadId),parseInt(req.body.hablanteId),parseInt(req.body.origenId),
      req.body.ue,req.body.uePais,req.body.ueEntidad,req.body.ueIdioma,parseInt(req.body.finanId),finan,parseInt(req.body.finan_val),req.body.fechaInicio,req.body.fechaFinal,0,req.session.username]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    console.log(req.body.form);
    res.redirect('/main');
  }
  
  
  
});

app.listen(process.env.port || 4000);

console.log('Running at Port 4000');
