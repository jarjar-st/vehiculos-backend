/*
  Warnings:

  - Added the required column `fechaModificacion` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vehiculo` ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fechaModificacion` DATETIME(3) NOT NULL;
