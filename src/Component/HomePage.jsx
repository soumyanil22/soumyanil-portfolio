import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, Link, VStack } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import picture from "../Picture/soumyanil.jpg";
import { saveAs } from "file-saver";
import bobbi_brown from "../BobbiBrownPicture/Screenshot.png";
import bewakoof from "../BewakoofPicture/CloneScreenshot.png";
import emailjs from "@emailjs/browser";

const HomePage = () => {
  // const [email, setEmail] = useState();
  // const [name, setName] = useState();
  // const [data, setData] = useState({});
  const handleRedirect = () => {
    saveAs(
      "https://drive.google.com/file/d/1rCW1pG5UYUO8ggqoMbuSpqupnsBt8Rja/view?usp=sharing",
      "resume.pdf"
    );
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubmit = () => {
  //   let data = { email, name };
  //   setData(data);
  //   // emailjs.init("6kijzHMnDVTSXfR4k");
  //   if (data) {
  //     console.log("hello");
  //     emailjs.sendForm(
  //       "service_xdi7aqq",
  //       "template_4jgkctc",
  //       data,
  //       "6kijzHMnDVTSXfR4k"
  //     );
  //   }
  // };

  return (
    <>
      <Box pt="20px" boxShadow="1px 1px 3px #C5C6D0" height="70px">
        <Flex ml="50%" justifyContent="space-evenly">
          <Box
            color="#808080"
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid",
              borderColor: "#3BACB6",
              color: "#3BACB6",
            }}
          >
            <Text fontWeight="600" fontSize="xl">
              About
            </Text>
          </Box>
          <Box
            color="#808080"
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid",
              borderColor: "#3BACB6",
              color: "#3BACB6",
            }}
          >
            <Text fontWeight="600" fontSize="xl">
              Skills
            </Text>
          </Box>
          <Box
            color="#808080"
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid",
              borderColor: "#3BACB6",
              color: "#3BACB6",
            }}
          >
            <Text fontWeight="600" fontSize="xl">
              Projects
            </Text>
          </Box>
          <Box
            color="#808080"
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid",
              borderColor: "#3BACB6",
              color: "#3BACB6",
            }}
          >
            <Text fontWeight="600" fontSize="xl">
              Contact
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex>
        <Box mt="100px" w="70%" pt="30px" pl="50px">
          <Box textAlign="justify">
            <Text letterSpacing="0.8px" fontSize="5xl">
              <Flex gap="10px">
                Hi,
                <img
                  width="50px"
                  src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  alt="gesture"
                />
              </Flex>
            </Text>
            <Text lineHeight="80px" fontSize="4xl">
              Welcome to my page, I'm
              <span
                style={{
                  color: "#2F8F9D",
                  fontSize: "50px",
                  fontWeight: "600",
                  marginLeft: "10px",
                }}
              >
                Soumyanil Podder
              </span>
            </Text>
            <Text lineHeight="55px" fontSize="3xl">
              I'm a Full Stack Web Developer, From Kolkata, India.
            </Text>
            <Text lineHeight="40px" textAlign="justify" fontSize="xl">
              I am passionate about building UI of Websites. When I am not
              coding, I am either playing video games or reading a book or
              learning new a technology.
            </Text>
            <Button
              onClick={handleRedirect}
              mt="30px"
              colorScheme="teal"
              variant="outline"
            >
              <FiDownload />
              Resume
            </Button>
          </Box>
        </Box>
        <Box mt="100px" ml="80px" pt="10px" pl="20px" w="300px" h="280px">
          <Image borderRadius="100%" h="100%" src={picture} alt="soumyanil" />
        </Box>
      </Flex>

      <Box mt="200px">
        <Text
          letterSpacing="0.8px"
          textAlign="center"
          fontWeight="600"
          fontSize="4xl"
        >
          Skills
        </Text>
        <Flex justifyContent="center" alignItems="center" gap="50px" mt="40px">
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
              alt="html5"
            />
            <span style={{ marginTop: "10px" }}>HTML5</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"
              alt="CSS3"
            />
            <span style={{ marginTop: "10px" }}>CSS3</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png"
              alt="JavaScript"
            />
            <span style={{ marginTop: "10px" }}>JavaScript</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png"
              alt="Node JS"
            />
            <span style={{ marginTop: "10px" }}>Node JS</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              alt="React JS"
            />
            <span style={{ marginTop: "10px" }}>React JS</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
              alt="Redux"
            />
            <span style={{ marginTop: "10px" }}>Redux</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png"
              alt="React Router"
            />
            <span style={{ marginTop: "10px" }}>React Router</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              alt="Tailwind CSS"
            />
            <span style={{ marginTop: "10px" }}>Tailwind CSS</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
              alt="Bootstrap"
            />
            <span style={{ marginTop: "10px" }}>BootStrap</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
              alt="Jest"
            />
            <span style={{ marginTop: "10px" }}>Jest</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://iconape.com/wp-content/files/gj/370774/svg/370774.svg"
              alt="Cypress"
            />
            <span style={{ marginTop: "10px" }}>Cypress</span>
          </Box>
          <Box textAlign="center">
            <Image
              w="60px"
              src="https://iconape.com/wp-content/png_logo_vector/github.png"
              alt="Github"
            />
            <span style={{ marginTop: "10px" }}>Github</span>
          </Box>
        </Flex>
      </Box>
      <Box mt="150px">
        <Text fontSize="4xl" textAlign="center" fontWeight="600">
          Projects
        </Text>
        <Flex
          mt="50px"
          alignItems="center"
          justifyContent="space-evenly"
          gap="50px"
        >
          <Box>
            <Link
              href="https://wonderful-piroshki-728bef.netlify.app/#"
              target="_blank"
            >
              <Image w="350px" h="250px" src={bobbi_brown} alt="bobbi-brown" />
            </Link>
            <Flex mt="30px" justifyContent="center" gap="30px">
              <Text fontSize="xl" fontWeight="600" textAlign="center">
                Bobbi Brown Clone
              </Text>
              <Link
                href="https://github.com/soumyanil22/Group_project_bobbi_brown"
                target="_blank"
              >
                <Button w="50px" h="30px" colorScheme="black" variant="ghost">
                  <Image
                    w="20px"
                    h="20px"
                    src="https://iconape.com/wp-content/png_logo_vector/github.png"
                    alt="Github"
                  />
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box>
            <Link href="https://bewakoof-project.netlify.app/" target="_blank">
              <Image w="350px" h="250px" src={bewakoof} alt="bewakoof" />
            </Link>
            <Flex mt="30px" justifyContent="center" gap="30px">
              <Text fontSize="xl" fontWeight="600" textAlign="center">
                Bewakoof Clone
              </Text>
              <Link
                href="https://github.com/soumyanil22/illegal-mark-7169/tree/master/bewakoof-clone"
                target="_blank"
              >
                <Button w="50px" h="30px" colorScheme="black" variant="ghost">
                  <Image
                    w="20px"
                    h="20px"
                    src="https://iconape.com/wp-content/png_logo_vector/github.png"
                    alt="Github"
                  />
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box backgroundColor="gray.100" borderRadius="30px" h="600px" mt="300px">
        <Text
          textDecoration="underline"
          fontSize="3xl"
          textAlign="center"
          fontWeight="600"
          pt="30px"
        >
          CONTACT ME
        </Text>
        <VStack>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            <label htmlFor="email">Email</label>
            <input type="text" />
            <input type="text" placeholder="Enter your message" />
            <button style={{ height: "300px" }} type="submit">
              Send
            </button>
          </form>
        </VStack>
      </Box>
    </>
  );
};

export default HomePage;

// Padding from left = 50px
// TODO: Change project section to grid later
