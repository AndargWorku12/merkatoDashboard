import {
    Box,
    Stack,
    Container,
    Text,
    Heading,
    Avatar,
    Button,
    Link,
    Divider,
    Flex,
  } from '@chakra-ui/react';
  
  const Signup = () => {
    return (
      <Box 
      paddingTop="12"
      paddingBottom="12"
      maxWidth="7xl"
      mx="auto"
      className="showcase-qkda03"
      >
        <Flex
        className="showcase-1idc0c1"
        direction="row"
        gap="12"
        >
          <Box className="showcase-13pmxen"   display="flex" flex="1 1 0%">
            <Container className="showcas-49waov"  
             paddingTop="8"
  paddingBottom="8"
  paddingLeft="10"
  paddingRight="10"
  background="bg.surface"
  boxShadow="md"
  borderRadius="xl"  >
              <Flex className="showcase-18936vg"
               direction="column"
               gap="8">
                <Flex
                align="center"
                direction="column"
                gap="6"
                >
                  <svg
                    viewBox="0 0 89 89"
                    xmlns="http://www.w3.org/2000/svg"
                    className="showcase-1yep4c0"
                  >
                    {/* Add your SVG path data here */}
                  </svg>
                  <Stack className="showcase-67omth">
                    <Heading className="showcase-186mwu8">Create an account</Heading>
                    <Text className="showcase-1xrpz2b">
                      Already have an account? <Link className="showcase-1459x9" href="#">
                        Log in
                      </Link>
                    </Text>
                  </Stack>
                </Flex>
                <Stack className="showcase-ahthbn">
                  {/* Form Controls and Input Fields */}
                  <Stack className="showcase-1kxonj9" role="group">
                    {/* Replace with Chakra UI Form Components */}
                    <label htmlFor="name" className="showcase-yu9y1j">
                      Name
                      <span className="showcase-1tfjd1n">*</span>
                    </label>
                    <input type="text" id="name"
                    //  required="true" 
                     aria-required="true" className="showcase-1pmfxiu" />
                  </Stack>
                  {/* Repeat the above for email and password fields */}
                  <Button type="button" className="showcase-18uf5hq">
                    Create Account
                  </Button>
                  <Stack className="showcase-1igwmid">
                    <Divider orientation="horizontal" className="showcase-ip97q7" />
                    <Text className="showcase-fnhcl3">or sign up with</Text>
                    <Divider orientation="horizontal" className="showcase-ip97q7" />
                  </Stack>
                  {/* Social Login Buttons */}
                  <Stack className="chakra-button__group showcase-1v82kfi" data-orientation="horizontal">
                    {/* Replace with Chakra UI Button Components */}
                    <Button type="button" className="showcase-oyx1g3">
                      <span className="showcase-idkz9h">Sign in with Google</span>
                      <svg viewBox="0 0 24 24" focusable="false" className="showcase-onkibi">
                        {/* Add Google icon SVG data here */}
                      </svg>
                    </Button>
                    {/* Repeat the above for Twitter and GitHub */}
                  </Stack>
                </Stack>
              </Flex>
            </Container>
          </Box>
        </Flex>
        <Container className="showcase-129mlto">
          <Stack className="showcase-abvxnf">
            <Stack className="showcase-1r0eoou">
              {/* Add testimonial content here */}
            </Stack>
            <Stack className="showcase-o51fhk">
              <Avatar className="showcase-bs24kp" src="https://avatars.githubusercontent.com/u/20296626?v=4"
              //  alt="Simon Holzmayer"
               >
                {/* You can add a fallback avatar icon or text here */}
              </Avatar>
              <Stack className="showcase-agwi45">
                <Text className="showcase-yyrevg">Simon Holzmayer</Text>
                <Text className="showcase-vluom6">simon@chakra-ui.com</Text>
              </Stack>
              <Stack className="showcase-7zp8no">
                {/* Social Media Icons */}
                {/* Replace with Chakra UI Icon Components */}
                {[...Array(4)].map((_, index) => (
                  <svg key={index} viewBox="0 0 576 512" focusable="false" className="showcase-1mju1or">
                    {/* Add social media icon SVG data here */}
                  </svg>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  export default Signup;
  