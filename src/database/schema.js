import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'alunos',
      columns: [
        {name: 'nome', type: 'string'},
        {name: 'sobrenome', type: 'string', isOptional: true},
        {name: 'idade', type: 'string'},
        {name: 'aprovado', type: 'boolean'},
      ],
    }),
  ],
});
