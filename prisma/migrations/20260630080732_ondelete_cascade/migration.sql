-- DropForeignKey
ALTER TABLE `tikets` DROP FOREIGN KEY `tikets_id_pemesanan_fkey`;

-- DropIndex
DROP INDEX `tikets_id_pemesanan_fkey` ON `tikets`;

-- AddForeignKey
ALTER TABLE `tikets` ADD CONSTRAINT `tikets_id_pemesanan_fkey` FOREIGN KEY (`id_pemesanan`) REFERENCES `pemesanans`(`id_pemesanan`) ON DELETE CASCADE ON UPDATE CASCADE;
