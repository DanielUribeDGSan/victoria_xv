
import { doc, setDoc, getFirestore, updateDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
const db = getFirestore();

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
const boton = document.querySelector("#add_btn");

boton.addEventListener("click", function (e) {
    registrarInvitaciones();
});

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function registrarInvitaciones() {
    const familia = document.querySelector('#familia').value;
    const adultos = document.querySelector('#adultos').value;
    const ninos = document.querySelector('#ninos').value;
    const mesa = document.querySelector('#mesa').value;
    const pases = document.querySelector('#pases').value;
    const qr = document.querySelector('#qr').value;
    const documento = makeid(5) + familia.replace(/ /g, "") + makeid(5);

    if (familia == "" || adultos == "" || ninos == "" || mesa == "" || pases == "" || qr == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo vacío',
        });

        return false;
    }

    // Create an initial document to update.
    const invitacionDocRef = doc(db, "col-invitaciones", removeAccents(documento));
    await setDoc(invitacionDocRef, {
        familia: familia,
        code: qr,
        asistencia: 'pendiente',
        adultos: adultos,
        ninos: ninos,
        pases: pases,
        mesa: mesa,
        pasesGastados: 0,
        totalPases: parseInt(pases)

    }).then(function () {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
            icon: 'success',
            title: 'Invitación creada'
        });

        document.querySelector('#familia').value = "";
        document.querySelector('#adultos').value = "";
        document.querySelector('#ninos').value = "";
        document.querySelector('#mesa').value = "";
        document.querySelector('#pases').value = "";
        document.querySelector('#qr').value = "";

    });
    // To update age and favorite color:

}



// import { doc, updateDoc } from "firebase/firestore";

// const washingtonRef = doc(db, "cities", "DC");


// await updateDoc(washingtonRef, {
//     capital: true
// });
