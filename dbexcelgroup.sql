/*
SQLyog Ultimate v12.4.3 (64 bit)
MySQL - 10.4.8-MariaDB : Database - dbexcelgroup
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `dbtest` */

DROP TABLE IF EXISTS `dbtest`;

CREATE TABLE `dbtest` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Tebal` varchar(20) DEFAULT NULL,
  `Lebar` varchar(20) DEFAULT NULL,
  `Panjang` varchar(20) DEFAULT NULL,
  `Unit` varchar(20) DEFAULT NULL,
  `Jumlah` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8mb4;

/*Data for the table `dbtest` */

insert  into `dbtest`(`ID`,`Tebal`,`Lebar`,`Panjang`,`Unit`,`Jumlah`) values 
(157,'1','12','400','1',NULL),
(158,'2','16','240','1',NULL),
(159,'2','20','430','1',NULL),
(160,'3','10','180','1',NULL),
(161,'3','10','300','1',NULL),
(162,'3','13','220','1',NULL),
(163,'3','13','410','1',NULL),
(164,'3','16','210','1',NULL),
(165,'3','24','210','1',NULL),
(166,'4','6','300','1',NULL),
(167,'4','8','410','1',NULL),
(168,'4','9','400','1',NULL),
(169,'4','10','180','1',NULL),
(170,'4','10','310','1',NULL),
(171,'4','10','400','1',NULL),
(172,'4','10','410','1',NULL),
(173,'4','11','330','1',NULL),
(174,'4','12','200','1',NULL),
(175,'4','12','240','1',NULL),
(176,'4','12','300','1',NULL),
(177,'4','12','310','2',NULL),
(178,'4','12','320','1',NULL),
(179,'4','12','410','2',NULL),
(180,'4','13','200','1',NULL),
(181,'4','13','230','1',NULL),
(182,'2','16','240','10',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
