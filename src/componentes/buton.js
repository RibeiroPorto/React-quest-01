
function showalert(text){
 alert('A label desse botão é "'+text+'"')
}

const Buton = (props) =>{
    return (
        <button onClick={()=>showalert(props.Label)} >{props.Label}</button>
    )
}

Buton.defaultProps = {
    Label:""
}

export {Buton}