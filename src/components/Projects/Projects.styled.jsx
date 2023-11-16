import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;

    width: 100%;
    height: 250px;
    //background-color: aqua;
    border: 2px solid aqua;
    border-radius: 5px;
    overflow: hidden;
`;
export const ImgStyle = styled.img`
    width: 30%;
    height: auto;
`;
export const ProjectsMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    gap: 10px;
    flex-direction: column;
`;
export const ProjectDescriptionContainer = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    
    width: 100%;
    box-sizing: border-box;
    
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 10px 10px 10px;
    overflow: hidden;
    overflow-wrap: break-word;
`;
export const ProjectDescription = styled.p`
    font-size: 1em;
    max-width: 100%;
   
`;
