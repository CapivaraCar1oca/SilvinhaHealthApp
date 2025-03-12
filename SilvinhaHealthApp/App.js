import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlecontainer}>
       <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
       <Text style={styles.subtitle}>Calculadora de IMC</Text>

        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex.'
            keyboardType='numeric'
          ></TextInput>
        </View>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',

  },
  titlecontainer: {
    alignItems:'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#D90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title:{
    color:'#EDF2F4',
    fontSize: 28,
    fontWeight:'bold',
    marginBottom: 30,
  },
  content:{
    flex: 1,
    padding: 40,
    widht:'100%',
    backgroundColor:'EDF2F4'
    
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 24,
    color:'D90429',
    fontWeight:'bold',
    marginBottom: 40,
  },
  label:{
    color: '#000',
    fontSize: 18,
  },
  Input:{
    height: 45,
    widht:'100%',
    fontSize: 18,
    borderColor: 'D90429',
    borderBottomWidht: 1
  }
});
