import { Module } from "@nestjs/common";
import { SampleController } from "./sample/sample.controller";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [SampleController],
  providers: [],
})
export class AppModule {}
