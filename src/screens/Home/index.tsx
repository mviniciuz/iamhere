import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){
  const [participants, setParticipants] = useState(['Joao']);
  const [text, setText] = useState('');

  

  function handleParticipantAdd(){
    if (participants.includes(text)){
      return Alert.alert("Participante existe", "Já existe um participante com este nome")
    }

    setParticipants(prevState => [...prevState, text]);
  }

  function handleParticipantDelete(name: string){
    Alert.alert('Remover participante',`Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: ()=> Alert.alert('Deletado')
      },
      {
        text: 'Nao'
      }
    ] )
  }  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>   
      </View>

      <FlatList
        data={participants}
        keyExtractor={ item => item }
        renderItem={({ item }) => (
          <Participant 
            key={ item } 
            name={ item }
            onDelete={() => handleParticipantDelete(item)}
          />
        )}
        ListEmptyComponent={()=> (
          <Text style={styles.emptyText}>No momento não existem participantes cadastrados</Text>
        )}
      />   

    </View>
  );
}