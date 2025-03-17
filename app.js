const friendsList = document.getElementById('listaAmigos'); 
const nameInput = document.getElementById('amigo');
let secretFriendsNames = [];

function addFriend(){
    let friendsName = nameInput.value.trim(); //Trim elimina los espacios en blanco

    if(friendsName != ''){
       let newElement =  createNewElement('li');
        newElement.textContent = friendsName;
        if (!secretFriendsNames.includes(friendsName)) {
            friendsList.appendChild(newElement);
            secretFriendsNames.push(friendsName);
        } else {
            alert('Este nombre ya está en la lista.');
        }
        nameInput.value = '';
    } else alert('¡Error! Ingresa un nombre válido');
    return;
}

function createNewElement(element){
    let newElementHTML = document.createElement(element)
    return newElementHTML; 
}

function deleteNewElements() {
    while (friendsList.firstChild) {
        friendsList.removeChild(friendsList.firstChild);
    }
    secretFriendsNames = []; 
}

function getSecretFriend(){

    if (secretFriendsNames.length === 0) {
        alert('No hay nombres en la lista. Agrega algunos amigos primero.');
        return;
    }

    let secretFriend =  secretFriendsNames[Math.floor(Math.random() * secretFriendsNames.length)];
    deleteNewElements();
  
    let newH1Element = createNewElement('h1');
    newH1Element.style.color = 'green'
    newH1Element.textContent = `El amigo secreto es: ${secretFriend}`;
    friendsList.appendChild(newH1Element);
}

