/**
 * URL de base du serveur back.
 * Différent selon prod ou dev.
 */
let ENDPOINT;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    ENDPOINT = "http://149.202.179.212:8080/prod/";
} else if (process.env.NODE_ENV === 'developpement'){
    ENDPOINT = "http://localhost:8080/dev/";
} else {
    ENDPOINT = "http://149.202.179.212:8080/dev/";
}

/**
 * Objet contenant toutes les configs nécessaires.
 */
export default {
    ENDPOINT: ENDPOINT
}
