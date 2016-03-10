-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 10, 2016 at 05:59 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_peta`
--

-- --------------------------------------------------------

--
-- Table structure for table `penduduk`
--

CREATE TABLE IF NOT EXISTS `penduduk` (
  `kode` varchar(4) NOT NULL,
  `provinsi` text NOT NULL,
  `ibukota` text NOT NULL,
  `jumlah` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penduduk`
--

INSERT INTO `penduduk` (`kode`, `provinsi`, `ibukota`, `jumlah`) VALUES
('11', 'Nanggroe Aceh Darussalam', 'Banda Aceh', '4494410'),
('12', 'Sumatera Utara', 'Medan', '12982204'),
('13', 'Sumatera Barat', 'Padang', '4846909'),
('14', 'Riau', 'Pekanbaru', '5538367'),
('15', 'Jambi', 'Jambi', '3092265'),
('16', 'Sumatera Selatan', 'Palembang', '7450394'),
('17', 'Bengkulu', 'Bengkulu', '1715518'),
('18', 'Lampung', 'Bandar Lampung', '7608405'),
('19', 'Bangka Belitung', 'Pangkal Pinang', '1223296'),
('21', 'Kepulauan Riau', 'Tanjung Pinang', '1679163'),
('31', 'DKI Jakarta', 'Jakarta', '9607787'),
('32', 'Jawa Barat', 'Bandung', '43053732'),
('33', 'Jawa Tengah', 'Semarang', '32382657'),
('34', 'DI Yogyakarta', 'Yogyakarta', '3457491'),
('35', 'Jawa Timur', 'Surabaya', '37476757'),
('36', 'Banten', 'Serang', '10632166'),
('51', 'Bali', 'Denpasar', '3890757'),
('52', 'Nusa Tenggara Barat', 'Mataram', '4500212'),
('53', 'Nusa Tenggara Timur', 'Kupang', '4683827'),
('61', 'Kalimantan Barat', 'Pontianak', '4395983'),
('62', 'Kalimantan Tengah', 'Palangkaraya', '2212089'),
('63', 'Kalimantan Selatan', 'Banjarmasin', '3626616'),
('64', 'Kalimantan Timur', 'Samarinda', '3553143'),
('71', 'Sulawesi Utara', 'Manado', '2270596'),
('72', 'Sulawesi Tengah', 'Palu', '2635009'),
('73', 'Sulawesi Selatan', 'Makassar', '8034776'),
('74', 'Sulawesi Tenggara', 'Kendari', '2232586'),
('75', 'Gorontalo', 'Gorontalo', '1040164'),
('76', 'Sulawesi Barat', 'Mamuju', '1158651'),
('81', 'Maluku', 'Ambon', '1533506'),
('82', 'Maluku Utara', 'Sofifi', '1038087'),
('91', 'Papua Barat', 'Manokwari', '760422'),
('94', 'Papua', 'Jayapura', '2833381');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
