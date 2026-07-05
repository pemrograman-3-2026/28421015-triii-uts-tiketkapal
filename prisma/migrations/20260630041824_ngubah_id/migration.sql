/*
  Warnings:

  - The primary key for the `kapals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_kapal` on the `kapals` table. All the data in the column will be lost.
  - Added the required column `id` to the `kapals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pemesanans` DROP FOREIGN KEY `pemesanans_id_jadwal_fkey`;

-- DropForeignKey
ALTER TABLE `pemesanans` DROP FOREIGN KEY `pemesanans_id_penumpang_fkey`;

-- DropIndex
DROP INDEX `pemesanans_id_jadwal_fkey` ON `pemesanans`;

-- DropIndex
DROP INDEX `pemesanans_id_penumpang_fkey` ON `pemesanans`;

-- AlterTable
ALTER TABLE `kapals` DROP PRIMARY KEY,
    DROP COLUMN `id_kapal`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `pemesanans` ADD CONSTRAINT `pemesanans_id_penumpang_fkey` FOREIGN KEY (`id_penumpang`) REFERENCES `penumpangs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pemesanans` ADD CONSTRAINT `pemesanans_id_jadwal_fkey` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwals`(`id_jadwal`) ON DELETE CASCADE ON UPDATE CASCADE;
