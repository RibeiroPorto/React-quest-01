
function Upper(text){
    
    return text.toUpperCase()
}
const Paragrafo = (props)=>{
    const styles ={
        backgroundColor:props.backgroundColor,
        color:props.color
    }
    return (
        <p style={styles}>{Upper(props.text)} </p>
    )
}

Paragrafo.defaultProps ={
    text:"...",
    backgroundColor:"Blue",
    color:"red"
}

export{Paragrafo}