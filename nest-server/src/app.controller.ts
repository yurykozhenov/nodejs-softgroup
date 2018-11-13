import { Get, Controller, Param, Query, Post, Body, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';

interface MyData {
  id: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async root(): Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => resolve(this.appService.root()), 2000);
    });
  }

  @UseGuards(AuthGuard)
  @Get('add')
  addNumbers(@Query('num1', new ParseIntPipe()) num1: number,
             @Query('num2', new ParseIntPipe()) num2: number) {
    return num1 + num2;
  }

  @Get(':id')
  getOne(@Param('id') id: string): { id: string } {
    return { id };
  }

  @Get(':id/details')
  getOneDetails(@Param('id') id: string): { id: string } {
    return { id };
  }

  @Post()
  saveData(@Body() body: MyData) {
    // Save some data...
    return body;
  }
}
