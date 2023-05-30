import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItineraryUpdateDto } from 'src/dto/itinerary.update.dto';
import { ItineraryEntity } from 'src/persistance/itineraty.entity';
import { Repository } from 'typeorm';
import { BusService } from '../bus/bus.service';
import { ItineraryDto } from 'src/dto/itinerary.dto';
import { DriverService } from '../driver/driver.service';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(ItineraryEntity)
    private itineraryRepository: Repository<ItineraryEntity>,
    @Inject(forwardRef(() => BusService))
    private busService: BusService,
    @Inject(forwardRef(() => DriverService))
    private driverService: DriverService,
  ) {}

  async findAllItineraries() {
    return this.itineraryRepository.find();
  }

  async findItineraryById(itineraryId: string) {
    const itinerary = this.itineraryRepository.findOne({
      where: { itineraryId },
    });
    if (!itinerary) {
      throw new NotFoundException(
        `itinerary with this id: ${itineraryId} not found`,
      );
    }
    return itinerary;
  }

  async createItinerany(itineraryData: ItineraryDto) {
    const itineraryInfo: ItineraryUpdateDto = { ...itineraryData };
    const bus = await this.busService.findBusById(itineraryData.busId);
    const driver = await this.driverService.findDriverById(
      itineraryData.driverId,
    );
    if (!bus && !driver) {
      throw new NotFoundException();
    }

    const itinerary = this.itineraryRepository.create(itineraryInfo);
    itinerary.Bus = bus;
    itinerary.Driver = driver;

    return this.itineraryRepository.save(itinerary);
  }

  async updateItinerary(id: string, itineraryData: ItineraryUpdateDto) {
    const itinerary: ItineraryEntity = await this.findItineraryById(id);
    await this.itineraryRepository.merge(itinerary, itineraryData);
    return await this.itineraryRepository.save(itinerary);
  }

  async deleteItineraryById(itineraryId: string) {
    const itinerary = await this.findItineraryById(itineraryId);
    await this.itineraryRepository.remove(itinerary);
    return true;
  }
}
