import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './brands/brands.module';
import { AttributesModule } from './attributes/attributes.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { TaxesModule } from './taxes/taxes.module';
import { UnitsModule } from './units/units.module';
import { AuthorsModule } from './authors/authors.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pim'),
    BrandsModule,
    AttributesModule,
    CategoriesModule,
    ProductsModule,
    TaxesModule,
    UnitsModule,
    AuthorsModule
  ],
})
export class AppModule {}
