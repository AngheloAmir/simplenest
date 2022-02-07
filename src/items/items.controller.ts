/*
    Type: nest g controller <routename>
    to create a controller
*/

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService  } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService :ItemsService) {
        //itemService
    }

    @Get()
    async getAllItems() :Promise<Item[]> {
        return await this.itemService.findAll();
    }

    @Get(':id') //localhost:3000/items/1000
    findOne(@Param('id') id) :Item {
        return this.itemService.findOne(id);
        //return `Item id is: ${id}`;
    }

    @Post()
    createItem(@Body() reqBody :CreateItemDto) :string {
        return `Item name is: ${reqBody.name}`;
    }

    @Delete(':id')
    deleteItem(@Param('id') id) :string {
        return `deleting : ${id}`;
    }

    @Put(':id')
    update(@Body() updateItem :CreateItemDto, @Param('id') id) :string {
        return `updating ${id} to ${updateItem.name}`;
    }

}
