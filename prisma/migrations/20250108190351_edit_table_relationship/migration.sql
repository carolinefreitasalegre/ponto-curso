/*
  Warnings:

  - Added the required column `classroom_id` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "classroom_id" INTEGER NOT NULL;
