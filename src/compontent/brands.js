import { Box, Heading, Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Product from './Product'
import { GrPrevious,GrNext } from 'react-icons/gr'


function Brand({products,brand}) {

    const [xDir,setXDir]= React.useState(0)
    const [next,setNext]= React.useState(true)
    const [back,setBack]= React.useState(false)
    const widthRef = useRef(null)
   



    const handleAnimeForward=()=>{
        let num = products.filter(e=>e.brand_name === brand).length
        let width = widthRef.current.clientWidth/num
        if( num-1 > xDir/width ){
            setXDir(xDir+width)
            setBack(true)
        }else{
            setNext(false)
        }
    }

    const handleAnimeBackward=()=>{
        let num = products.filter(e=>e.brand_name === brand).length
        let width = widthRef.current.clientWidth/num
        if(xDir>0){
            setXDir(xDir-width)
            console.log('done')
            setNext(true)
        }else{
            setBack(false)
        }

    }
    

    const style = { width: '30px', height: '50px', filter: 'invert(0.8)' }
    return (
        <Box>
            <Heading fontSize={['1.3em']} color='#e2e2e2' ml={['0','0','30px','50px']} fontWeight='500'
                borderBottom='1px solid #949494' my='10px' py='10px'
                lineHeight='2.2' > {brand} </Heading>
            <Flex pos='relative' px={['0','0','30px','50px']} >
                {next && <Box display={['none','unset']} pos='absolute' alignSelf='center' right={0}  >
                    <GrNext style={style} onClick={()=>handleAnimeForward()} />
                </Box>}
                {back && <Box display={['none','unset']} pos='absolute' alignSelf='center' left={0}  >
                    <GrPrevious style={style} onClick={()=>handleAnimeBackward()} />
                </Box>}
                <Flex overflowX={['scroll','hidden']} my='10px' bg='#131313'  width='full' p='20px' rounded='2xl'>
                        <Flex ref={widthRef}  transition='all ease-in-out 0.3s' transform={`translateX(${-xDir}px)`} >
                            {products &&
                                products.filter(ele => ele.brand_name === brand).map((el, i) => {
                                    return (el &&
                                        <Box key={el.product_name + i + 'products'}  >
                                            <Product data={el} />
                                        </Box>
                                    )
                                })
                            }
                        </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Brand