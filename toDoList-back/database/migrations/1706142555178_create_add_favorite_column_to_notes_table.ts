import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddFavoriteColumnToNotes extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('favorite').defaultTo(false)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('favorite')
    })
  }
}
