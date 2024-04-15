import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersModule } from 'offers-service/src/Offers.module'; 
import { UsersModule } from 'user-management-service/src/Users.module'; 
import { DestinationsModule } from 'destinations-service/src/Destinations.module'; 
import { AccommodationsModule } from 'accommodations-service/src/Accommodations.module';
import { ActivitiesModule } from 'activities-service/src/Activities.module';
import { TransportationModule } from 'transportation-service/src/Transportation.module'; 

@Module({
  imports: [ 
    OffersModule,
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://sam:GWliJTLJ8zJSLUjP@cluster0.7ir6kpe.mongodb.net/PFE', {
      // Add other options if needed
    }),
    DestinationsModule,
    AccommodationsModule,
    ActivitiesModule,
    TransportationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
