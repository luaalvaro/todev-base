import React from 'react'
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  Center,
} from '@chakra-ui/react'
import { styles } from '../constants/styles'
import Image from 'next/image'
import AuthHeader from '../components/auth/AuthHeader'
import Logo from '../../assets/todev-logo-xl.svg'
import { useFormik } from 'formik'

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });

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

      <form onSubmit={formik.handleSubmit}>
        <Flex
          px="12px"
          direction="column"
          gridGap="24px"
        >
          <FormControl>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              background={styles.color.backgroundDark}
              border="none"
              borderRadius="4px"
              height="50px"

              fontFamily="Open Sans"
              fontSize={14}
              fontWeight={600}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>

          <FormControl
            id="pass"
          >
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              background={styles.color.backgroundDark}
              border="none"
              borderRadius="4px"
              height="50px"

              fontFamily="Open Sans"
              fontSize={14}
              fontWeight={600}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormControl>

          <Button
            type="submit"
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
      </form>
    </Box>
  )
}

export default Login