-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: gic_cafe
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cafeId` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `addedDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cafeId` (`cafeId`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`cafeId`) REFERENCES `cafes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('22dc699f-8baa-45c9-8da7-7d23c0fc7da0',31,'Yasiru Shaluka Attanayake','admin@libapp.com','+94778827121','Male',1,'2022-06-05 23:08:01','2022-06-06 00:33:04'),('2ccbb4d3-555d-4898-a812-5aae344d50da',1,'Yasiru','yasi@gmail.com','+94721293381','Male',1,'2022-06-05 08:50:05','2022-06-05 08:50:05'),('4315e64c-3005-4108-a227-e437861131f5',1,'Saun','saun@gmail.com','+94718827311','Male',1,'2022-06-05 23:16:56','2022-06-05 23:16:56'),('4f7db452-9687-490a-afc0-c7ce389f6bdb',1,'yasi','shaluka.gayanath@gmail.com','+94778827516','Male',1,'2022-06-05 12:48:47','2022-06-05 12:48:47'),('52ed6d0f-954f-4d60-8164-214ca5e9d4bd',2,'Lily','lily@gmail.com','+94728293437','Female',1,'2022-06-04 19:54:26','2022-06-04 19:54:26'),('6f2664cb-5aae-4390-89cf-d5e2093f0b62',2,'John','john@gmail.com','+94728293125','Male',1,'2022-06-04 19:54:08','2022-06-04 19:54:08'),('afac19ff-895f-4a7f-8c03-865240f3f27c',1,'Pavan','pavan@gmail.com','+94741293221','Male',1,'2022-06-05 14:30:16','2022-06-05 14:30:16'),('ca978b18-5438-4d0b-b51e-76bf8721800a',31,'Yasiru Shaluka Gayanath Attanayake','test@test.com','+94778827516','Male',1,'2022-06-05 23:14:41','2022-06-05 23:14:41'),('d71dea42-5fb5-4ced-a1ea-a99722801cf7',2,'Emily','emily@gmail.com','+94778827111','Female',1,'2022-06-06 00:18:09','2022-06-06 00:18:09');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06  0:37:11
