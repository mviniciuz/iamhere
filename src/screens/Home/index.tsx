import {View, Text, TextInput, TouchableOpacity, FlatList, Alert  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){

  const Participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jac', 'Maick', 'Julio', 'Paulo', 'jose', 'Maria'];

  function handleParticipantAdd(){
    if (Participants.includes("Rodrigo")){
      return Alert.alert("Participante existe", "Já existe um participante com este nome")
    }
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>   
      </View>

      <FlatList
        data={Participants}
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