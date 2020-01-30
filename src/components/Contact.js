import React from "react"
import styled from "styled-components"

const Contact = () => {
    return (
        <Wrapper >
            <TagsTop>  &lt;body/&gt;</TagsTop>
            <Tags>  &lt;h1&gt;</Tags>
            <Header >
              Contact me
        </Header>
            <Tags>  &lt;h1&gt;</Tags>
        </Wrapper>
    )
}

export default Contact

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