import Container from "@/components/themes/Common/Container";
import NexPressFooter from "@/components/themes/Common/Footer/Footer.component";
import NexPressNavbar from "@/components/themes/Common/Header/NavBar.component";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";

// Import the NodeByUri query here

export default function NPBlogHomePage() {
    return (
        <>
            <NexPressNavbar />
            <Container>
                <HeroPost />
                <MoreStories />
            </Container>

            <NexPressFooter />
        </>
    );
}
