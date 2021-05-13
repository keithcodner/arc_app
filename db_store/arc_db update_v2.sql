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
CREATE DATABASE IF NOT EXISTS `arc_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `arc_db`;


-- Dumping structure for table arc_db.arc_cmd_lst_table
CREATE TABLE IF NOT EXISTS `arc_cmd_lst_table` (
  `cmd_lst_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmd_lst_an_id` varchar(50) DEFAULT NULL,
  `cmd_exec_name` varchar(100) DEFAULT NULL,
  `cmd_lst_exec_description` varchar(500) DEFAULT NULL,
  `cmd_lst_status` varchar(50) DEFAULT NULL,
  `cmd_lst_type` varchar(50) DEFAULT NULL,
  `cmd_lst_date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`cmd_lst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_lst_table: ~11 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_lst_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_lst_table` (`cmd_lst_id`, `cmd_lst_an_id`, `cmd_exec_name`, `cmd_lst_exec_description`, `cmd_lst_status`, `cmd_lst_type`, `cmd_lst_date_created`) VALUES
	(1, 'ABC12345', 'MOVE_UP', 'Move Robot Up', 'Active', 'Direction', '2021-03-05 00:49:04'),
	(2, 'ABC12346', 'MOVE_DOWN', 'Move Robot Down', 'Active', 'Direction', '2021-03-05 00:50:14'),
	(3, 'ABC12347', 'MOVE_LEFT', 'Move Robot Left', 'Active', 'Direction', '2021-03-05 00:50:56'),
	(4, 'ABC12348', 'MOVE_RIGHT', 'Move Robot Right', 'Active', 'Direction', '2021-03-05 00:52:11'),
	(5, 'ABC12349', 'VIBRATE_DEFAULT', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(6, 'ABC12350', 'BLINK_0', 'Blink Robot Light 0', 'Active', 'Action', '2021-03-05 00:54:27'),
	(7, 'ABC12351', 'JUMP_0', 'Jump Robot 0', 'Active', 'Action', '2021-03-05 00:54:28'),
	(8, 'ABC12352', 'WAIT_0', 'Wait Robot 0', 'Active', 'Idle', '2021-03-05 01:13:32'),
	(9, 'ABC12353', 'VIBRATE_DEFAULT', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(10, 'ABC12354', 'VIBRATE_DEFAULTz', 'Vibrate Robot', 'Active', 'Action', '2021-03-05 00:52:44'),
	(12, 'fd35bd0bea', 'test', 'test_r', 'Active', 'Action', '2021-04-10 16:41:39');
/*!40000 ALTER TABLE `arc_cmd_lst_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_cmd_table
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_cmd_table: ~4 rows (approximately)
/*!40000 ALTER TABLE `arc_cmd_table` DISABLE KEYS */;
INSERT INTO `arc_cmd_table` (`cmd_id`, `cmd_an_id`, `r_usr_an_id`, `c_usr_an_id`, `r_usr_code_name`, `cmd_exec_name`, `cmd_exec_params`, `cmd_exec_data`, `cmd_status`, `cmd_op1`, `cmd_op2`, `cmd_op3`, `cmd_date_created`, `cmd_date_executed`) VALUES
	(1, 'ABC12345', 'ASDF123', 'QWERT123', 'ARCANE', 'MOVE_UP', '0', '0', 'EXECUTED', '0', '0', '0', '2021-03-05 01:09:46', '2021-03-05 01:16:03'),
	(2, 'ABC12350', 'ASDF123', 'QWERT123', 'ARCANE', 'BLINK_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:10', NULL),
	(3, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'21\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', '2021-03-05 01:16:13'),
	(4, 'ABC12351', 'ASDF123', 'QWERT123', 'ARCANE', 'JUMP_1', '0', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:13', NULL),
	(5, 'ABC12352', 'ASDF123', 'QWERT123', 'ARCANE', 'WAIT_0', '{time_sec : \'20\'}', '0', 'UNEXECUTED', '0', '0', '0', '2021-03-05 01:16:12', '2021-03-05 01:16:13');
/*!40000 ALTER TABLE `arc_cmd_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_ctrl_table
CREATE TABLE IF NOT EXISTS `arc_ctrl_table` (
  `ctrl_id` int(11) NOT NULL AUTO_INCREMENT,
  `ctrl_an_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `c_usr_an_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_up` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_down` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_left` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_arrow_right` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_index_left` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_index_right` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_y` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_x` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_b` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_a` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_start` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_btn_select` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_1` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_2` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_3` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_4` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_5` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `ctrl_combo_6` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  PRIMARY KEY (`ctrl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table arc_db.arc_ctrl_table: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_ctrl_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_ctrl_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_c_usr_table
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_c_usr_table: ~8 rows (approximately)
/*!40000 ALTER TABLE `arc_c_usr_table` DISABLE KEYS */;
INSERT INTO `arc_c_usr_table` (`c_usr_id`, `c_usr_an_id`, `r_usr_an_id`, `c_usr_name`, `c_usr_pwd`, `c_usr_pwd_hash`, `c_usr_email`, `c_usr_ip`, `c_usr_status`, `c_usr_op1`, `c_usr_op2`, `c_usr_type`, `c_usr_date_created`) VALUES
	(1, 'QWERT123', 'ASDF123', 'Keith', 'p12345', '1q2w3e', 'codnerk@gmail.com', '1.1.1.1', 'Active', '0', '0', 'Admin', '2021-03-05 00:55:57'),
	(2, 'QWERT124', 'ASDF124', 'John', 'p12345', '1q2w3e', 'codnerkj@gmail.com', '2.2.2.2', 'Active', '0', '0', 'User', '2021-03-05 00:56:38'),
	(3, 'QWERT125', 'ASDF125', 'Valentinez_zx', 'p12345', '1q2w3e', 'codnerke@gmail.com', '3.3.3.3', 'Active', '0', '0', 'User', '2021-03-23 00:56:38'),
	(6, 'e03fb1e910', 'ASDF124', 'Joe', '124', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 04:42:20'),
	(7, '94b35f6947', 'ASDF124', 'Joey', '4321', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 14:55:07'),
	(8, '0eb216d197', 'ASDF123', 'Sammy', '1231', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:11:20'),
	(15, '889d99e8db', 'ASDF123', 'Dane', '44444', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:16:56'),
	(16, '4e4c3096cf', 'ASDF123', 'Tom', '44443', 'null', 'codnerkj@gmail.com', 'localhost', 'Active', '0', '0', 'User', '2021-04-10 15:17:09');
/*!40000 ALTER TABLE `arc_c_usr_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_r_usr_table
CREATE TABLE IF NOT EXISTS `arc_r_usr_table` (
  `r_usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_usr_an_id` varchar(50) DEFAULT '0',
  `r_usr_code_name` varchar(50) DEFAULT '0',
  `r_usr_ip` varchar(20) DEFAULT '0',
  `r_usr_status` varchar(50) DEFAULT '0',
  `r_usr_type` varchar(50) DEFAULT '0',
  `r_usr_op1` varchar(255) DEFAULT '0',
  `r_usr_op2` varchar(255) DEFAULT '0',
  `r_usr_date_created` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`r_usr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arc_db.arc_r_usr_table: ~7 rows (approximately)
/*!40000 ALTER TABLE `arc_r_usr_table` DISABLE KEYS */;
INSERT INTO `arc_r_usr_table` (`r_usr_id`, `r_usr_an_id`, `r_usr_code_name`, `r_usr_ip`, `r_usr_status`, `r_usr_type`, `r_usr_op1`, `r_usr_op2`, `r_usr_date_created`) VALUES
	(1, 'ASDF123', 'ARCANE', '1.1.1.1', 'Active', 'DevBot', '0', '0', '2021-03-05 01:02:48'),
	(2, 'ASDF124', 'ARCANE2', '2.3.4.6', 'In-Active', 'DevBot', '0', '0', '2021-03-05 05:55:57'),
	(19, 'b9cd911c18', 'Salton', '1.1.1.1', 'Active', 'DevBot', 'ep1', 'ep2', '2021-04-08 04:23:17'),
	(20, 'a4b28d8e1c', 'Gravitas', '1.2.1.2', 'Active', 'DevBot', 'Blaster', 'Motor', '2021-04-08 04:23:55'),
	(21, 'd6931e111a', 'Rampage', '1.1.1.1', 'Active', 'DevBot', 'Claws', 'Cive', '2021-04-08 04:25:47'),
	(22, '1242304861', 'Carnival', '1.1.1.1', 'Active', 'DevBot', 'Soda', 'CottonCandy', '2021-04-08 04:27:16'),
	(23, '81282649fc', 'Carnage', '1.1.1.1', 'Active', 'Sentenal', 'Slash', 'Stick', '2021-04-09 04:36:58');
/*!40000 ALTER TABLE `arc_r_usr_table` ENABLE KEYS */;


-- Dumping structure for table arc_db.arc_sys_settings
CREATE TABLE IF NOT EXISTS `arc_sys_settings` (
  `Column 1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table arc_db.arc_sys_settings: ~0 rows (approximately)
/*!40000 ALTER TABLE `arc_sys_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `arc_sys_settings` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
