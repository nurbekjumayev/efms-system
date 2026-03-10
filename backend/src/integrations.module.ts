import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Driver } from './driver.entity';
import { CheckStatus } from './medical.entity';

@Entity('access_logs')
export class AccessLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Driver, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @Column({ length: 100, nullable: true })
  device_id: string;

  @Column({
    type: 'enum',
    enum: CheckStatus,
    default: CheckStatus.PENDING,
  })
  status: CheckStatus;

  @CreateDateColumn()
  access_time: Date;
}

import { Module, Controller, Post, Body } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('integrations/hikvision')
export class HikvisionController {
  constructor(
    @InjectRepository(AccessLog)
    private accessRepo: Repository<AccessLog>,
    @InjectRepository(Driver)
    private driverRepo: Repository<Driver>,
  ) {}

  @Post('webhook')
  async handleEvent(@Body() payload: any) {
    // Basic Hikvision event body logic (biometric identifier match)
    const faceIdHash = payload.faceId; 
    
    const driver = await this.driverRepo.findOneBy({ face_id_hash: faceIdHash });
    
    const log = this.accessRepo.create({
      driver: driver || null,
      device_id: payload.deviceId,
      status: driver ? CheckStatus.PASSED : CheckStatus.FAILED,
    });

    return await this.accessRepo.save(log);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([AccessLog, Driver])],
  controllers: [HikvisionController],
})
export class IntegrationsModule {}
