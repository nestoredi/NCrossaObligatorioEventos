let formulario = document.getElementById('idForm')
let mostrar =document.getElementById('mostrarDatos')
let arrayUsuario =[]

formulario.addEventListener('submit', (event)=>{
    event.preventDefault( )
   let email =  document.getElementById('exampleInputEmail1').value
   let username = document.getElementById('exampleInputUsername1').value
   let password =document.getElementById('exampleInputPassword1').value

   let usuario ={email :email, username: username, password:password}
   arrayUsuario.push(usuario)

   console.log(arrayUsuario)
   formulario.reset()
   mostrarUsuario()
   
})
//muestro el usuario creado
const mostrarUsuario=()=>{
   mostrar.innerHTML=`
   <p>usuario : ${arrayUsuario[arrayUsuario.length-1].username}</p>
   ` 
}