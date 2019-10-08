import Keycloak from 'https://auth.hii.web.meca.in.th/auth/js/keycloak.js'
//<script src="https://auth.hii.web.meca.in.th/auth/js/keycloak.js"/>
console.log("Init Keycloak header")
var keycloak = Keycloak({
    "clientId": "nirun-client",
    "realm": "nirun",
    "auth-server-url": "https://auth.hii.web.meca.in.th/auth",
    "ssl-required": "external",
    "resource": "nirun-client",
    "public-client": true,
    "confidential-port": 0
});
keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: false,
    flow: 'implicit'
})
    .success(function (authenticated) {
        console.log("Success " + authenticated);
        renderUserInfo();
    })
    .error(function () {
        alert('failed to initialize');
    });

function renderUserInfo() {
    console.log("Token " + keycloak.token);
    document.getElementById("token-view").innerHTML = keycloak.token;
}
