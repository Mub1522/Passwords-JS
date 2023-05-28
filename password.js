
/* función en JavaScript que te genera una contraseña aleatoria */

function generarContrasena() {
    let longitud = 12; // longitud de la contraseña
    let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indice);
    }
    console.log('Tu nueva contraseña es:', contraseña);
}

/* función en JavaScript que te genera una contraseña aleatoria - Version 2 */

function generarContrasena2() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const cEspeciales = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let contrasena = "";
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indice];
        } else {
            const indice = Math.floor(Math.random() * cEspeciales.length);
            contrasena += cEspeciales[indice];
        }
    }
    return contrasena;
}

console.log(generarContrasena2()); // ejemplo de uso

//ssasa
