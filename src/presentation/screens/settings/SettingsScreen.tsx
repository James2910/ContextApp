import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../../store/counter-store'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/PrimaryButton'

export const SettingsScreen = () => {

  const count = useCounterStore( state => state.counter );
  const increaseBy = useCounterStore( state => state.increaseBy );

  const navigation = useNavigation();

  useEffect(() => {

    navigation.setOptions({
      title: `Contador: ${ count }`
    })
    
  }, [ count ])
  

  return (
    <View style={ styles.container }>
      
      <Text style={ styles.title }>Count: {count}</Text>

      <PrimaryButton 
        title='+1'
        action={ () => increaseBy( 1 ) }
      />
      
      <PrimaryButton 
        title='-1'
        action={ () => increaseBy( -1 ) }
      />

    </View>

  )
}
