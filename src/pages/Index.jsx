import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Header />
        <MainSection />
        <ServicesOverview />
        <TestimonialsCarousel />
        <ContactUsSection />
        <Footer />
      </Flex>
    </Container>
  );
};

const Header = () => {
  return (
    <Box as="header" w="full" p={4} bg="blue.500" color="white" position="fixed" zIndex="banner">
      <Flex justify="space-between" align="center" maxW="container.xl" m="0 auto">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBcXVhRml4JTIwbG9nb3xlbnwwfHx8fDE3MTU0NDQ3Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AquaFix Logo" h="50px" />
        <Stack direction="row" spacing={4}>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact Us</Link>
          <Button colorScheme="teal" variant="solid">
            Request a Quote
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

const MainSection = () => {
  return (
    <Flex align="center" justify="center" bgImage="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVwYWlyJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTU0NDQ3Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="100vh" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Professional Pool Repair Services
        </Heading>
        <Text fontSize="xl">High-quality, reliable, and timely pool repair and maintenance.</Text>
        <Button colorScheme="teal" size="lg">
          Request a Quote
        </Button>
      </VStack>
    </Flex>
  );
};

const ServicesOverview = () => {
  return (
    <Box id="services" p={8}>
      <Heading as="h2" size="lg" mb={4}>
        Our Services
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <ServiceCard title="Pool Cleaning" description="Comprehensive cleaning services to keep your pool sparkling." icon={FaUser} />
        <ServiceCard title="Repairs" description="Expert repair services to fix any issue, big or small." icon={FaUser} />
        <ServiceCard title="Equipment Installation" description="Professional installation of pumps, heaters, and more." icon={FaUser} />
      </Stack>
    </Box>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <VStack bg="gray.100" p={4} borderRadius="md" boxShadow="md">
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight="bold">{title}</Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

const TestimonialsCarousel = () => {
  return (
    <Box id="testimonials" p={8} bg="blue.100">
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        What Our Customers Say
      </Heading>
      <Stack direction="row" spacing={4} overflow="auto">
        <TestimonialCard author="John Doe" content="AquaFix did a fantastic job with our pool! Highly recommend their professional service." />
        <TestimonialCard author="Jane Smith" content="Very satisfied with the timely repairs done. Great team!" />
        <TestimonialCard author="Emily Johnson" content="Professional and reliable - a top-notch pool service company." />
      </Stack>
    </Box>
  );
};

const TestimonialCard = ({ author, content }) => {
  return (
    <VStack bg="white" p={4} borderRadius="md" boxShadow="md" minW="300px">
      <Text fontStyle="italic">"{content}"</Text>
      <Text fontWeight="bold" alignSelf="flex-end">
        - {author}
      </Text>
    </VStack>
  );
};

const ContactUsSection = () => {
  return (
    <Box id="contact" p={8}>
      <Heading as="h2" size="lg" mb={4}>
        Contact Us
      </Heading>
      <Stack as="form" spacing={4}>
        <Input placeholder="Name" icon={<FaUser />} />
        <Input placeholder="Email" type="email" icon={<FaEnvelope />} />
        <Input placeholder="Phone" type="tel" icon={<FaPhone />} />
        <Input placeholder="Message" as="textarea" icon={<FaCommentDots />} />
        <Button type="submit" colorScheme="teal">
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="blue.500" color="white">
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} AquaFix. All rights reserved.</Text>
        <Stack direction="row" spacing={4}>
          <Icon as={FaFacebook} />
          <Icon as={FaInstagram} />
          <Icon as={FaTwitter} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
