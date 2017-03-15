var socket = io.connect('http://192.168.1.43:6677', { 'forceNew': true });

socket.on('message', (data) => {
    console.log("Datos:" + JSON.stringify(data)),
        render(data)
}); //cuando recibe mensaje

function render(message) {
    var html = message.map((m) => {
        return (`
            <div class="message">
                <strong>${m.nickname}</strong> dice:
                <p>${m.text}</p>
            </div>
        `);
        //cojer todo el array y lo mete en una cadena, separado por espacio
    }).join('');

    document.getElementById('message').innerHTML = html;

    function addMessage(e) {
        var message = {
            nickname: document.getElementById('nickname').value,
            text: document.getElementById('text').value
        };

        document.getElementById('nickname').style.display = 'none';
        socket.emit('add.message', message);
        return false;
    }
}