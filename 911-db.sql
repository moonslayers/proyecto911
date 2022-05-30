SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `911db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `911db`;

CREATE TABLE IF NOT EXISTS `convenios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int(11) NOT NULL,
  `PERIODO` varchar(20) NOT NULL,
  `CONVENIO_VINCID` varchar(50) NOT NULL,
  `CONVENIO_VINC` varchar(50) NOT NULL,
  `FECHA` varchar(50) NOT NULL,
  `SECTOR_ID` int(11) NOT NULL,
  `SECTOR` varchar(50) NOT NULL,
  `ORIGEN_ID` int(11) NOT NULL,
  `ORIGEN` varchar(50) NOT NULL,
  `PAIS_VINC` varchar(50) NOT NULL,
  `INST_ORG` varchar(100) NOT NULL,
  `COOP` tinyint(1) NOT NULL,
  `INVE` tinyint(1) NOT NULL,
  `INTER` tinyint(1) NOT NULL,
  `MOVI` tinyint(1) NOT NULL,
  `validar` tinyint(1) NOT NULL,
  `AUTOR` varchar(50) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `intercambio_estudiantil_entrada` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int(10) UNSIGNED NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int(10) UNSIGNED NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int(10) UNSIGNED NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `NIVEL_ID` int(10) UNSIGNED NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `PROGRAMA_ID` int(11) UNSIGNED NOT NULL,
  `PROGRAMA_DESC` varchar(100) NOT NULL,
  `AREA_ID` int(11) UNSIGNED NOT NULL,
  `AREA` varchar(50) NOT NULL,
  `ESTUDIANTE_ID` int(11) UNSIGNED NOT NULL,
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
  `FINAN_VAL` int(11) NOT NULL,
  `DATE_START` varchar(50) NOT NULL,
  `DATE_END` varchar(50) NOT NULL,
  `validar` tinyint(1) NOT NULL,
  `AUTOR` varchar(50) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `intercambio_estudiantil_salida` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int(10) UNSIGNED NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int(10) UNSIGNED NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int(10) UNSIGNED NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `NIVEL_ID` int(10) UNSIGNED NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `PROGRAMA_ID` int(11) UNSIGNED NOT NULL,
  `PROGRAMA_DESC` varchar(100) NOT NULL,
  `AREA_ID` int(11) UNSIGNED NOT NULL,
  `AREA` varchar(50) NOT NULL,
  `ESTUDIANTE_ID` int(11) UNSIGNED NOT NULL,
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
  `FINAN` tinyint(1) NOT NULL,
  `FINAN_VAL` int(11) NOT NULL,
  `DATE_START` varchar(50) NOT NULL,
  `DATE_END` varchar(50) NOT NULL,
  `validar` tinyint(1) NOT NULL,
  `AUTOR` varchar(50) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `movilidad_academica_entrada` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int(10) UNSIGNED NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int(10) UNSIGNED NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int(10) UNSIGNED NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `VISITANTE_ID` int(10) UNSIGNED NOT NULL,
  `VISITANTE_NOMBRE` varchar(50) NOT NULL,
  `VISITANTE_APELLIDO1` varchar(50) NOT NULL,
  `VISITANTE_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `NIVEL_ID` int(10) UNSIGNED NOT NULL,
  `NIVEL` varchar(50) NOT NULL,
  `DISCAPACIDAD` tinyint(1) NOT NULL,
  `HABLANTE_INDIGENA` tinyint(1) NOT NULL,
  `ORIGEN_INDIGENA` tinyint(1) NOT NULL,
  `UE` varchar(50) NOT NULL,
  `UE_PAIS` varchar(50) NOT NULL,
  `UE_ENTIDAD` varchar(50) NOT NULL,
  `UE_IDIOMA` varchar(50) NOT NULL,
  `TMA_ID` tinyint(3) UNSIGNED NOT NULL,
  `validar` tinyint(1) NOT NULL,
  `TMA` varchar(50) NOT NULL,
  `AUTOR` varchar(50) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `movilidad_academica_salida` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PERIODO_ID` int(10) UNSIGNED NOT NULL,
  `PERIODO` varchar(10) NOT NULL,
  `CAMPUS_ID` int(10) UNSIGNED NOT NULL,
  `CAMPUS_DESC` varchar(50) NOT NULL,
  `UNIDAD_ID` int(10) UNSIGNED NOT NULL,
  `UNIDAD` varchar(50) NOT NULL,
  `EMPLEADO_ID` int(10) UNSIGNED NOT NULL,
  `EMPLEADO_NOMBRE` varchar(50) NOT NULL,
  `EMPLEADO_APELLIDO1` varchar(50) NOT NULL,
  `EMPLEADO_APELLIDO2` varchar(50) NOT NULL,
  `SEXO_ID` tinyint(1) NOT NULL,
  `SEXO` varchar(10) NOT NULL,
  `UR` varchar(50) NOT NULL,
  `UR_PAIS` varchar(50) NOT NULL,
  `UR_ENTIDAD` varchar(50) NOT NULL,
  `UR_IDIOMA` varchar(50) NOT NULL,
  `TMA_ID` int(10) UNSIGNED NOT NULL,
  `TMA` varchar(50) NOT NULL,
  `validar` tinyint(1) NOT NULL,
  `AUTOR` varchar(50) NOT NULL,
  PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `usuarios` (
	`USUARIO` varchar(20) NOT NULL,
	`NOMBRE` varchar(50) NOT NULL,
	`APELLIDO` varchar(50) NOT NULL,
	`PASSWORD` varchar(200) NOT NULL,
	`TIPO` varchar(50) NOT NULL,
	`APROBADO` tinyint(1) NOT NULL,
	`NEWPASS` tinyint(1) NOT NULL,
	PRIMARY KEY (USUARIO)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
