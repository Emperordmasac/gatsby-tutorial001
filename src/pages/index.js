import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout
            title={`Home Page`}
            content={`I'm making this by following the Gatsby Tutorial.`}
        >
            <h1>Welcome to my Gatsby site!</h1>
            <StaticImage src="../images/Baby.png" alt="bla bla bla" />
        </Layout>
    );
};

export default IndexPage;
