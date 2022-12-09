import { Note } from '../app/types'

export function isNote(object: unknown): object is Note {
  return (
    Object.prototype.hasOwnProperty.call(object, 'id') &&
    Object.prototype.hasOwnProperty.call(object, 'title') &&
    Object.prototype.hasOwnProperty.call(object, 'category') &&
    Object.prototype.hasOwnProperty.call(object, 'content') &&
    Object.prototype.hasOwnProperty.call(object, 'archived') &&
    Object.prototype.hasOwnProperty.call(object, 'createdAt')
  )
}
