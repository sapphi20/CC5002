SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema ejercicio3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ejercicio3` DEFAULT CHARACTER SET utf8 ;
USE `ejercicio3` ;

-- -----------------------------------------------------
-- Table `ejercicio3`.`medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio3`.`medico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `experiencia` VARCHAR (1000) NOT NULL,
  `especialidad` VARCHAR(20) NOT NULL,
  `foto` VARCHAR (1000) NOT NULL,
  `email` VARCHAR(100) NULL,
  `celular` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;