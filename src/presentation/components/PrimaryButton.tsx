import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../../config/app-theme";

interface Props {
    title: string;
    action: (  ) => void;
}

export const PrimaryButton = ({ title, action } : Props) => {
  return (
    <TouchableOpacity onPress={ action }>
        <View style={ styles.primaryButton }>
            <Text style={ styles.primaryTextButton }>{ title }</Text>
        </View>
    </TouchableOpacity>
  )
}
