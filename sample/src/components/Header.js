//functional component

// function Header(props){
//     console.log(props) 
function Header({name}){ 
console.log(name) ; 
    return (
        <div className="header">
             
               <div className="login">login</div>
               <div className="about">about</div>
               <div className="signup">signup</div>
           </div>
            

    
    )
}
export default Header;