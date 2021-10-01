import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HelloService } from 'src/providers';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNumber()
  number: number;
}
@ApiTags('Hello')
@Controller('hello')
export class HelloController {
  private readonly logger = new Logger(HelloController.name);

  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    this.logger.debug(JSON.stringify(createUserDto));
    return 'Ok';
  }
}
