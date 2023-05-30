import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RouteDto } from '../../dto/route.dto';
import { RouteEntity } from '../../persistance/route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(RouteEntity)
    private routeRepository: Repository<RouteEntity>,
  ) {}

  async findAllRoutes(): Promise<RouteEntity[]> {
    return await this.routeRepository.find();
  }

  async createRoute(routeDto: RouteDto) {
    const route = this.routeRepository.create(routeDto);
    try {
      return await this.routeRepository.save(route);
    } catch (error) {
      throw new ConflictException('There was a conflict when create the user');
    }
  }

  async findRouteById(routeId: string) {
    const route = await this.routeRepository.findOneBy({ routeId });
    if (!route) {
      throw new NotFoundException(`Route with this id: ${routeId} not found`);
    }
    return route;
  }

  async updateRoute(id: string, routeUpdate: RouteDto) {
    const route: RouteEntity = await this.findRouteById(id);
    await this.routeRepository.merge(route, routeUpdate);
    return await this.routeRepository.save(route);
  }

  async deleteRoute(id: string) {
    const result = await this.routeRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Route with ID "${id}" not found`);
    }
  }
}
