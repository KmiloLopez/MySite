import styled from "styled-components"; 

export const SharedContainer = styled.header `
    display: flex;
    justify-content: space-between;
  
    flex-direction: column;
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    height:50px;
    z-index: 50;//making sure background doesn't affect NavBar interactivity
    
     
`
export const MainContainer = styled.div`
    
`