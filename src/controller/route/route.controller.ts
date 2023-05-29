import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RouteDto } from 'src/dto/route.dto';
import { RouteService } from 'src/service/route/route.service';

@Controller('route')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Get()
  async getRoutes() {
    return await this.routeService.getRoutes();
  }

  @Post()
  async saveRoute(@Body() route: RouteDto) {
    return await this.routeService.saveRoute(route);
  }

  @Get(':id')
  async getRouteById(@Param('id') id: string) {
    return await this.routeService.getRouteById(id);
  }

  @Put(':id')
  async updateRoute(@Param('id') id: string, @Body() routeUpdate: RouteDto) {
    return await this.routeService.updateRoute(id, routeUpdate);
  }

  @Delete(':id')
  async deleteRoute(@Param('id') id: string) {
    return await this.routeService.deleteRoute(id);
  }
}
