import { Container, Text, VStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const LeadCard = ({ lead, color, breathDuration }) => {
  return (
    <Box bg={color} p={4} rounded="md" shadow="md" width="100%">
      <Heading as="h3" size="md" textAlign="center" mb={2}>Lead Information</Heading>
      <VStack spacing={2} align="stretch">
        <Box>
          <Text fontWeight="bold">First Name:</Text>
          <Text>{lead.firstName}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Last Name:</Text>
          <Text>{lead.lastName}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Phone Number:</Text>
          <Text>{lead.phone}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Lead Source:</Text>
          <Text>{lead.source}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Salesman Assigned:</Text>
          <Text>{lead.salesman}</Text>
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
      color: "white",
      breathDuration: "2s"
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      phone: "987-654-3210",
      source: "Referral",
      salesman: "Bob Brown",
      rv: "RV Model Y",
      captureDate: "2023-09-05",
      color: "lightblue",
      breathDuration: "3s"
    },
    {
      firstName: "Michael",
      lastName: "Smith",
      phone: "555-123-4567",
      source: "Social Media",
      salesman: "Sara Connor",
      rv: "RV Model Z",
      captureDate: "2023-09-10",
      color: "lightgreen",
      breathDuration: "4s"
    },
    // Add more leads as needed
  ]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>Salesman Dashboard</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={5} width="100%">
        {leads.map((lead, index) => (
          <LeadCard key={index} lead={lead} color={lead.color} breathDuration={lead.breathDuration} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SalesmanDashboard;