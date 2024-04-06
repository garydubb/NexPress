import Container from "@/components/themes/Common/Container";
import NexPressFooter from "@/components/themes/Common/Footer/Footer.component";
import NexPressNavbar from "@/components/themes/Common/Header/NavBar.component";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";
import PostHeader from "./components/post-header";
import PostBody from "./components/post-body";
import SectionSeparator from "./components/section-separator";

// Import the NodeByUri query here

export default function NPBlogHomePage() {
  
  
    return (
        <>
            <NexPressNavbar />
            <Container>
                <article className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <PostHeader />
                    <PostBody  /> 
                </article>
            </Container>
            <NexPressFooter />
        </>
    );
}
