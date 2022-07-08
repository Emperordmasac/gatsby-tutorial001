import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const pageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px",
};

const textStyle = {
    paddingBottom: "10px",
};

const buttonStyle = {
    backgroundColor: "#fff",
    color: "#0a0a23",
    border: "1px solid #0a0a23",
    borderRadius: "10px",
    padding: "10px 40px",
    fontSize: "15px",
    textDecoration: "none",
    marginLeft: "10px",
    alignItems: "center",
};

const headerStyle = {
    marginBottom: "25px",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "grey",
};

const links = [
    {
        url: "/",
        description: "Home",
    },
    {
        url: "/about",
        description: "About Us",
    },
    {
        url: "/blog",
        description: "Blog Post",
    },
];

const Layout = ({ title, children, content }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div style={pageStyles}>
            <title>
                {title} | {data.site.siteMetadata.title}
            </title>
            <header style={headerStyle}>{data.site.siteMetadata.title}</header>
            <nav>
                {links.map((link) => (
                    <Link style={buttonStyle} to={link.url}>
                        {link.description}
                    </Link>
                ))}
            </nav>
            <main style={pageStyles}>
                <h1>{title}</h1>
                {children}
                <p style={textStyle}>{content}</p>
            </main>
        </div>
    );
};

export default Layout;
