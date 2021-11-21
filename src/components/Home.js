    import React from 'react'
    import styled from "styled-components"
    import Section from './Section'
    
    function Home() {
        return (
            <Container>
                <Section
                        title="Model-S"
                        description= "Order Online for Touchless Delivery"
                        backgroundImg="model-s.jpg"
                        leftBtnText="Cusom Order"
                        rightBtnText="Existing inventory"
                />
                <Section
                        title="Model-Y"
                        description= "Order Online for Touchless Delivery"
                        backgroundImg="model-y.jpg"
                        leftBtnText="Cusom Order"
                        rightBtnText="Existing inventory"
                />
                <Section
                        title="Model-3"
                        description= "Order Online for Touchless Delivery"
                        backgroundImg="model-3.jpg"
                        leftBtnText="Cusom Order"
                        rightBtnText="Existing inventory"
                />
                <Section
                        title="Model-X"
                        description= "Order Online for Touchless Delivery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Cusom Order"
                        rightBtnText="Existing inventory"
                />
              
                <Section
                        title="lowest cost solar panel in america"
                        description= "money back-guaraantees"
                        backgroundImg="solar-panel.jpg"
                        leftBtnText=" Order now "
                        rightBtnText="learn more"
                />
                <Section
                        title="solar for new roofs "
                        description= "solar roof cost less than a new roof plus solar panels "
                        backgroundImg="solar-roof.jpg"
                        leftBtnText=" Order now "
                        rightBtnText="learn more"
                />
                <Section
                        title="accessories "
                        description= " "
                        backgroundImg="accessories.jpg"
                        leftBtnText=" shop now "
                        
                />
              
            </Container>
        )
    }
    
    export default Home
    


    const Container = styled.div`
    height:100vh;
    z-index:10;
    `