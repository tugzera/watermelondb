import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import Alunos from './model/Aluno';

import schema from './schema';
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
});

// Then, make a Watermelon database from it!
export const databaseWM = new Database({
  adapter,
  modelClasses: [Alunos],
  actionsEnabled: true,
});
