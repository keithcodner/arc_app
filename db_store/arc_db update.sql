-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for arc_db
DROP DATABASE IF EXISTS `arc_db`;
CREATE DATABASE IF NOT EXISTS `arc_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `arc_db`;

-- Dumping structure for table arc_db.arc_cmd_lst_table
DROP TABLE IF EXISTS `arc_cmd_lst_table`;
CREATE TABLE IF NOT EXISTS `arc_cmd_lst_table` (
  `cmd_lst_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmd_lst_an_id` varchar(50) DEFAULT NULL,
  `cmd_exec_name` varchar(100) DEFAULT NULL,
  `cmd_lst_exec_description` varchar(500) DEFAULT NULL,
  `cmd_lst_status` varchar(50) DEFAULT NULL,
  `cmd_lst_type` varchar(50) DEFAULT NULL,
  `cmd_lst_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`cmd_lst_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_lst_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_lst_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_cmd_lst_table` ENABLE KEYS */;

-- Dumping structure for table arc_db.arc_cmd_table
DROP TABLE IF EXISTS `arc_cmd_table`;
CREATE TABLE IF NOT EXISTS `arc_cmd_table` (
  `cmd_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmd_an_id` varchar(50) DEFAULT NULL,
  `r_usr_an_id` varchar(50) DEFAULT NULL,
  `c_usr_an_id` varchar(50) DEFAULT NULL,
  `r_usr_code_name` varchar(50) DEFAULT NULL,
  `cmd_exec_name` varchar(100) DEFAULT NULL,
  `cmd_exec_params` varchar(255) DEFAULT NULL,
  `cmd_exec_data` varchar(500) DEFAULT NULL,
  `cmd_status` varchar(50) DEFAULT NULL,
  `cmd_op1` varchar(100) DEFAULT NULL,
  `cmd_op2` varchar(100) DEFAULT NULL,
  `cmd_op3` varchar(100) DEFAULT NULL,
  `cmd_date_created` datetime DEFAULT NULL,
  `cmd_date_executed` datetime DEFAULT NULL,
  PRIMARY KEY (`cmd_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_cmd_table` ENABLE KEYS */;

-- Dumping structure for table arc_db.arc_c_usr_table
DROP TABLE IF EXISTS `arc_c_usr_table`;
CREATE TABLE IF NOT EXISTS `arc_c_usr_table` (
  `c_usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_usr_an_id` varchar(50) DEFAULT '0',
  `r_usr_an_id` varchar(50) DEFAULT '0',
  `c_usr_name` varchar(50) DEFAULT '0',
  `c_usr_pwd` varchar(255) DEFAULT '0',
  `c_usr_pwd_hash` varchar(255) DEFAULT '0',
  `c_usr_email` varchar(150) DEFAULT '0',
  `c_usr_ip` varchar(20) DEFAULT '0',
  `c_usr_status` varchar(20) DEFAULT '0',
  `c_usr_op1` varchar(255) DEFAULT NULL,
  `c_usr_op2` varchar(255) DEFAULT NULL,
  `c_usr_type` varchar(20) DEFAULT NULL,
  `c_usr_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`c_usr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_c_usr_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_c_usr_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_c_usr_table` ENABLE KEYS */;

-- Dumping structure for table arc_db.arc_r_usr_table
DROP TABLE IF EXISTS `arc_r_usr_table`;
CREATE TABLE IF NOT EXISTS `arc_r_usr_table` (
  `r_usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_usr_an_id` varchar(50) DEFAULT NULL,
  `r_usr_code_name` varchar(50) DEFAULT NULL,
  `r_usr_ip` varchar(20) DEFAULT NULL,
  `r_usr_status` varchar(50) DEFAULT NULL,
  `r_usr_type` varchar(50) DEFAULT NULL,
  `r_usr_op1` varchar(255) DEFAULT NULL,
  `r_usr_op2` varchar(255) DEFAULT NULL,
  `r_usr_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`r_usr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_r_usr_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_r_usr_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_r_usr_table` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
