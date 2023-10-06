import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';





export const alertGoingGetCode=()=>{


  const MySwal = withReactContent(Swal);


  MySwal.fire({
    title: 'Registro exitoso',
    text: 'Te redirigiremos para ingresar un codigo pues se ha enviado uno a su correo electrónico. Por favor, revise su Gmail para obtenerlo y active su cuenta.',
    icon: 'success',
    timer: 8000, // La alerta se cerrará después de 8 segundos (8000 ms)
    timerProgressBar: true, // Muestra una barra de progreso en la alerta
  });

}


export const alertError=(error:string)=>{


  const MySwal = withReactContent(Swal);


  MySwal.fire({
    title: 'Lo siento .Hubo un error',
    text: `${error}`,
    icon: 'error',
    timer: 3000, 
    // timerProgressBar: true, // Muestra una barra de progreso en la alerta
  });

}


export const alertLogout =()=>{




Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})



}



export const alertWelcome=()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Bienvenido',
    showConfirmButton: false,
    timer: 1500
  })


}