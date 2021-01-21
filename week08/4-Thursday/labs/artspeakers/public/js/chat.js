const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

socket.on('connect', ()=>{
    let chatForm = document.querySelector('form');

    chatForm.addEventListener('sumbit', (e)=>{
        e.preventDefault();
//sending posted message to server
        socket.emit('postMessage', {
            username: chatUsername.nodeValue,
            message: chatMessage.value
        })

        chatMessage.value = '';
        chatMessage.focus();
    })

    socket.on('updateMessages', (data)=>{
        //grab the display container to display messages
        let chatDisplay = dpcument.querySelector('.chat-display');
        let newMessage = document.createElement('p');

        if (chatUsername.value === data.username){
            newMessage.className = 'bg-success chat-text';
        }
        else{
            newMessage.className = "bg-info text-warning chat-text";

        }
        //< class= "">username message</p>
        newMessage.innerHTML= `<strong>${data.username}</strong>: ${data.message}`;

        chatDisplay.inseretBefore(newMessage, chatDisplay.firstChild);

    })
})