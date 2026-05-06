/*
  Warnings:

  - You are about to drop the column `role` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `penumpangs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `kapals` DROP COLUMN `role`;

-- AlterTable
ALTER TABLE `penumpangs` DROP COLUMN `role`;
