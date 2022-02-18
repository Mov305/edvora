import { Box, Heading, } from '@chakra-ui/react'
import React from 'react'
import Brand from './brands'



function ProductsSection({data}) {
    const [brandData, setbrandData] = React.useState([])


    React.useEffect(
        () => {
            const brandFilter = () => {
                let brand = []
                data.forEach((element) => {
                    let name = element.brand_name
                    if (!brand.includes(name)) {
                        brand.push(name)
                    }
                }); 
                return setbrandData(brand)
            }
            brandFilter();
            // eslint-disable-next-line
        }, [data])


    return (
        <Box  minH='100vh' >
            <Heading ml={['0','0','30px','50px']} mt='30px' fontSize={['2.3em']} display={['none','none','block']} color='#e2e2e2'>Edvora</Heading>
            <Heading ml={['0','0','30px','50px']} mt='20px' fontSize={['1.5em']} fontWeight='600' color='#949494'>Products</Heading>
            <Box>
                {brandData && brandData.map((bName) => {
                    return (
                        <Brand key={bName+'brand'} products={data} brand={bName} />
                    )
                })}
            </Box>
        </Box>
    )
}

export default ProductsSection