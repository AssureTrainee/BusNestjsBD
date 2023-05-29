import {
  BadRequestException,
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
    @InjectRepository(RouteEntity, 'postgres')
    private routeRepository: Repository<RouteEntity>,
  ) {}

  async getRoutes(): Promise<RouteEntity[]> {
    return await this.routeRepository.find();
  }

  async saveRoute(routeDto: RouteDto) {
    const route = this.routeRepository.create(routeDto);
    try {
      return await this.routeRepository.save(route);
    } catch (error) {
      throw new ConflictException('There was a conflict when create the user');
    }
  }

  async getRouteById(id: string) {
    const route = await this.routeRepository.findOne({ where: { id } });
    if (!route) {
      throw new BadRequestException('User not found');
    }
    return route;
  }

  async updateRoute(id: string, routeUpdate: RouteDto) {
    const route: RouteEntity = await this.getRouteById(id);
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
