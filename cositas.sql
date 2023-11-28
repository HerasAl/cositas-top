-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2023 a las 16:01:53
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cositas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artesanos`
--

CREATE TABLE `artesanos` (
  `id_artesano` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `ap` varchar(80) NOT NULL,
  `am` varchar(80) NOT NULL,
  `curp` text NOT NULL,
  `calle` text NOT NULL,
  `mz` int(11) NOT NULL,
  `lt` int(11) NOT NULL,
  `col` text NOT NULL,
  `estado` varchar(30) NOT NULL,
  `municipio` varchar(80) NOT NULL,
  `cp` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `artesanos`
--
ALTER TABLE `artesanos`
  ADD PRIMARY KEY (`id_artesano`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artesanos`
--
ALTER TABLE `artesanos`
  MODIFY `id_artesano` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
