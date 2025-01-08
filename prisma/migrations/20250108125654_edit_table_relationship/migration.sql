/*
  Warnings:

  - You are about to drop the `Classrooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassroomsToStudents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClassroomsToStudents" DROP CONSTRAINT "_ClassroomsToStudents_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassroomsToStudents" DROP CONSTRAINT "_ClassroomsToStudents_B_fkey";

-- DropTable
DROP TABLE "Classrooms";

-- DropTable
DROP TABLE "Students";

-- DropTable
DROP TABLE "_ClassroomsToStudents";

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "registration_date" TEXT NOT NULL,
    "birthday_date" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "email_address" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clasrooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "clasrooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_id_fkey" FOREIGN KEY ("id") REFERENCES "clasrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
