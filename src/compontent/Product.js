import { Box, Img, Text,Flex,Spacer } from '@chakra-ui/react'
import React from 'react'

function Product({data}) {

  return (
    <Box mr='20px' bg='#292929' rounded='xl' p='10px' minW={['180px','260px']} minH={['80px','140px']}>
        <Flex>
            <Img src={data.image}
            border='0.5px solid #94949432' boxSize={['50px','80px']} mr={['10px','15px']}
            rounded ='xl'>
            </Img>
            <Box mx='2'>
                <Text fontWeight='500' fontSize={['0.8em','1em']} color ='#e2e2e2' my='1' >{data.product_name}</Text>
                <Text color='#949494' fontSize={['0.6em','0.8em']} my='1'>{data.brand_name} </Text>
                <Text fontWeight='450'fontSize={['0.9em','1em']} color ='#e2e2e2'>$ {data.price}</Text>
            </Box>
        </Flex>
        <Flex fontSize='smaller' m='1' pt={['10px','15px']}> 
        <Text color='#949494'>{ data.address?.city}</Text>
        <Spacer/>
        <Text color='#949494'>Date: {data.date.split('T')[0].replace(/-/g,':')}</Text>
        </Flex>
        <Box m='1'>
        <Text fontSize='smaller' color='#949494'>{data.discription}</Text>
        </Box >
    </Box>

  )
}

export default Product