import { Injectable } from '@nestjs/common';
import { CreateTltUserDto } from './dto/create-tlt-user.dto';
import { UpdateTltUserDto } from './dto/update-tlt-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TltUser } from './schema/tlt-user.schema';
import { Model } from 'mongoose';

@Injectable()
export class TltUserService {
  constructor(
    @InjectModel(TltUser.name, 'tlt')
    private tltUserSchema: Model<TltUser>,
 
  ) {}
  async create(createTltUserDto: CreateTltUserDto) {
    var user = await this.tltUserSchema.create({
      });
     await user.save();
     return {"msg" : "TLT user created Thank You "}
  }

  findAll() {
    return `This action returns all tltUser`;
  }

  findOne(id: string) {
    return `This action returns a #${id} tltUser`;
  }

  async update(id: string, updateTltUserDto: UpdateTltUserDto) {
    var tltUser = await this.tltUserSchema.findByIdAndUpdate(
      updateTltUserDto.id,
      { userType: updateTltUserDto.userType, division: updateTltUserDto.division },
    );
    return tltUser;  }

    async remove(id: string) {
     var user = await this.tltUserSchema.findByIdAndDelete(id);
      return user;
    }
}
