import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../../store/profile-store'
import { PrimaryButton } from '../../components/PrimaryButton';

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <PrimaryButton 
        title='Cambiar Nombre'
        action={ () => useProfileStore.setState({ name: 'James Amaya' }) }
      />

      <PrimaryButton 
        title='Cambiar Email'
        action={ () => useProfileStore.setState({ email: 'jamesamaya@email.com' }) }
      />

      <PrimaryButton 
        title='Regresar a Itachi'
        action={ () => changeProfile( 'Itachi Uchiha', 'itachiuchija@email.com' ) }
      />

    </View>
  )
}
