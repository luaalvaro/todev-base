import React from 'react'
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  Link as A,
  Center,
} from '@chakra-ui/react'
import { styles } from '../constants/styles'
import Image from 'next/image'
import AuthHeader from '../components/auth/AuthHeader'
import Logo from '../../assets/todev-logo-xl.svg'

const Login = () => {
  return (
    <Box
      minHeight="100vh"
      background={styles.color.background}

      fontFamily="Open Sans"
      fontSize={14}
      fontWeight={600}
      color={styles.color.textPrimary}
    >
      <AuthHeader />

      <Center
        paddingTop="24px"
        paddingBottom="48px"
        flexDirection="column"
        gridGap="18px"
      >
        <Image
          src={Logo}
          width={167}
          height={57}
          alt="ToDev"
        />

        <Text
          opacity={.7}
          letterSpacing={.9}
        >
          Faça login em sua conta
        </Text>
      </Center>

      <Flex
        px="12px"
        direction="column"
        gridGap="24px"
      >
        <FormControl
          id="email"
        >
          <Input
            placeholder="Email"
            background={styles.color.backgroundDark}
            border="none"
            borderRadius="4px"
            height="50px"

            fontFamily="Open Sans"
            fontSize={14}
            fontWeight={600}
          />
        </FormControl>

        <FormControl
          id="pass"
        >
          <Input
            placeholder="Senha"
            background={styles.color.backgroundDark}
            border="none"
            borderRadius="4px"
            height="50px"

            fontFamily="Open Sans"
            fontSize={14}
            fontWeight={600}
          />
        </FormControl>

        <Button
          background={styles.color.primary}
          fontFamily="Open Sans"
          fontSize={14}
          fontWeight={600}

          height="55px"

          _hover={{
            background: styles.color.primaryHover
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Box>
  )
}

export default Login