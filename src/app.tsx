import React from 'react'

import { 
  View,
  Text, 
  StyleSheet
} from 'react-native'

interface Props {}

interface State {
  name: string
}

class App extends React.Component {
  state = { name: 'from TypeScript~~' }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> 
          Hello {this.state.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  text: {
    fontSize: 20,
  }
})
export default App