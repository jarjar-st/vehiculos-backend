/*
  Warnings:

  - You are about to drop the column `fecha` on the `entradasalida` table. All the data in the column will be lost.
  - Added the required column `fechaEntrada` to the `EntradaSalida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaSalida` to the `EntradaSalida` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entradasalida` DROP COLUMN `fecha`,
    ADD COLUMN `fechaEntrada` DATETIME(3) NOT NULL,
    ADD COLUMN `fechaSalida` DATETIME(3) NOT NULL;
