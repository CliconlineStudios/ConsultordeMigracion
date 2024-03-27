
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("ftperfil").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "block";
    conta=0;
    contador=0;
}


function servicios() {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}


function contactanos() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("ftperfil").style.display = "none";
    conta=0;
    contador=2; 
    backarriba();
    ids1();    
        
}


//   boton atras

function back() {
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("ftperfil").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }


    } 
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
    


   //    menu laterl 

   var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

  
// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        
//formulario>
        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "+13522088877";
          
            let cliente = document.querySelector("#cliente").value;
            let cantidad = document.querySelector("#edad").value;
            let modulos = document.querySelector("#modulos").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                  *Colsulta VISA de Migración*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Ubicacion*%0A
                  ${cantidad}%0A
                  *Busco*%0A
                  ${modulos}%0A`;
          
            if (cliente === "" || cantidad === "" ) {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Msj Fue Enviada, ${cliente}`;
          
            window.open(url);
          });
          
    
    //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=1JVjXAIF5yyCpKhLbO8gWnPOj29hkzEjx&export=download`;
            window.open(url); 
           }
          
          function ftuser() {
              Swal.fire({
                  title: 'Ricardo Dávila',
                  text: 'Consultor de Migración.',
                  imageUrl: 'img/rcimg.jpg',
                  imageWidth: 200,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          
          
          function msj2() {
            Swal.fire({
              icon: 'info',
              title: 'Consultor de Migración',
              text: 'Opción Disponible Próximamente',
              footer: 'Tarjeta De Presentación'
            });
          
           
          }


          // share tarjeta

const shareData2 = {
    title: 'Consultor de Migración',
    text: 'Enviado desde la Tarjeta de Presentación Digital Ricardo Davila',
    url: 'https://ricardodavilaconsultordemigracion.blogspot.com',
    }
  
  
   // Share must be triggered by "user activation"
     
   var urltarjeta = 'https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Tarjeta%20Digital%20aqui%20https://ricardodavilaconsultordemigracion.blogspot.com'
    
   function sharetarjeta(){
   if (navigator.share) {
       navigator
      .share(shareData2)
      .then(() => console.log('correcto'))
      .catch(error => console.log ('error sharing',error) );
   }else {
    window.open(urltarjeta); 
   }
   } 



