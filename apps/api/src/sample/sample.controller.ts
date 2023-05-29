import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Controller()
export class SampleController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async hello() {
    const newUser: Prisma.UserCreateInput = {
      email: (Math.random() + 1).toString(36),
    };
    await this.prisma.user.create({ data: newUser });
    return this.prisma.user.findMany();
  }
}
