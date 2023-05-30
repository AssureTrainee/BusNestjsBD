import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { RouteDto } from 'src/dto/route.dto';
import { RouteUpdateDto } from 'src/dto/route.update.dto';
import { RouteService } from 'src/service/route/route.service';

@Controller('route')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Get()
  async getRoutes() {
    return await this.routeService.findAllRoutes();
  }

  @Post()
  async saveRoute(@Body() route: RouteDto) {
    return await this.routeService.createRoute(route);
  }

  @Get(':id')
  async getRouteById(@Param('id') routeId: string) {
    return await this.routeService.findRouteById(routeId);
  }

  @Patch(':id')
  async updateRoute(
    @Param('id') id: string,
    @Body() routeUpdate: RouteUpdateDto,
  ) {
    return await this.routeService.updateRoute(id, routeUpdate);
  }

  @Delete(':id')
  async deleteRoute(@Param('id') id: string) {
    return await this.routeService.deleteRoute(id);
  }
}
