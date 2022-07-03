import { Flex, Text, } from '@chakra-ui/react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { styles } from '../constants/styles'

const CardTask = () => {
    return (
        <Flex
            background={styles.color.backgroundDark}
            borderRadius="4px"
            align="center"
        >
            <Flex
                px="12px"
            >
                <AiOutlineClockCircle
                    fontSize={22}
                />
            </Flex>

            <Text
                py="13px"
                opacity={.7}
            >
                Tarefa pendente
            </Text>
        </Flex>
    )
}

export default CardTask