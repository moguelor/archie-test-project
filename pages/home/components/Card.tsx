import { Box, Image } from "@chakra-ui/react"

type CardProps = {
    missionName: string;
    rocketName: string;
    details: string;
    image: string;
    link ?: string;
}

const Card = ({ missionName, rocketName, details, image, link }: CardProps) => {
    return <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor="#FFF">
        <Image src={image} />
        <Box p="15">
            <Box fontSize="22px" fontWeight="bold">
                {missionName }
            </Box>
            <Box fontSize="12px" color="#ececec" fontWeight="bold">
                 {rocketName}
            </Box>
            <Box fontSize="11px">
           {details}
            </Box>
        </Box>
    </Box>
}

export default Card;