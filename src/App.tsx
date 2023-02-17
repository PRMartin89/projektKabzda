import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/onOff/onOff";
import UncontrolledAccordion from "./components/UncontrolledAcordion/Accordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>

            <OnOff />


            <UncontrolledAccordion titleValue={"Меню"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledRating />
            <Rating value={3} />


            {/*<Accordion titleValue={"Меню"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"User"} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


        </div>
    );
}

type PageTitlePropsType ={
    title: string
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
