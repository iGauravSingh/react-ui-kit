// Button Component
// text containing in button
// size in -small -large -extralarge
// color as -color prop
// active or dissabled state
// onClick props that pass on the function


const Button = ({ name,size='small',bg='white',color='black',active=true,onClick=null }) => {
    let width
    let height
    if(size === 'small'){
        width = '100px'
        height = '50px'
    }else if(size ==='large'){
        width = '200px'
        height = '80px'
    }else if (size === 'xlarge'){
        width = '300px'
        height = '100px'
    } else{
        width = '100px'
        height = '50px'
    }
    const buttonStyle =()=>({
        width: width,
        height: height,
        color: color,
        backgroundColor: bg,
        border: 'none',
        borderRadius: '8px',
        fontFamily: 'Times New Roman',
        fontSize: 'medium'
    })
    return (
        <>
      <button style={buttonStyle()} onClick={onClick}>{name}</button>
      </>
    )
  }
  
  export default Button