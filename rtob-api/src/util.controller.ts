import { Get, Controller } from '@nestjs/common';

@Controller('util')
export class UtilController {

  @Get('version')
  version() {
    const time = new Date();
    const version = process.env.VERSION || '0.18.04.08';
    return { version, time };
  }

}
