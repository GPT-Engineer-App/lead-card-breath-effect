import { Container, Text, VStack, Box, Input, FormLabel, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const LeadCard = ({ lead }) => {
  const [breathDuration, setBreathDuration] = useState("2s");

  const calculateLeadAge = (date) => {
    const captureDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today - captureDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    if (lead.captureDate) {
      const leadAgeInDays = calculateLeadAge(lead.captureDate);
      setBreathDuration(`${leadAgeInDays}s`);
    }
  }, [lead.captureDate]);

  return (
    <Box bg="white" p={6} rounded="md" shadow="md" width="100%">
      <Heading as="h3" size="md" textAlign="center" mb={4}>Lead Information</Heading>
      <VStack spacing={4} align="stretch">
        <Box>
          <FormLabel htmlFor="first-name">First Name:</FormLabel>
          <Input id="first-name" placeholder="First Name" value={lead.firstName} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="last-name">Last Name:</FormLabel>
          <Input id="last-name" placeholder="Last Name" value={lead.lastName} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="phone">Phone Number:</FormLabel>
          <Input id="phone" placeholder="Phone Number" value={lead.phone} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="source">Lead Source:</FormLabel>
          <Input id="source" placeholder="Lead Source" value={lead.source} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="salesman">Salesman Assigned:</FormLabel>
          <Input id="salesman" placeholder="Salesman Assigned" value={lead.salesman} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="rv">RV Unit Interested:</FormLabel>
          <Input id="rv" placeholder="RV Unit Interested" value={lead.rv} readOnly />
        </Box>
        <Box>
          <FormLabel htmlFor="capture-date">Capture Date:</FormLabel>
          <Input type="date" id="capture-date" value={lead.captureDate} readOnly />
        </Box>
        <Box textAlign="center">
          <Text>Sales Pipeline Stage:</Text>
          <Box
            id="stage-indicator"
            width="20px"
            height="20px"
            borderRadius="50%"
            bg="neon.500"
            mt={2}
            animation={`breathe ${breathDuration} infinite alternate`}
          />
        </Box>
      </VStack>
    </Box>
  );
};

const SalesmanDashboard = () => {
  const [leads, setLeads] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      source: "Website",
      salesman: "Jane Smith",
      rv: "RV Model X",
      captureDate: "2023-09-01",
    },
    // Add more leads as needed
  ]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>Salesman Dashboard</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
        {leads.map((lead, index) => (
          <LeadCard key={index} lead={lead} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SalesmanDashboard;