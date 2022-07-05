import React from 'react'
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { styles } from '../constants/styles'
import Header from '../components/Header'

const Home = () => {

  const [newTask, setNewTask] = React.useState("")

  return (
    <Box
      minHeight="100vh"
      background={styles.color.background}

      fontFamily="Open Sans"
      fontSize={14}
      fontWeight={600}
      color={styles.color.textPrimary}
    >
      <Header />

      <Flex
        padding="12px 24px"
        direction="column"

        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <Text
          fontSize="18px"
          fontWeight={700}
          mb="10px"
        >
          Lista Principal
        </Text>

        <Text
          opacity={.7}
        >
          Sem tarefas por aqui :/
        </Text>
      </Flex>

      <Flex
        padding="12px 24px"
        direction="column"
      >
        <Text
          fontSize="18px"
          fontWeight={700}
          mb="10px"
        >
          Concluída(s)
        </Text>

        <Text
          opacity={.7}
        >
          Você não concluiu nada!
        </Text>
      </Flex>

      <Flex
        position="fixed"
        left="0"
        right="0"
        bottom="20px"
        px="20px"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='#fff'
            fontSize='26px'
          >
            +
          </InputLeftElement>
          <Input
            placeholder='Adicionar uma tarefa'
            border="none"
            background={styles.color.backgroundDark}
            height="45px"
            value={newTask}
            onChange={({ target }) => setNewTask(target.value)}
          />
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default Home