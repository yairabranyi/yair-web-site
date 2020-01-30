import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <Wrapper>
            <TagsTop>  &lt;body/&gt;</TagsTop>
            <Tags>  &lt;h1&gt;</Tags>
            <Header>
                About me
         </Header>
            <Tags>  &lt;h1&gt;</Tags>
            <TextWraper>
                <p>
                    Pationate about web development and learning new web technologies.
                    problem solver combined with a "can do" aproach.
                </p>
                <p>
                    Well-organised person, independent employee with high attention to detail.
                    Team player, pleasent person thant enjoy working with peuple and a quick learner.
                </p>
                <p>
                    Fan of outdoor activities, enjoy cycling and jogging for years.
                    A family person, housband and father for four kids.
                </p>

            </TextWraper>
        </Wrapper>
    )
}


export default About

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 30%;
    position: fixed;
    left:10%;
    top: 5%; */
    display: inline-block;
    
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

const TextWraper = styled.div`
    position: relative;
    /* left: 5%; */
    padding: 3rem;
    font-size: 2rem
    `;
    


const Header = styled.h1`
    /* border: solid 1px white; */
    font-family: 'Fira Sans', sans-serif;
    font-size: 4.5rem;
    margin: 0;
    position: relative;
    display: inline-block;
    left: 5%;
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

