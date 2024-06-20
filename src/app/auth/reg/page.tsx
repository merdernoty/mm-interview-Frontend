import { Box, Container } from '@chakra-ui/react'
import React from 'react'

function page() {
    return (
        <Container>
            <div className="flex items-center justify-center h-screen">
                <Box
                    className="container my-auto mx-auto p-12"
                    maxW="xl"
                    bg='black'

                    borderRadius="lg"
                >
                    This is the Box
                </Box>
            </div>
        </Container>
    )
}

export default page
