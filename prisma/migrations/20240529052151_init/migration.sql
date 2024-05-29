/*
  Warnings:

  - You are about to alter the column `kilometraje` on the `entradasalida` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `entradasalida` MODIFY `kilometraje` VARCHAR(191) NOT NULL;
