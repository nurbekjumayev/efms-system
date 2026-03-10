import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { User } from './user.entity';
import { Driver } from './driver.entity';
import { MedicalCheck } from './medical.entity';
import { MechanicalInspection } from './mechanical.entity';
import { Trip } from './trip.entity';
import { AccessLog } from './integrations.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'rootpassword',
      database: process.env.DB_NAME || 'efms',
      entities: [Vehicle, User, Driver, MedicalCheck, MechanicalInspection, Trip, AccessLog],
      synchronize: true, // Auto-create tables for local testing
      logging: true,
    }),
    TypeOrmModule.forFeature([Vehicle, User, Driver, MedicalCheck, MechanicalInspection, Trip, AccessLog]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
