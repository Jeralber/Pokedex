import {  Document } from "mongoose";
import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Pokemon extends Document{
    @Prop({
        unique: true,
        index: true,
    })
    name:string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number
}

export const PokemoSchema = SchemaFactory.createForClass(Pokemon)
