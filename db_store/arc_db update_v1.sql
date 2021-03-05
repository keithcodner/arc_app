-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.16-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_lst_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_lst_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_lst_table` (`cmd_lst_id`, `cmd_lst_an_id`, `cmd_exec_name`, `cmd_lst_exec_description`, `cmd_lst_status`, `cmd_lst_type`, `cmd_lst_date_created`) VALUES
	(1, 'ABC12345', 'MOVE_UP', 'Move Robot Up', 'Active', 'Direction', '2021-03-05 00:49:04'),
	(2, 'ABC12346', 'MOVE_DOWN', 'Move Robot Down', 'Active', 'Direction', '2021-03-05 00:50:14'),
	(3, 'ABC12347', 'MOVE_LEFT', 'Move Robot Left', 'Active', 'Direction', '2021-03-05 00:50:56'),
	(4, 'ABC12348', 'MOVE_RIGHT', 'Move Robot Right', 'Active', 'Direction', '2021-03-05 00:52:11'),
	(5, 'ABC12349', 'VIBRATE_DEFAULT', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(6, 'ABC12350', 'BLINK_0', 'Blink Robot Light 0', 'Active', 'Action', '2021-03-05 00:54:27'),
	(7, 'ABC12351', 'JUMP_0', 'Jump Robot 0', 'Active', 'Action', '2021-03-05 00:54:28'),
	(8, 'ABC12352', 'WAIT_0', 'Wait Robot 0', 'Active', 'Idle', '2021-03-05 01:13:32');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_table` (`cmd_id`, `cmd_an_id`, `r_usr_an_id`, `c_usr_an_id`, `r_usr_code_name`, `cmd_exec_name`, `cmd_exec_params`, `cmd_exec_data`, `cmd_status`, `cmd_op1`, `cmd_op2`, `cmd_op3`, `cmd_date_created`, `cmd_date_executed`) VALUES
	(1, 'ABC12345', 'ASDF123', 'QWERT123', 'ARCANE', 'MOVE_UP', '0', '0', 'EXECUTED', '0', '0', '0', '2021-03-05 01:09:46', '2021-03-05 01:16:03'),
	(2, 'ABC12350', 'ASDF123', 'QWERT123', 'ARCANE', 'BLINK_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:10', NULL),
	(3, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'20\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', NULL),
	(4, 'ABC12351', 'ASDF123', 'QWERT123', 'ARCANE', 'JUMP_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:13', NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_c_usr_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_c_usr_table` DISABLE KEYS */;
INSERT INTO `arc_c_usr_table` (`c_usr_id`, `c_usr_an_id`, `r_usr_an_id`, `c_usr_name`, `c_usr_pwd`, `c_usr_pwd_hash`, `c_usr_email`, `c_usr_ip`, `c_usr_status`, `c_usr_op1`, `c_usr_op2`, `c_usr_type`, `c_usr_date_created`) VALUES
	(1, 'QWERT123', 'ASDF123', 'Keith', 'p12345', '1q2w3e', 'codnerk@gmail.com', '1.1.1.1', 'Active', '0', '0', 'Admin', '2021-03-05 00:55:57'),
	(2, 'QWERT124', 'ASDF124', 'John', 'p12345', '1q2w3e', 'codnerkj@gmail.com', '2.2.2.2', 'Active', '0', '0', 'User', '2021-03-05 00:56:38');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_r_usr_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_r_usr_table` DISABLE KEYS */;
INSERT INTO `arc_r_usr_table` (`r_usr_id`, `r_usr_an_id`, `r_usr_code_name`, `r_usr_ip`, `r_usr_status`, `r_usr_type`, `r_usr_op1`, `r_usr_op2`, `r_usr_date_created`) VALUES
	(1, 'ASDF123', 'ARCANE', '1.1.1.1', 'Active', 'DevBot', '0', '0', '2021-03-05 01:02:48');
/*!40000 ALTER TABLE `arc_r_usr_table` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
