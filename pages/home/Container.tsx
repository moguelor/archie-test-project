import { Card } from './components';
import { Container, Box, SimpleGrid, Input } from "@chakra-ui/react";

/**
 * > 360px sm
 * > 480px md 
 * > 768px
 * > 992px
 * > 1200
 */

const Home = () => {
    return <Container paddingTop="35px" maxW="110ch" centerContent>
        <Box width="100%">
            <Input marginBottom="25px" placeholder="Find..." bgColor="#FFF" />
        </Box>
        <SimpleGrid  columns={[1, 3, 4, 6]} spacing="15px" >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </SimpleGrid>
    </Container>
}

export default Home;
