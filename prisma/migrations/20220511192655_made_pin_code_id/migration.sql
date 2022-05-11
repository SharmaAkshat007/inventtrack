/*
  Warnings:

  - The primary key for the `warehouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `warehouse` table. All the data in the column will be lost.
  - Changed the type of `pincode` on the `warehouse` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_warehouseId_fkey";

-- AlterTable
ALTER TABLE "warehouse" DROP CONSTRAINT "warehouse_pkey",
DROP COLUMN "id",
DROP COLUMN "pincode",
ADD COLUMN     "pincode" INTEGER NOT NULL,
ADD CONSTRAINT "warehouse_pkey" PRIMARY KEY ("pincode");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouse"("pincode") ON DELETE RESTRICT ON UPDATE CASCADE;
