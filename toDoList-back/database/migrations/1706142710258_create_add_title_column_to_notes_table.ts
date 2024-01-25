import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Notes extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('title')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('title')
    })
  }
}
