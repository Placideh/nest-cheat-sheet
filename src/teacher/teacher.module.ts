/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from './student/student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports:[StudentModule],
    controllers:[TeacherController, StudentTeacherController],
    providers:[TeacherService, StudentService]
})
export class TeacherModule {}
