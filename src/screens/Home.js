import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import composite from "../assets/composite.png";

const Heading = styled.h1`
	text-align: center;
`;

const Container = styled.div`
	width: 85%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AnchorWrapper = styled.a`
	:link {
		text-decoration: none;
	}

	:visited {
		color: rgb(107, 3, 252);
		text-decoration: none;
	}
`;

const ImageContainer = styled.div`
	overflow: hidden;
`;

const Image = styled.div`
	background-image: url(${composite});
	height: 400px;
	width: 400px;
	transition: 0.2s;

	:hover {
		transform: scale(1.5);
		filter: blur(2px);
	}
`;

const ProjectLabel = styled.p`
	font-weight: 600;
	font-size: 20px;
	color: rgb(107, 3, 252);
	text-align: center;
`;

const SocialContainer = styled.div`
	width: 25%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Home = () => {
	return (
		<section>
			<Heading>Projects</Heading>
			<Container>
				<AnchorWrapper href="gweiface.com">
					<ImageContainer>
						<Image></Image>
					</ImageContainer>
					<ProjectLabel>
						gweiFace NFT{" "}
						<FontAwesomeIcon icon={faExternalLinkAlt} />
					</ProjectLabel>
				</AnchorWrapper>
			</Container>
			<Container>
				<a href="https://discord.gg/T5yTHunCfW">
					<FontAwesomeIcon
						icon={["fab", "discord"]}
						style={{
							fontSize: "35px",
							margin: "0 5px",
							color: "rgb(114, 137, 217)",
						}}
					/>
				</a>
				<a href="https://twitter.com/gweiFaceNFT">
					<FontAwesomeIcon
						icon={["fab", "twitter-square"]}
						style={{
							fontSize: "35px",
							margin: "0 5px",
							color: "rgb(29, 161, 242)",
						}}
					/>
				</a>
			</Container>
			<p style={{ textAlign: "right", paddingRight: "30px" }}>
				© 2021 IndexLabs LLC
			</p>
		</section>
	);
};

export default Home;
