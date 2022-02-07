import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel :Model<Item>) {
    }

    private readonly items :Item[] = [
        {
            id: '1',
            name: 'item one',
            description: 'item one description',
            qty: 100
        },
        {
            id: '2',
            name: 'item two test test',
            description: 'item two description',
            qty: 200
        }
    ];

    async findAll() :Promise<Item[]> {
        return await this.itemModel.find();
        //return this.items;
    }

    public findOne(id :string) :Item {
        return this.items.find(item => item.id === id);
    }
}
