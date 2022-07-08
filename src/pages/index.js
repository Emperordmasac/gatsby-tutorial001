import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
    return (
        <Layout
            title={`Home Page`}
            content={`I'm making this by following the Gatsby Tutorial.`}
        >
            <h1>Welcome to my Gatsby site!</h1>
        </Layout>
    );
};

export default IndexPage;
