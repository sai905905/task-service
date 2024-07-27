import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true, unique: true })
  title: string;
  
  @Prop()
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
