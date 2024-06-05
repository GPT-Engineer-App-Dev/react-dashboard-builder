import * as React from "react";
import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box className="Dashboard" py={5} pr={5} pl={20} bg="gray.900" borderRadius="30px" maxW="full" maxH="full" overflow="hidden">
      <Flex className="Content" gap={5} direction={{ base: "column", md: "row" }}>
        <Box className="Sidebar" flex="1" w={{ base: "full", md: "15%" }}>
          <VStack mt={11} spacing={10} align="start" color="white" fontSize="2xl" fontWeight="semibold">
            <Image
              loading="lazy"
              src="https://via.placeholder.com/86"
              boxSize="86px"
              objectFit="cover"
              borderRadius="full"
            />
            <Text className="Samantha" fontSize="3xl">Samantha</Text>
            <Text className="SamanthaEmailCom" fontSize="lg">samantha@email.com</Text>
            <Text className="Menu Dashboard" mt={32}>Dashboard</Text>
            <Text className="Menu Expenses" mt={12}>Expenses</Text>
            <Text className="Menu Wallets" mt={10}>Wallets</Text>
            <Text className="Menu Summary" mt={12}>Summary</Text>
            <Text className="Menu Accounts" mt={10}>Accounts</Text>
            <Text className="Menu Settings" mt={11}>Settings</Text>
          </VStack>
        </Box>
        <Box className="BackgroundContent" flex="3" w={{ base: "full", md: "85%" }} bg="white" borderRadius="30px" p={20}>
          <Flex className="RightContent" gap={5} direction={{ base: "column", md: "row" }}>
            <Box className="MainContent" flex="3">
              <VStack spacing={10} align="start">
                <Box className="Title">
                  <Text className="Expenses" fontSize="4xl" fontWeight="semibold" color="gray.800">Expenses</Text>
                  <Text className="25March2020" mt={4} fontSize="base" color="gray.900">01 - 25 March, 2020</Text>
                </Box>
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                  boxSize="510px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <Box className="Date">
                  <Text className="Today" fontSize="lg" color="gray.800">Today</Text>
                  <VStack className="List" mt={10} spacing={6} align="start">
                    <Flex gap={4}>
                      <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?"
                        boxSize="12"
                        objectFit="cover"
                        borderRadius="full"
                      />
                      <Box>
                        <Text className="Grocery" fontSize="base" fontWeight="medium" color="gray.800">Grocery</Text>
                        <Text className="12PmBelanjaDi" mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Belanja di pasar</Text>
                      </Box>
                    </Flex>
                    <Flex gap={4}>
                      <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?"
                        boxSize="12"
                        objectFit="cover"
                        borderRadius="full"
                      />
                      <Box>
                        <Text className="Transportation" fontSize="base" fontWeight="medium" color="gray.800">Transportation</Text>
                        <Text className="12PmNaikBusU" mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Naik bus umum</Text>
                      </Box>
                    </Flex>
                    <Flex gap={4}>
                      <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?"
                        boxSize="12"
                        objectFit="cover"
                        borderRadius="full"
                      />
                      <Box>
                        <Text className="Housing" fontSize="base" fontWeight="medium" color="gray.800">Housing</Text>
                        <Text className="12PmBayarList" mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Bayar Listrik</Text>
                      </Box>
                    </Flex>
                  </VStack>
                  <Text className="Monday23March202" mt={16} fontSize="lg" color="gray.800">Monday, 23 March 2020</Text>
                  <VStack className="List" mt={10} spacing={6} align="start">
                    <Flex gap={4}>
                      <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?"
                        boxSize="12"
                        objectFit="cover"
                        borderRadius="full"
                      />
                      <Box>
                        <Text className="FoodAndDrink" fontSize="base" fontWeight="medium" color="gray.800">Food and Drink</Text>
                        <Text className="12PmMakanStea" mt={4} fontSize="sm" color="gray.700">5:12 pm • Makan Steak</Text>
                      </Box>
                    </Flex>
                    <Flex gap={4}>
                      <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?"
                        boxSize="12"
                        objectFit="cover"
                        borderRadius="full"
                      />
                      <Box>
                        <Text className="Entertainment" fontSize="base" fontWeight="medium" color="gray.800">Entertainment</Text>
                        <Text className="12PmNontonBio" mt={3.5} fontSize="sm" color="gray.700">5:12 pm • Nonton Bioskop</Text>
                      </Box>
                    </Flex>
                  </VStack>
                </Box>
              </VStack>
            </Box>
            <Box className="Stats" flex="2" bg="gray.50" borderRadius="md" p={12}>
              <Text className="WhereYourMoneyGo" fontSize="xl" color="gray.800">Where your money go?</Text>
              <VStack className="Stats" mt={10} spacing={9} align="start">
                <Flex justify="space-between" w="full">
                  <Text className="FoodAndDrinks" fontSize="sm" fontWeight="medium" color="gray.800">Food and Drinks</Text>
                  <Text className="400" fontSize="sm" color="gray.800">872.400</Text>
                </Flex>
                <Box className="Rectangle" w="full" bg="gray.100" borderRadius="md">
                  <Box className="RectangleCopy" w="full" bg="emerald.400" h="5px" borderRadius="md" />
                </Box>
                <Flex justify="space-between" w="full">
                  <Text className="Shopping" fontSize="sm" fontWeight="medium" color="gray.800">Shopping</Text>
                  <Text className="378200" fontSize="sm" color="gray.800">1.378.200</Text>
                </Flex>
                <Box className="Rectangle" w="full" bg="gray.100" borderRadius="md">
                  <Box className="RectangleCopy" w="full" bg="emerald.400" h="5px" borderRadius="md" />
                </Box>
                <Flex justify="space-between" w="full">
                  <Text className="Housing" fontSize="sm" fontWeight="medium" color="gray.800">Housing</Text>
                  <Text className="500" fontSize="sm" color="gray.800">928.500</Text>
                </Flex>
                <Box className="Rectangle" w="full" bg="gray.100" borderRadius="md">
                  <Box className="RectangleCopy" w="full" bg="emerald.400" h="5px" borderRadius="md" />
                </Box>
                <Flex justify="space-between" w="full">
                  <Text className="Transportation" fontSize="sm" fontWeight="medium" color="gray.800">Transportation</Text>
                  <Text className="700" fontSize="sm" color="gray.800">420.700</Text>
                </Flex>
                <Box className="Rectangle" w="full" bg="gray.100" borderRadius="md">
                  <Box className="RectangleCopy" w="full" bg="emerald.400" h="5px" borderRadius="md" />
                </Box>
                <Flex justify="space-between" w="full">
                  <Text className="Vehicle" fontSize="sm" fontWeight="medium" color="gray.800">Vehicle</Text>
                  <Text className="000" fontSize="sm" color="gray.800">520.000</Text>
                </Flex>
                <Box className="Rectangle" w="full" bg="gray.100" borderRadius="md">
                  <Box className="RectangleCopy" w="full" bg="emerald.400" h="5px" borderRadius="md" />
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;