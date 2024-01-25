import { HttpContext } from '@adonisjs/core/http';
import NoteModel from '../../models/note.js';

export default class NoteController {
  public async index({ response }: HttpContext): Promise<any> {
    const notes = await NoteModel.all();
    return response.json(notes);
  }

  public async show({ params, response }: HttpContext): Promise<any> {
    const note = await NoteModel.find(params.id);

    if (!note) {
      return response.status(404).json({ message: 'Nota não encontrada' });
    }

    return response.json(note);
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'text', 'favorite', 'color']);
    const note = await NoteModel.create(data);

    return response.status(201).json(note);
  }

  public async update({ params, request, response }: HttpContext) {
    const data = request.only(['title', 'text', 'favorite', 'color']);
    const note = await NoteModel.find(params.id);

    if (!note) {
      return response.status(404).json({ message: 'Nota não encontrada' });
    }

    note.merge(data);
    await note.save();

    return response.json(note);
  }

  public async destroy({ params, response }: HttpContext) {
    const note = await NoteModel.find(params.id);

    if (!note) {
      return response.status(404).json({ message: 'Nota não encontrada' });
    }

    await note.delete();

    return response.json({ message: 'Nota excluída com sucesso' });
  }
}
