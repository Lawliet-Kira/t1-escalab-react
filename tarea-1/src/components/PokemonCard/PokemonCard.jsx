import React from 'react';

import { 
    Card, 
    CardBody, 
    VStack, 
    Heading,
    StackDivider,
    Box,
    Image,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';

import s from "./style.module.css";

// StateLess Component
const PokemonCard = ({ data }) => (
    <Card h='400px' w='300px' bg={'#EAEBFF'}>
        <CardBody> 
            <VStack divider={<StackDivider borderColor='gray.300' />} spacing={3}>
                <Heading size={'md'}>{data.name}</Heading>
                <Image
                    borderRadius='full' 
                    boxSize='150px'
                    src={data.urlImg}
                    alt={data.name}
                />
                <Box className={s.pokemon_box}> 
                    <h3 className={s.pokemon_attrb}> Attributes </h3>
                    <UnorderedList>
                        <ListItem>Height: {data.attributes.height}</ListItem>
                        <ListItem>Weight: {data.attributes.weight}</ListItem>
                        <ListItem>Category: {data.attributes.category}</ListItem>
                        <ListItem>Skill: {data.attributes.skill}</ListItem>
                    </UnorderedList>
                </Box>         
            </VStack>
        </CardBody>
    </Card>
);
 
export default PokemonCard;