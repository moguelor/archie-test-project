import { Card } from './components';
import { Container, Box, SimpleGrid, Input } from "@chakra-ui/react";

/**
 * > 360px sm
 * > 480px md 
 * > 768px
 * > 992px
 * > 1200
 */

// TODO: Add correctly proptypes.
type HomeProps = {
    launchesPast?: []
}


const Home = ({ launchesPast }: HomeProps) => {

    console.log( 'countries -->', launchesPast);
    return <Container paddingTop="35px" paddingBottom="35px" maxW="110ch" centerContent>
        <Box width="100%">
            <Input marginBottom="25px" placeholder="Find..." bgColor="#FFF" />
        </Box>
        <SimpleGrid  columns={[1, 3, 4, 6]} spacing="15px" >
            {
                launchesPast?.map(({ mission_name, rocket : {rocket_name}, details, links : { article_link,  flickr_images } }) => <Card missionName={mission_name} rocketName={rocket_name} details={details} image={flickr_images[0]} link={article_link} />)
            }
          
        </SimpleGrid>
    </Container>
}

export default Home;
