// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Image,
//   Button,
//   Link,
//   VStack,
//   Textarea,
//   Input,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
// import { FiDownload } from "react-icons/fi";
// import { DiCss3, DiReact, DiBootstrap } from "react-icons/di";
// import {
//   SiRedux,
//   SiReactrouter,
//   SiTailwindcss,
//   SiJest,
//   SiCypress,
//   SiMongodb,
//   SiExpress,
// } from "react-icons/si";
// import {
//   AiOutlineMail,
//   AiFillLinkedin,
//   AiOutlineGithub,
//   AiFillHtml5,
// } from "react-icons/ai";
// import picture from "../Picture/soumyanil.jpg";
// import { saveAs } from "file-saver";
// import bobbi_brown from "../BobbiBrownPicture/Screenshot.png";
// import buffer from "../BufferPicture/Screenshot.png";
// import MyLogo from "../Logos/MyLogo/My project-1.png";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

// const HomePage = () => {
//   const form = useRef();
//   const handleRedirect = () => {
//     saveAs(
//       "https://drive.google.com/file/d/1rCW1pG5UYUO8ggqoMbuSpqupnsBt8Rja/view?usp=sharing",
//       "resume.pdf"
//     );
//   };

//   const handleAboutClick = (e) => {
//     window.scrollTo({
//       top: 150,
//       behavior: "smooth",
//     });
//   };

//   const handleSkillsClick = (e) => {
//     window.scrollTo({
//       top: 700,
//       behavior: "smooth",
//     });
//   };

//   const handleProjClick = (e) => {
//     window.scrollTo({
//       top: 1200,
//       behavior: "smooth",
//     });
//   };

//   const handleContactClick = (e) => {
//     window.scrollTo({
//       top: 2000,
//       behavior: "smooth",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_xdi7aqq",
//         "template_4jgkctc",
//         form.current,
//         "6kijzHMnDVTSXfR4k"
//       )
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <Flex
//         justifyContent="space-between"
//         pt="20px"
//         boxShadow="1px 1px 3px #C5C6D0"
//         height="70px"
//       >
//         <Box mt="-10px" ml="30px">
//           <Image
//             src={MyLogo}
//             borderRadius="100%"
//             alt="my logo"
//             w="50px"
//             h="50px"
//           />
//         </Box>
//         <Flex w="50%" justifyContent="space-evenly">
//           <Box
//             color="#808080"
//             onClick={(e) => handleAboutClick(e)}
//             _hover={{
//               cursor: "pointer",
//               borderBottom: "3px solid",
//               borderColor: "#3BACB6",
//               color: "#3BACB6",
//             }}
//           >
//             <Text fontWeight="600" fontSize="xl">
//               About
//             </Text>
//           </Box>
//           <Box
//             color="#808080"
//             onClick={(e) => handleSkillsClick(e)}
//             _hover={{
//               cursor: "pointer",
//               borderBottom: "3px solid",
//               borderColor: "#3BACB6",
//               color: "#3BACB6",
//             }}
//           >
//             <Text fontWeight="600" fontSize="xl">
//               Skills
//             </Text>
//           </Box>
//           <Box
//             color="#808080"
//             onClick={(e) => handleProjClick(e)}
//             _hover={{
//               cursor: "pointer",
//               borderBottom: "3px solid",
//               borderColor: "#3BACB6",
//               color: "#3BACB6",
//             }}
//           >
//             <Text fontWeight="600" fontSize="xl">
//               Projects
//             </Text>
//           </Box>
//           <Box
//             color="#808080"
//             onClick={(e) => handleContactClick(e)}
//             _hover={{
//               cursor: "pointer",
//               borderBottom: "3px solid",
//               borderColor: "#3BACB6",
//               color: "#3BACB6",
//             }}
//           >
//             <Text fontWeight="600" fontSize="xl">
//               Contact
//             </Text>
//           </Box>
//         </Flex>
//       </Flex>
//       <Flex>
//         <Box mt="100px" w="70%" pt="30px" pl="50px">
//           <Box textAlign="justify">
//             <Text letterSpacing="0.8px" fontSize="5xl">
//               <Flex gap="10px">
//                 Hi,
//                 <img
//                   width="50px"
//                   src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
//                   alt="gesture"
//                 />
//               </Flex>
//             </Text>
//             <Text lineHeight="80px" fontSize="4xl">
//               Welcome to my page, I'm
//               <span
//                 style={{
//                   color: "#2F8F9D",
//                   fontSize: "50px",
//                   fontWeight: "600",
//                   marginLeft: "10px",
//                 }}
//               >
//                 Soumyanil Podder
//               </span>
//             </Text>
//             <Text lineHeight="55px" fontSize="3xl">
//               I'm a Full Stack Web Developer, From Kolkata, India.
//             </Text>
//             <Text lineHeight="40px" textAlign="justify" fontSize="xl">
//               I am passionate about building UI of Websites. When I am not
//               coding, I am either playing video games or reading a book or
//               learning new a technology.
//             </Text>
//             <Button
//               onClick={handleRedirect}
//               mt="30px"
//               colorScheme="teal"
//               variant="outline"
//             >
//               <FiDownload />
//               Resume
//             </Button>
//           </Box>
//         </Box>
//         <Box mt="100px" ml="80px" pt="10px" pl="20px" w="300px" h="280px">
//           <Image borderRadius="10%" h="100%" src={picture} alt="soumyanil" />
//         </Box>
//       </Flex>

//       <Box mt="150px">
//         <Text
//           letterSpacing="0.8px"
//           textAlign="center"
//           fontWeight="600"
//           fontSize="4xl"
//         >
//           Skills
//         </Text>
//         <Grid
//           mt="30px"
//           templateRows="repeat(4,1fr)"
//           templateColumns="repeat(4,1fr)"
//           gap="6"
//         >
//           <GridItem m="auto">
//             <Box>
//               <AiFillHtml5 size={50} />
//               <Text textAlign="center">HTML5</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <DiCss3 size={50} />
//               <Text textAlign="center">CSS3</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <IoLogoJavascript size={50} />
//               <Text textAlign="center">JavaScript</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <IoLogoNodejs size={50} />
//               <Text textAlign="center">Node JS</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <DiReact size={50} />
//               <Text textAlign="center">React JS</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiRedux size={50} />
//               <Text textAlign="center">Redux</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiReactrouter size={50} />
//               <Text textAlign="center">React Router</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiTailwindcss size={50} />
//               <Text textAlign="center">Tailwind CSS</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <DiBootstrap size={50} />
//               <Text textAlign="center">BootStrap</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiJest size={50} />
//               <Text textAlign="center">Jest</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiCypress size={50} />
//               <Text textAlign="center">Cypress</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <AiOutlineGithub size={50} />
//               <Text textAlign="center">Github</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiMongodb size={50} />
//               <Text textAlign="center">MongoDB</Text>
//             </Box>
//           </GridItem>
//           <GridItem m="auto">
//             <Box>
//               <SiExpress size={50} />
//               <Text textAlign="center">ExpressJS</Text>
//             </Box>
//           </GridItem>
//         </Grid>
//       </Box>
//       <Box mt="150px">
//         <Text fontSize="4xl" textAlign="center" fontWeight="600">
//           Projects
//         </Text>
//         <Flex
//           w="80%"
//           m="auto"
//           mt="50px"
//           alignItems="center"
//           justifyContent="space-between"
//           gap="50px"
//         >
//           <Box>
//             <Link
//               href="https://wonderful-piroshki-728bef.netlify.app/#"
//               target="_blank"
//             >
//               <Image w="350px" h="250px" src={bobbi_brown} alt="bobbi-brown" />
//             </Link>
//             <Flex mt="30px" justifyContent="center" gap="30px">
//               <Text fontSize="xl" fontWeight="600" textAlign="center">
//                 Bobbi Brown Clone
//               </Text>
//               <Link
//                 href="https://github.com/soumyanil22/Group_project_bobbi_brown"
//                 target="_blank"
//               >
//                 <Button w="50px" h="30px" colorScheme="black" variant="ghost">
//                   <Image
//                     w="20px"
//                     h="20px"
//                     src="https://iconape.com/wp-content/png_logo_vector/github.png"
//                     alt="Github"
//                   />
//                 </Button>
//               </Link>
//             </Flex>
//           </Box>
//           <Box>
//             <Link href="https://bufferr.netlify.app" target="_blank">
//               <Image w="350px" h="250px" src={buffer} alt="bewakoof" />
//             </Link>
//             <Flex mt="30px" justifyContent="center" gap="30px">
//               <Text fontSize="xl" fontWeight="600" textAlign="center">
//                 Buffer Clone
//               </Text>
//               <Link
//                 href="https://github.com/soumyanil22/painful-harbor-5807"
//                 target="_blank"
//               >
//                 <Button w="50px" h="30px" colorScheme="black" variant="ghost">
//                   <Image
//                     w="20px"
//                     h="20px"
//                     src="https://iconape.com/wp-content/png_logo_vector/github.png"
//                     alt="Github"
//                   />
//                 </Button>
//               </Link>
//             </Flex>
//           </Box>
//         </Flex>
//       </Box>
//       <Box backgroundColor="gray.100" borderRadius="30px" h="650px" mt="300px">
//         <Text
//           mb="20px"
//           textDecoration="underline"
//           fontSize="3xl"
//           textAlign="center"
//           fontWeight="600"
//           pt="30px"
//         >
//           CONTACT ME
//         </Text>
//         <VStack>
//           <form ref={form} onSubmit={handleSubmit}>
//             <label style={{ fontSize: "18px" }} htmlFor="name">
//               Name
//             </label>
//             <br />
//             <Input
//               mt="10px"
//               mb="10px"
//               w="300px"
//               id="name"
//               name="name"
//               type="text"
//             />
//             <br />
//             <label style={{ fontSize: "18px" }} htmlFor="email">
//               Email
//             </label>
//             <br />
//             <Input
//               mt="10px"
//               mb="10px"
//               w="300px"
//               id="email"
//               name="email"
//               type="text"
//             />
//             <Textarea mt="10px" name="message" />
//             <Button variant="outline" w="100px" mt="10px" type="submit">
//               Send
//             </Button>
//           </form>
//         </VStack>
//         <br />
//         <br />
//         <hr
//           style={{
//             height: "2px",
//             width: "50%",
//             margin: "auto",
//             color: "grey",
//             backgroundColor: "grey",
//           }}
//         />
//         <Box m="auto" mt="30px" w="80%">
//           <Text fontSize="xl" textAlign="center">
//             You can also reach out to me at:
//           </Text>
//           <Flex gap="10px" m="auto" mt="10px" justifyContent="center">
//             <Box>
//               <Link href="mailto:soumyanil22@gmail.com">
//                 <AiOutlineMail size={30} />
//               </Link>
//             </Box>
//             <Box>
//               <Link
//                 href="https://www.linkedin.com/in/soumyanil-podder-769008165/"
//                 target="_blank"
//               >
//                 <AiFillLinkedin size={30} />
//               </Link>
//             </Box>
//             <Box>
//               <Link href="https://github.com/soumyanil22" target="_blank">
//                 <AiOutlineGithub size={30} />
//               </Link>
//             </Box>
//           </Flex>
//           <Flex mt="20px" justifyContent="center">
//             <Text fontSize="lg">Phone: 9748604906</Text>
//           </Flex>
//           <Flex justifyContent="center">
//             <Text fontSize="lg">Email: soumyanil22@gmail</Text>
//           </Flex>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default HomePage;

// // Padding from left = 50px
// // TODO: Change project section to grid later
