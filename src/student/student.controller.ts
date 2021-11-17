/* eslint-disable prettier/prettier */
import {Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService:StudentService ){}
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }
  @Get('/:studentId')
  getStudentById(@Param('studentId',new ParseUUIDPipe()) studentId:string):FindStudentResponseDto{
      return this.studentService.getStudentById(studentId);
  }
  @Post('student')
  createStudent(@Body() student:CreateStudentDto):StudentResponseDto{
      return this.studentService.createStudent(student);
  }
  @Put('/:studentId')
  updateStudent(@Param('studentId',new ParseUUIDPipe())studentId:string,
            @Body() student:UpdateStudentDto
  ):StudentResponseDto{
      return this.studentService.updateStudent(student,studentId);

  }

}
