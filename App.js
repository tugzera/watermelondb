import React, {useState} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

import {databaseWM} from './src/database';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

const Home = () => {
  const [values, setValues] = useState();

  const alunosCollection = databaseWM.collections.get('alunos');

  console.log(alunosCollection);
  const createAluno = async values => {
    await databaseWM.action(async () => {
      const newPost = await alunosCollection.create(post => {
        post.nome = 'New post';
        post.sobrenome = 'Lorem ipsum...';
        post.idade = 'Lorem ipsum...';
      });
      console.log(newPost);
    });
  };

  return (
    <DatabaseProvider database={databaseWM}>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={createAluno}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>WatermelonDB</Title>
          </Body>
          <Right>
            <Button transparent onPress={createAluno}>
              <Icon name="send" />
            </Button>
          </Right>
        </Header>
        <Form>
          <Item floatingLabel>
            <Label>Nome</Label>
            <Input onChangeText={text => setValues({...values, nome: text})} />
          </Item>
          <Item floatingLabel last>
            <Label>Sobrenome</Label>
            <Input
              onChangeText={text => setValues({...values, sobrenome: text})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Idade</Label>
            <Input onChangeText={text => setValues({...values, idade: text})} />
          </Item>
        </Form>
      </Container>
    </DatabaseProvider>
  );
};

export default Home;
