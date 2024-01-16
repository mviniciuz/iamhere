import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {    
    width:'100%',
    flexDirection: 'row',  
    marginTop: 10

  },
  name:{
    flex : 1, 
    height: 56,    
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color:'#fff',
    padding: 16,
    marginRight:12   

  },
  input: {
    flex: 1,
    height: 56,
    color:'#fff',
    padding: 16,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    marginRight: 12
    

  },
  button: {
    height:56,
    width:56,
    backgroundColor: '#E23C44',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'        

  },
  buttonText: {
    color:'#fff',
    fontSize: 24,   
  },

})