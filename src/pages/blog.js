import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Blog = ({ data }) => {
    return (
        <Layout
            title={`Blog Page`}
            content={`My cool articles will be posted here`}
        >
            <ul style={ulStyles}>
                {data.allFile.nodes.map((node) => (
                    <li style={liStyles} key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

const ulStyles = {
    display: "flex",
};

const liStyles = {
    listStyle: "none",
    color: "grey",
    marginLeft: "15px",
    fontWeight: "700",
    fontSize: "25px",
};

export default Blog;
