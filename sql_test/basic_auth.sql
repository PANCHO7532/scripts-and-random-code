-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 31-05-2018 a las 20:05:41
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.0.26
-- Importar dentro de la tabla basic_auth o como se configure en exec.php
-- Import inside of basic_auth table or it is configured in exec.php

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `basic_auth`
--

CREATE TABLE `basic_auth` (
  `username` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `datos` varchar(244) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `basic_auth`
--

INSERT INTO `basic_auth` (`username`, `password`, `datos`) VALUES
('admin', 'pruebas7w7', 'Administrador'),
('qweadszxc', 'lacontraseñauwu', 'parece que este tipo de contraseñas si funciona (? wiii ya se mysql, uff, ehm, qweasdzxc xd'),
('1q', 'q1', 'mierdaaaa ya funciona carajo, ehm, 1q :vv');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
