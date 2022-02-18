import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { motion, AnimatePresence } from 'framer-motion'




function Filter({handleData, data, bName, }) {
    const [dataSec, setDataSec] = React.useState([])
    const [open, setOpen] = React.useState(false)
    

    
    const handleCheck=(d)=>{
      let newData= data.filter(element=>{
                if(bName==='Products'){
                    return(d===element.product_name)
                }else if (bName==='State' ){
                    return(d===element.address.state)
                }else {
                    return(d===element.address.city)
                }
        })
        handleData(newData)
        setOpen(false)
    }

    React.useEffect(
        () => {
            const dataFilter = () => {
                let dataBox = []
                data.forEach((element) => {
                    let name = (bName === 'Products') ? element.product_name :
                        (bName === 'State') ? element.address.state :
                            element.address.city
                    if (!dataBox.includes(name)) {
                        dataBox.push(name)
                    }
                });
                return setDataSec(dataBox)
            }
            dataFilter();
            // eslint-disable-next-line
        }, [data])


    const MoBox = motion(Box)
    return (
        <AnimatePresence>
            <MoBox>
                <Flex bg='#292929' _hover={{ backgroundColor: '#131313' }} rounded='base' p='10px' pos='relative'
                    my={['3']} color='white'  onClick={() => setOpen(!open)} >
                    {bName}
                    <Box pos='absolute' pr='5px' pt='6px'  right={0} >
                        <TiArrowSortedDown />
                    </Box>
                </Flex>
                <MoBox >
                    <AnimatePresence>
                        {open && dataSec.map(d => {
                            return (
                                <MoBox pl='5px' color='#949494' onClick={()=>handleCheck(d)}
                                    initial={{ opacity: 0, height:0}} cursor='pointer' _hover={{color:'white'}}
                                    transition={{default: { duration: 0.5 }}}
                                    animate={{ opacity: 1,height:30 }}
                                    exit={{ opacity: 0 , height:0 }} key={d + 'filter'} >
                                    {d}
                                </MoBox>
                            )
                        })}
                    </AnimatePresence>
                </MoBox>

            </MoBox>


        </AnimatePresence>

    )
}

export default Filter

