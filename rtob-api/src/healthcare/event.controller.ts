import { Controller, Post, HttpStatus, HttpCode, Get, Response, Request,  UseGuards, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { EventEntity } from './event.entity';
// import { Roles } from '../common/roles.decorator';
// import { RolesGuard } from '../common/roles.guard';

@Controller('event')
//@UseGuards(RolesGuard)
export class EventController {

    constructor(
        private readonly eventService: EventService) { }

    @Get('events')
    //@Roles('USER')
    async getEvents(){
        return await this.eventService.getEvents();
    }

    @Post()
    //@Roles('USER')
    public async createEvent(@Response() res, @Body() body: EventEntity)
    {
        if (!body) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'event is required!' });
        }
        body.timestamp = new Date();
        const result = await this.eventService.createEvent(body);
        console.log(body)
        return res.status(HttpStatus.CREATED).json(result);
    }
}
