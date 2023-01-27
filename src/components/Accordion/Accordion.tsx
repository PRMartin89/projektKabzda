
type AccordionPropsType = {
    titleValue: string
    collapsedAccordion: boolean
}

function Accordion(props: AccordionPropsType):any{
    console.log("Accordion rendering")
    if (props.collapsedAccordion === true) {
     return <div></div>
    } else if (props.collapsedAccordion === false) {
        console.log('User')
        return <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsedAccordion}/>
            <AccordionBody collapsed={props.collapsedAccordion}/>
        </div>
    }


}

type AccordionTitlePropsType={
    title: string,
    collapsed: boolean

}

function AccordionTitle(props: AccordionTitlePropsType){
    console.log("AccordionTitle rendering")
    return <h3>-- {props.title} --</h3>
}
type AccordionBodyPropsType={
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType){
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}
export default Accordion;