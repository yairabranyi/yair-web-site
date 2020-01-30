import React from "react"
import styled from "styled-components"

const Skils = () => {
    return (
        <Wrapper >
            <TagsTop>  &lt;body/&gt;</TagsTop>
            <Tags>  &lt;h1&gt;</Tags>
            <Header >
                Skils
            </Header>
            <Tags>  &lt;h1&gt;</Tags>
            <TextWraper>
                <p>
                    The main area of my work and enjoyment is Front end development 
                    which is the client side of the web.
                    Planning and developing small to mediume Web sites and Application.
                </p>
                <p>
                    My front end tools HTML CSS JS combined with the most advanced technologies as 
                    React, Flexbox, Grid, style components and Bootstrap gives ausom results!
                </p>
                <p>
                    At the back end technologies as Nodejs, Express, MongoDB and Mongoose 
                    gives the most efficiant best results.
                </p>

            </TextWraper>
        </Wrapper>
    )

}
export default Skils


const Wrapper = styled.div`
display: flex;
flex-direction: column;
/* position: fixed;
left:10%;
top: 5%; */
display: inline-block;

`;


const Header = styled.h1`
    /* border: solid 1px white; */
    font-family: 'Fira Sans', sans-serif;
    position: relative;
    display: inline-block;

    left: 5%;
    /* top: 15%; */
    font-size: 4.5rem;
    margin: 0;
    color: #08fdd8;
    transition: 0.3s;
    :hover {
        background-color: #08fdd8;
        padding: 2rem;
        border-radius: 5%;
        color: black; 
        font-size: 5rem;
		/* color: green; */
    }
`;

const TextWraper = styled.div`
    position: relative;
    /* left: 5%; */
    padding: 3rem;
    font-size: 2rem
    `;

const TagsTop = styled.div`
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    `;

const Tags = styled.div`
        color: #515152;
        font-family: 'La Belle Aurore', cursive;
        position: relative;
        left: 5%;
       
    `;