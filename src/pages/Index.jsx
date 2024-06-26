import { Container, Text, VStack, Box, Input, FormLabel, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [captureDate, setCaptureDate] = useState("");
  const [breathDuration, setBreathDuration] = useState("2s");

  const calculateLeadAge = (date) => {
    const captureDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today - captureDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    if (captureDate) {
      const leadAgeInDays = calculateLeadAge(captureDate);
      setBreathDuration(`${leadAgeInDays}s`);
    }
  }, [captureDate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box bg="white" p={6} rounded="md" shadow="md" width="100%">
        <Heading as="h2" size="lg" textAlign="center" mb={4}>Lead Information</Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <FormLabel htmlFor="first-name">First Name:</FormLabel>
            <Input id="first-name" placeholder="First Name" />
          </Box>
          <Box>
            <FormLabel htmlFor="last-name">Last Name:</FormLabel>
            <Input id="last-name" placeholder="Last Name" />
          </Box>
          <Box>
            <FormLabel htmlFor="phone">Phone Number:</FormLabel>
            <Input id="phone" placeholder="Phone Number" />
          </Box>
          <Box>
            <FormLabel htmlFor="source">Lead Source:</FormLabel>
            <Input id="source" placeholder="Lead Source" />
          </Box>
          <Box>
            <FormLabel htmlFor="salesman">Salesman Assigned:</FormLabel>
            <Input id="salesman" placeholder="Salesman Assigned" />
          </Box>
          <Box>
            <FormLabel htmlFor="rv">RV Unit Interested:</FormLabel>
            <Input id="rv" placeholder="RV Unit Interested" />
          </Box>
          <Box>
            <FormLabel htmlFor="capture-date">Capture Date:</FormLabel>
            <Input type="date" id="capture-date" value={captureDate} onChange={(e) => setCaptureDate(e.target.value)} />
          </Box>
          <Box textAlign="center">
            <Text>Sales Pipeline Stage:</Text>
            <Box
              id="stage-indicator"
              width="20px"
              height="20px"
              borderRadius="50%"
              bg="blue.500"
              mt={2}
              animation={`breathe ${breathDuration} infinite alternate`}
            />
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;