import React from "react"
import styled from "styled-components"

const Home = () => {
    return (
        <Wrapper >
            <TagsTop>  &lt;body/&gt;</TagsTop>
            <Tags>  &lt;h1&gt;</Tags>
            <Header>
                Hi,{<br />} I'm Yair,{<br />} web developer.
            </Header>
            &nbsp; &nbsp; <TagsEnd>  &lt;h1&gt;</TagsEnd>
            <AnimatWordsWrapper>
                <AnimatWords>Java script</AnimatWords>
        </AnimatWordsWrapper>
            <SecondHeader>
                Front End Developper / NodeJS Back End Developer
            </SecondHeader>
            <Contact>
                CONTACT ME
        </Contact>
        </Wrapper>
    )
}
export default Home


const AnimatWordsWrapper = styled.div`
display: none;
border: solid 1px #08fdd8;
height: 200px;
width: 25%;
text-align: center;
float: right;`

const AnimatWords = styled.h3`
/* text-align: center; */

animation-duration: 3s;
animation-name: slidein;
animation-iteration-count: infinite;
animation-direction: alternate;



@keyframes slidein {
  from {
    margin-right: 0%;
    width: 25%; 
  }

  to {
    margin-left: 38%;
    width: 100%;
  }
  }
`;

const Contact = styled.div`
border: solid 1px #08fdd8;

padding: 1rem 5rem;
text-align: center;
font-family: 'Open Sans', sans-serif;
position: fixed;
left: 10%;
letter-spacing: 4px;
font-size: 1.5rem;
animation: mymove 5s infinite;

@keyframes mymove {
  0% {color: #08fdd8;}
  50% {color: #FD0953;}
  100% {color: #08fdd8;}
}

 color: #08fdd8;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
/* position: fixed;
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


const TagsEnd = styled.div`
    color: #515152;
    display: inline-block;
    font-family: 'La Belle Aurore', cursive;
    position: relative;
        left: 5%;
        
`;


const Header = styled.h1`
    /* border: solid 1px white; */
    font-family: 'Fira Sans', sans-serif;
    position: relative;
    display: inline-block;
    left: 5%;
    /* width:auto; */
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

const SecondHeader = styled.h4`
  font-size: 1.5rem;
  color: #898282;
  font-weight: 100;
  letter-spacing: 0.2rem;
  /* margin: o; */
  position: relative;
  left: 5%;
  
  `

// const NavBar = styled.div`
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           font-size: 2rem;
//           background: lightskyblue;
//           padding: 3rem 2rem;
//           margin: 1rem;
//           border-radius: 0.8rem;
//         `;


// const text = "Hi, I'm Yair, web developer."
// let text1 = []
// for (let char of text) {
//     text1 += `<Letter ${char} />`        
// }
// {text1}
// console.log(text1)
