import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public title: string

  @column()
  public text: string

  @column()
  public favorite: boolean

  @column()
  public color: string

  constructor() {
    super()
    this.title = '';
    this.text = '';
    this.favorite = false;
    this.color = '';
  }

  static table = 'notes';

  async save(): Promise<this> {
    await super.save();
    return this;
  }

  static async findById(id: number): Promise<Note | null> {
    return await Note.find(id);
  }

  static async all<T extends typeof BaseModel>(): Promise<InstanceType<T>[]> {
    return await Note.query();
  }

  static async update(id: number, data: Partial<Note>): Promise<number> {
    const note = await Note.findOrFail(id);
    note.merge(data);
    await note.save();

    return 1;
  }

  static async delete(id: number): Promise<number> {
    const deletedRows = await Note.query().where('id', id).delete();
    return deletedRows[0] || 0;
  }
}
