import { HStack, Heading, Text, VStack, Icon } from 'native-base'

import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from './UserPhoto'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '../hooks/useAuth'

import defaultUserPhotoImg from '../assets/userPhotoDefault.png'
import { api } from '../services/api'

export function HomeHeader() {
  const { user, signOut } = useAuth()

  return (
    // o hstack é para deixar os item alinhados um ao lado do outro
    // o vStack deixa um elemento abaixo do outro

    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        {/** com o flex de um faz com que a v stack ocupe o tamanho todo destinado a ela e jogue o icone para
         * o canto da tela, é possivel ver a caixa que a vstack ocupa mudando o bgcolor dela
         */}
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
