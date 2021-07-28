import { Box, Image } from "@chakra-ui/react"

const Card = () => {
    return <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor="#FFF">
        <Image src="https://imagevars.gulfnews.com/2020/01/20/Asteroid_16fc296ce02_original-ratio.jpg" />
        <Box p="15">
            <Box fontSize="22px" fontWeight="bold">
                Mission_Name
            </Box>
            <Box fontSize="12px" color="#ececec" fontWeight="bold">
                 Rocket_Name
            </Box>
            <Box fontSize="11px">
            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet,
            </Box>
        </Box>
    </Box>
}

export default Card;