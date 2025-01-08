/*
  Warnings:

  - Added the required column `email_address` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "email_address" TEXT NOT NULL,
ADD COLUMN     "phone_number" INTEGER NOT NULL;
