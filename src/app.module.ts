import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { AttributeModule } from './attribute/attribute.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pim'),
    CategoryModule,
    AttributeModule,
    ProductModule
  ],
})
export class AppModule {}
