-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: 911db
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `convenios`
--

DROP TABLE IF EXISTS `convenios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `convenios` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int NOT NULL,
  `PERIODO` varchar(20) NOT NULL,
  `CONVENIO_VINCID` varchar(50) NOT NULL,
  `CONVENIO_VINC` varchar(50) NOT NULL,
  `FECHA` varchar(50) DEFAULT NULL,
  `SECTOR_ID` int NOT NULL,
  `SECTOR` varchar(50) NOT NULL,
  `ORIGEN_ID` int NOT NULL,
  `ORIGEN` varchar(50) NOT NULL,
  `PAIS_VINC` varchar(50) NOT NULL,
  `INST_ORG` varchar(100) NOT NULL,
  `COOP` tinyint(1) NOT NULL,
  `INVE` tinyint(1) NOT NULL,
  `INTER` tinyint(1) NOT NULL,
  `MOVI` tinyint(1) NOT NULL,
  `validar` tinyint DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `convenios`
--

LOCK TABLES `convenios` WRITE;
/*!40000 ALTER TABLE `convenios` DISABLE KEYS */;
INSERT INTO `convenios` VALUES (1,13245,'periodo3','54321','convenio2','12/02/2021',2,'Social',1,'Nacional','mexico','unam',1,2,1,2,0,'judith'),(2,12356,'periodo4','13546','convenio4','12/02/2021',2,'Social',1,'Nacional','mexico','uabc',2,1,1,2,0,'judith'),(3,123562,'periodo43','135462','LOS MAS PROS','12/02/2021',2,'Social',1,'Nacional','mexico','uabc',2,1,1,2,1,'judith'),(4,354135,'120912lp??l','354135','poderes de los pobres','12/02/2021',2,'Social',1,'Nacional','mexico','uabc',1,2,1,2,0,'judith'),(5,65465,'peridos','454654','algo ninteres','12/02/2021',2,'Social',1,'Nacional','EUA','uabc',2,2,1,1,0,'judith'),(6,65432,'periodo555','541354','poderesss','12/02/2021',2,'Social',1,'Nacional','mexico','uabc',1,2,2,1,0,'judith'),(7,3541354,'periodo21','123127','convenio invest','1999-05-21',2,'Social',1,'Nacional','peru','machina',1,2,1,1,0,'judith@uabc.edu.mx'),(8,1,'periodo2','3','Ciencia','2022-05-19',2,'Social',1,'Nacional','Estados Unidos','Daves California',1,1,2,1,1,'jluna@uabc.edu.mx'),(9,1,'q','1','q','2022-06-03',1,'Publico',1,'Nacional','q','q',1,1,2,1,0,'jluna@uabc.edu.mx'),(10,1,'q','1','q','2022-06-03',1,'Publico',2,'Internacional','q','q',1,2,1,2,0,'jluna@uabc.edu.mx');
/*!40000 ALTER TABLE `convenios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intercambio_estudiantil_entrada`
--

DROP TABLE IF EXISTS `intercambio_estudiantil_entrada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intercambio_estudiantil_entrada` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int unsigned NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int unsigned NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int unsigned NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `NIVEL_ID` int unsigned NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `PROGRAMA_ID` int unsigned NOT NULL,
  `PROGRAMA_DESC` varchar(100) NOT NULL,
  `AREA_ID` int unsigned NOT NULL,
  `AREA` varchar(50) NOT NULL,
  `ESTUDIANTE_ID` int unsigned NOT NULL,
  `ESTUDIANTE_NOMBRE` varchar(50) NOT NULL,
  `ESTUDIANTE_APELLIDO1` varchar(50) NOT NULL,
  `ESTUDIANTE_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `DISCAPACIDAD` tinyint(1) NOT NULL,
  `HABLANTE_INDIGENA` tinyint(1) NOT NULL,
  `ORIGEN_INDIGENA` tinyint(1) NOT NULL,
  `UR` varchar(50) NOT NULL,
  `UR_PAIS` varchar(50) NOT NULL,
  `UR_ENTIDAD` varchar(50) NOT NULL,
  `UR_IDIOMA` varchar(50) NOT NULL,
  `FINAN_ID` tinyint(1) NOT NULL,
  `FINAN` varchar(10) NOT NULL,
  `FINAN_VAL` int NOT NULL,
  `DATE_START` varchar(50) DEFAULT NULL,
  `DATE_END` varchar(50) DEFAULT NULL,
  `validar` tinyint DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intercambio_estudiantil_entrada`
--

LOCK TABLES `intercambio_estudiantil_entrada` WRITE;
/*!40000 ALTER TABLE `intercambio_estudiantil_entrada` DISABLE KEYS */;
INSERT INTO `intercambio_estudiantil_entrada` VALUES (1,54321,'perido22',235435,'sauzal',354365,'ciencias',1,'Licenciatura',354354,'ciencias computacionales',3542354,'investigacion',345612,'juan','perez','lopez',2,'Masculino',2,1,2,'tijuana','meixco','BAJA CALIFORNIA','espa??ol',1,'Si',0,'12/02/2021','12/02/2021',1,'judith'),(2,1,'q',1,'q',1,'q',2,'Especialidad',1,'q',1,'q',1,'q','q','q',1,'Femenino',1,1,1,'q','q','q','q',1,'Si',1,'2023-06-13','2023-06-20',0,'jluna@uabc.edu.mx'),(3,2202,'2',2,'Tijuana',500,'FAC. CS. QUIM. E INGENIERIA',1,'Licenciatura',400,'quimica',299,'ciencias',333,'Alonso ','arellano','luna',2,'Masculino',2,2,2,'Unam','MEXICO','ciudad de mexico','ESPA??OL',1,'Si',5000,'2022-06-27','2022-11-30',0,'jluna@uabc.edu.mx');
/*!40000 ALTER TABLE `intercambio_estudiantil_entrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intercambio_estudiantil_salida`
--

DROP TABLE IF EXISTS `intercambio_estudiantil_salida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intercambio_estudiantil_salida` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int unsigned NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int unsigned NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int unsigned NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `NIVEL_ID` int unsigned NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `PROGRAMA_ID` int unsigned NOT NULL,
  `PROGRAMA_DESC` varchar(100) NOT NULL,
  `AREA_ID` int unsigned NOT NULL,
  `AREA` varchar(50) NOT NULL,
  `ESTUDIANTE_ID` int unsigned NOT NULL,
  `ESTUDIANTE_NOMBRE` varchar(50) NOT NULL,
  `ESTUDIANTE_APELLIDO1` varchar(50) NOT NULL,
  `ESTUDIANTE_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `DISCAPACIDAD` tinyint(1) NOT NULL,
  `HABLANTE_INDIGENA` tinyint(1) NOT NULL,
  `ORIGEN_INDIGENA` tinyint(1) NOT NULL,
  `UR` varchar(50) NOT NULL,
  `UR_PAIS` varchar(50) NOT NULL,
  `UR_ENTIDAD` varchar(50) NOT NULL,
  `UR_IDIOMA` varchar(50) NOT NULL,
  `FINAN_ID` tinyint(1) NOT NULL,
  `FINAN` varchar(10) NOT NULL,
  `FINAN_VAL` int NOT NULL,
  `DATE_START` varchar(50) DEFAULT NULL,
  `DATE_END` varchar(50) DEFAULT NULL,
  `validar` tinyint DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intercambio_estudiantil_salida`
--

LOCK TABLES `intercambio_estudiantil_salida` WRITE;
/*!40000 ALTER TABLE `intercambio_estudiantil_salida` DISABLE KEYS */;
INSERT INTO `intercambio_estudiantil_salida` VALUES (1,987654,'periodo5',635435,'Tecate',6546,'FACULTAD DE IDIOMAS TECATE',3,'Maestria',546654,'INGENIERIA',54465,'INGENIERIA',213564,'ALONDRA','VALDEZ','LOPEZ',1,'Femenino',2,1,2,'CIENCIAS','MEXICO','BC','espa??ol',1,'Si',8000,'12/02/2021','12/02/2021',1,'judith');
/*!40000 ALTER TABLE `intercambio_estudiantil_salida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movilidad_academica_entrada`
--

DROP TABLE IF EXISTS `movilidad_academica_entrada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movilidad_academica_entrada` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int unsigned NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int unsigned NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int unsigned NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `VISITANTE_ID` int unsigned NOT NULL,
  `VISITANTE_NOMBRE` varchar(50) NOT NULL,
  `VISITANTE_APELLIDO1` varchar(50) NOT NULL,
  `VISITANTE_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `NIVEL_ID` int unsigned NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `DISCAPACIDAD` tinyint(1) NOT NULL,
  `HABLANTE_INDIGENA` tinyint(1) NOT NULL,
  `ORIGEN_INDIGENA` tinyint(1) NOT NULL,
  `UE` varchar(50) NOT NULL,
  `UE_PAIS` varchar(50) NOT NULL,
  `UE_ENTIDAD` varchar(50) NOT NULL,
  `UE_IDIOMA` varchar(50) NOT NULL,
  `TMA_ID` tinyint unsigned NOT NULL,
  `validar` tinyint DEFAULT NULL,
  `TMA` varchar(50) DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movilidad_academica_entrada`
--

LOCK TABLES `movilidad_academica_entrada` WRITE;
/*!40000 ALTER TABLE `movilidad_academica_entrada` DISABLE KEYS */;
INSERT INTO `movilidad_academica_entrada` VALUES (2,1234,'periodo1',1325,'VALLE DORADO',5413,'CIENCIAS',65465,'JUAN','PEREZ','MARTINEZ',2,'Masculino',1,'Licenciatura',2,1,1,'CIENCIAS','MEXICO','BAJA CALIFORNIA','ESPA??OL',1,0,'Docencia','judith'),(3,65465,'periodo5',35435,'Mexicali',65465,'FAC. DE CIENCIAS HUMANAS',54654,'Luis','Lopez','Doriga',2,'Masculino',4,'Doctorado',2,2,1,'SAUZAL','MEXICO','BAJA CALIFORNIA','espanol',3,1,'Estancia de Investigacion','judith'),(4,321654,'periodo5',3524354,'VALLe DORADO',654654,'MEDICINA',354354,'MARIA','LOPEZ','CATOLICA',1,'Femenino',2,'Especialidad',1,2,1,'INGENIERIA','USA','California','english',1,0,'Docencia','judith'),(5,354321,'2022-2',324354,'VALLe DORADO',35435,'ensenada',54354,'JUDITH','LUNA','SERRANO',1,'Femenino',4,'Doctorado',2,1,2,'SAUZAL','MEXICO','BAJA CALIFORNIA','ESPA??OL',2,1,'Estancias Sabaticas','judith'),(6,9999,'periodo',62155,'destino',5435435,'unidaddd',4524,'fernanada','alcala','perrez',1,'Femenino',1,'Licenciatura',1,1,1,'medicina','mexico','sonora','espa??ol',3,0,'Estancia de Investigacion','judith'),(7,35135,'periodo34',13543,'ensenada',51354,'tijuana',351354,'jose','perez','lopez',2,'Masculino',2,'Especialidad',2,2,1,'ESPa??a','madrid','galaga','espa??ol',2,0,'Estancias Sabaticas','jluna@uabc.edu.mx'),(9,2022,'1',3,'Ensenada',400,'FACULTAD DE CIENCIAS',10,'Juana ','de Arco','salen',1,'Femenino',3,'Maestria',1,2,1,'Universidad de Oaxaca','MEXICO','Oaxaca','ESPA??OL',1,1,'Docencia','jluna@uabc.edu.mx');
/*!40000 ALTER TABLE `movilidad_academica_entrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movilidad_academica_salida`
--

DROP TABLE IF EXISTS `movilidad_academica_salida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movilidad_academica_salida` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int unsigned NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int unsigned NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int unsigned NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `EMPLEADO_ID` int unsigned NOT NULL,
  `EMPLEADO_NOMBRE` varchar(50) NOT NULL,
  `EMPLEADO_APELLIDO1` varchar(50) NOT NULL,
  `EMPLEADO_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `UR` varchar(50) NOT NULL,
  `UR_PAIS` varchar(50) NOT NULL,
  `UR_ENTIDAD` varchar(50) NOT NULL,
  `UR_IDIOMA` varchar(50) NOT NULL,
  `TMA_ID` int unsigned NOT NULL,
  `TMA` varchar(50) NOT NULL,
  `validar` tinyint DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movilidad_academica_salida`
--

LOCK TABLES `movilidad_academica_salida` WRITE;
/*!40000 ALTER TABLE `movilidad_academica_salida` DISABLE KEYS */;
INSERT INTO `movilidad_academica_salida` VALUES (2,987654,'2022-2',36546,'Ensenada',3541354,'FACULTAD DE ARTES ENSENADA',354354,'juan','tapia','mercado',2,'Masculino','mexicali','mexico','baja california','espa??ol',3,'Estancia de Investigacion',1,'judith');
/*!40000 ALTER TABLE `movilidad_academica_salida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `USUARIO` varchar(200) NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  `APELLIDO1` varchar(50) NOT NULL,
  `APELLIDO2` varchar(50) NOT NULL,
  `PASSWORD` varchar(200) NOT NULL,
  `TIPO` varchar(50) NOT NULL,
  `APROBADO` tinyint(1) NOT NULL,
  `NEWPASS` tinyint(1) NOT NULL,
  PRIMARY KEY (`USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('jluna@uabc.edu.mx','Judith','Luna','Serrano','AA1420F182E88B9E5F874F6FBE7459291E8F4601','Coordinador',1,0),('judith@uabc.edu.mx','Judith','Luna','Serrano','AA1420F182E88B9E5F874F6FBE7459291E8F4601','Unidad',1,0),('piglesias@uabc.edu.mx','Priscilla','Iglesias ','Vazquez','525763D1E156651F9759B6215F264AAAB6F1C8D2','Unidad',1,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09  3:40:56
