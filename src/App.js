import { Flex, Box,Heading } from '@chakra-ui/react'
import React from 'react';
import ProductsSection from './compontent/ProductsSection';
import Sidebar from './compontent/Sidebar';

function App() {
  const [products, setProducts] = React.useState([])
  const [urlData,setUrlData] = React.useState([])
  React.useEffect(
    () => {
      const getData = async () => {
        let res = await fetch('https://assessment-edvora.herokuapp.com/')
        .catch(err=>console.log(err))
        res = await res.json()
        setProducts(res)
        setUrlData(res)
      }

      getData()
    }, []
  )

 const handleData=(data)=>{
   setProducts(data)
 }

  return (

    <Box bg='#292929' minH='100vh' >

      {products &&
        <Flex alignItems={['center','center','unset']} direction={['column','column','row','row']} >
          <Box  w={['80%', '80%', '25%', '350px']}>
          <Heading ml={['0','0','30px','50px']} py='30px'
                 fontSize={['2.3em']} display={['block','block','none']} color='#e2e2e2'>Edvora</Heading>
          <Sidebar handleData={handleData} data={urlData} />
          </Box>
          <Box  width={['80%','80%','70%']} ml={['0','0','20px']}>
          <ProductsSection data={products} />
          </Box>
        </Flex>}

    </Box>
  );
}

export default App;
