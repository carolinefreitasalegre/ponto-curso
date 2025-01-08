/*
  Warnings:

  - You are about to drop the column `classroom` on the `Students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "classroom",
ALTER COLUMN "email_address" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_ClassroomsToStudents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ClassroomsToStudents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ClassroomsToStudents_B_index" ON "_ClassroomsToStudents"("B");

-- AddForeignKey
ALTER TABLE "_ClassroomsToStudents" ADD CONSTRAINT "_ClassroomsToStudents_A_fkey" FOREIGN KEY ("A") REFERENCES "Classrooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomsToStudents" ADD CONSTRAINT "_ClassroomsToStudents_B_fkey" FOREIGN KEY ("B") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
