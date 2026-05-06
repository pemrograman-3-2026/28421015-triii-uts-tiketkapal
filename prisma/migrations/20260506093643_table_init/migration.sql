-- CreateTable
CREATE TABLE `penumpangs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `role` ENUM('PENUMPANG', 'KAPAL') NOT NULL DEFAULT 'PENUMPANG',
    `email` VARCHAR(191) NOT NULL,
    `reated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kapals` (
    `id_kapal` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kapal` VARCHAR(191) NOT NULL,
    `kapasitas` VARCHAR(191) NOT NULL,
    `role` ENUM('PENUMPANG', 'KAPAL') NOT NULL DEFAULT 'KAPAL',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_kapal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jadwals` (
    `id_jadwal` INTEGER NOT NULL AUTO_INCREMENT,
    `id_kapal` INTEGER NOT NULL,
    `asal` VARCHAR(191) NOT NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `tanggal_berangkat` DATETIME(3) NOT NULL,
    `jam_berangkat` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_jadwal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pemesanans` (
    `id_pemesanan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_penumpang` INTEGER NOT NULL,
    `id_jadwal` INTEGER NOT NULL,
    `tanggal_pesan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `jumlah_tiket` INTEGER NOT NULL,
    `total_bayar` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_pemesanan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tikets` (
    `id_tiket` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pemesanan` INTEGER NOT NULL,
    `no_kursi` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_tiket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pemesanans` ADD CONSTRAINT `pemesanans_id_penumpang_fkey` FOREIGN KEY (`id_penumpang`) REFERENCES `penumpangs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pemesanans` ADD CONSTRAINT `pemesanans_id_jadwal_fkey` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwals`(`id_jadwal`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tikets` ADD CONSTRAINT `tikets_id_pemesanan_fkey` FOREIGN KEY (`id_pemesanan`) REFERENCES `pemesanans`(`id_pemesanan`) ON DELETE RESTRICT ON UPDATE CASCADE;
