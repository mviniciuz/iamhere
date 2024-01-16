import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#6B6B6B',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48  
  },
  input: {      
    flex : 1, 
    height: 56,    
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color:'#fff',
    padding: 16,
    marginRight:12
  },
  button: {
    height:56,
    width:56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:'#fff',
    fontSize: 24,   
  },
  form:{
    width:'100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30  
  },
  emptyText:{
    color: '#fff',
    fontSize:12
  }

});

