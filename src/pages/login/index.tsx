import { Button, Flex, Stack, Text  } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'


import logo from '../assets/logos/estrela.png'

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
      bg="blue.900"
    >
      <Flex 
        as="form" 
        width="100%"
        maxWidth='512px'
        bg="white.900"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Flex justifyContent='center' alignItems='flex-end'>
          <Text fontSize={23} lineHeight='26px'  fontWeight={900}> ESTRELA </Text>
          <img src={logo.src} alt='logo' width={37}/>
          <Text fontSize={23} lineHeight='26px' fontWeight={900}> INTERNO </Text>
        </Flex>

        <Flex alignItems='center' justifyContent='center' mt={3} mb={8}>
          <Text fontSize={20} fontWeight={700}> Acesse sua Conta </Text>
        </Flex>

        <Stack spacing="4">
          <Input name='email' type='email' label='E-mail'/>
          <Input name='password' type='password' label='Senha'/>
        </Stack>

        <Button type='submit' mt="6" colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
