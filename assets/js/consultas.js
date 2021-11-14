
//Consultas
const getQueryVariable = (variable) => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var invitacionParam = urlParams.get('invitacion');

// const consulta = doc(db, "col-invitaciones", invitacionParam);
// const validar = await getDoc(consulta);


// if (!validar.exists()) {

//     console.log("Invitación fake");
// }

db.collection("col-invitaciones").doc(invitacionParam)
    .onSnapshot({
        // Listen for document metadata changes
        includeMetadataChanges: true
    }, (doc) => {
        const familiar = document.querySelector('#familiar');
        const adultos = document.querySelector('#adultos');
        const ninos = document.querySelector('#ninos');
        const mesa = document.querySelector('#mesa');
        const qr = document.querySelector('#qr');

        familiar.innerHTML = `${doc.data().familia}`;
        adultos.innerHTML = `${doc.data().adultos}`;
        ninos.innerHTML = `${doc.data().ninos}`;
        mesa.innerHTML = `${doc.data().mesa}`;
        qr.innerHTML = `<img class="img-fluid img-qr" src="${doc.data().code}" />`;

        if (doc.data().asistencia == 'false' || doc.data().asistencia == 'true') {
            document.querySelector('#confirmar_invitacion').classList.remove('mostrar');
            document.querySelector('#confirmar_invitacion').classList.add('ocultar');
        } else {
            document.querySelector('#confirmar_invitacion').classList.remove('ocultar');
            document.querySelector('#confirmar_invitacion').classList.add('mostrar');

        }
    });



const boton = document.querySelector("#confirmar_invitacion_btn");

boton.addEventListener("click", function (e) {
    registrarInvitaciones();
});

function registrarInvitaciones() {
    Swal.fire({
        title: '',
        text: "¿Podras asistir este 26 de noviembre a los XVI años?",
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/victoria-637cb.appspot.com/o/29774-dance-party.gif?alt=media&token=13b47e57-c24a-4d4b-bf1b-3cf552275402',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
        showCloseButton: true,
        showCancelButton: false,
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#ff1744',
        confirmButtonText: 'Si asistire',
        denyButtonText: `No asistire`,
    }).then((result) => {
        if (result.isConfirmed) {
            updateAsistencia('true');

        } else if (result.isDenied) {
            updateAsistencia('false');
        }
    })

}
function updateAsistencia(value) {

    const documento = db.collection("col-invitaciones").doc(invitacionParam);
    if (value == 'true') {

        // Set the "capital" field of the city 'DC'
        return documento.update({
            asistencia: 'true'
        }).then(() => {
            Swal.fire({
                title: "Genial 🎉",
                text: "Te esperamos el viernes 26 de septiembre del 2021 a partir de las 8:30 pm 🍻",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/victoria-637cb.appspot.com/o/11272-party-popper.gif?alt=media&token=4c1d7634-b711-4613-a80a-f7e95cf23729",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
                confirmButtonText: "👍🏻",
            });
        }).catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });


    } else {
        return documento.update({
            asistencia: 'false'
        }).then(() => {
            Swal.fire({
                title: "😕",
                text: "Lamentamos que no nos puedan acompañar, ya será en otra ocasión",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/victoria-637cb.appspot.com/o/26184-sad-star.gif?alt=media&token=846ad997-595a-4e53-95fc-0960d9c19814",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
                confirmButtonText: "Aceptar",
            });
        }).catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

    }
}





    // const q = query(collection(db, "col-invitaciones"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data());
    //     });

    // });