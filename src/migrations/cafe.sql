-- Employee Table -----
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cafeId` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `addedDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL,
  PRIMARY KEY (`id`,`phone`),
  KEY `cafeId` (`cafeId`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`cafeId`) REFERENCES `cafes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `gic_cafe`.`employees` (`id`, `cafeId`, `name`, `email`, `phone`, `gender`, `status`, `addedDate`, `updatedDate`) VALUES ('6', '3', 'Peter', 'peter@gmail.com', '+947683234438', 'Male', '1', '2022-05-30 12:39:12', '2022-05-30 12:39:12');



-- Cafe Table -----
CREATE TABLE `cafes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `addedDate` datetime NOT NULL,
  `updatedDate` datetime NOT NULL,
  `cafeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cafeId` (`cafeId`),
  CONSTRAINT `cafes_ibfk_1` FOREIGN KEY (`cafeId`) REFERENCES `employees` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `gic_cafe`.`cafes` (`id`, `name`, `description`, `logo`, `location`, `status`, `addedDate`, `updatedDate`) VALUES ('7', 'FoodBucket', 'Indian & Chinees foods', 'https://www.sample-videos.com/img/Sample-jpg-image-50kb.jpg', 'Colombo 02', '1', '2022-05-29 00:58:34', '2022-05-29 00:58:34');