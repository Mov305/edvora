import React from 'react'
import { Box,Flex,Spacer } from '@chakra-ui/react'
import { motion, } from 'framer-motion'
import Filter from './filter'
import {AiFillCloseCircle} from 'react-icons/ai'

const selectData = ['Products', 'State', 'City']




const MoBox = motion(Box)


function Sidebar({ handleData, data }) {
    return (
        <Box transition='all ease-in-out 0.3s' m={['0','0','30px']} bg='#131313'
            rounded='xl' width='full' p='20px' h='fit-content' >
            <Flex my={['3']} cursor='default' fontSize='larger' color='#a5a5a5' p='10px' borderBottom='1px solid white' >
                 Filter 
                 <Spacer/>
                 <Box _hover={{color:'white'}} pt='6px' onClick={()=>handleData(data)}>
                 <AiFillCloseCircle  />
                 </Box>
            </Flex>
            <MoBox mb='20px' >
                {data && selectData.map((d) => <Filter key={d + '1'} handleData={handleData} bName={d} data={data} />)}
            </MoBox >
        </Box>

    )
}

export default Sidebar

