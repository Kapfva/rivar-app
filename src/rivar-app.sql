-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-04-2022 a las 04:44:19
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rivar-app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friendslist`
--

CREATE TABLE `friendslist` (
  `idfriend1` int(10) UNSIGNED DEFAULT NULL,
  `idfriend2` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `friendslist`
--

INSERT INTO `friendslist` (`idfriend1`, `idfriend2`) VALUES
(1, 2),
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) NOT NULL,
  `alias` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `passwd` varchar(25) NOT NULL,
  `birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `alias`, `email`, `passwd`, `birth`) VALUES
(1, 'José', 'Josesito', 'jose@gmail.com', '123', '2001-05-11'),
(2, 'María', 'mary', 'marymai@gmail.com', '123', '2012-03-14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friendslist`
--
ALTER TABLE `friendslist`
  ADD KEY `idfriend1` (`idfriend1`),
  ADD KEY `idfriend2` (`idfriend2`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friendslist`
--
ALTER TABLE `friendslist`
  ADD CONSTRAINT `friendslist_ibfk_1` FOREIGN KEY (`idfriend1`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `friendslist_ibfk_2` FOREIGN KEY (`idfriend2`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
