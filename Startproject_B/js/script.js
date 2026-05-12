const global = {
    messages: []
};

const setup = () => {
    const buttonSend = document.getElementById('send-button');
    const textbar = document.getElementById('message-input');
    const userSelect = document.getElementById('message-sender');
    const divChat = document.getElementById('chat-box');
    const clearBtn = document.getElementById('clear-all');

    const savedUser = sessionStorage.getItem('chat-user');
    if (savedUser) {
        userSelect.value = savedUser;
    } else {
        let randomIndex = Math.floor(Math.random() * userSelect.length);
        userSelect.selectedIndex = randomIndex;
        sessionStorage.setItem('chat-user', userSelect.value);
    }

    userSelect.addEventListener('change', () => {
        sessionStorage.setItem('chat-user', userSelect.value);
        renderMessages();
    });

    const renderMessages = () => {
        const data = localStorage.getItem('group-messages');
        global.messages = data ? JSON.parse(data) : [];

        divChat.innerHTML = '';
        const currentUser = sessionStorage.getItem('chat-user');

        global.messages.forEach((msg, index) => {
            let messageDiv = document.createElement("div");
            let timestamp = document.createElement("span");
            let sender = document.createElement("span");

            timestamp.classList.add("timestamp");
            const time = new Date(msg.time);
            timestamp.textContent = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            sender.classList.add("sender");
            sender.textContent = msg.user;

            messageDiv.classList.add("message");
            if (msg.user === currentUser) {
                messageDiv.classList.add("same-user");

                let deleteBtn = document.createElement("button");
                sender.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', () => deleteMessage(index));
            }

            const textContent = document.createTextNode(msg.text);

            messageDiv.appendChild(timestamp);
            messageDiv.appendChild(sender);
            messageDiv.appendChild(textContent);

            divChat.prepend(messageDiv);
        });
    };

    const sendMessage = () => {
        const text = textbar.value.trim();
        if (text === "") return;

        const newMessage = {
            user: userSelect.value,
            text: text,
            time: Date.now()
        };

        global.messages.push(newMessage);
        localStorage.setItem('group-messages', JSON.stringify(global.messages));

        textbar.value = '';
        renderMessages();
    };

    const deleteMessage = (index) => {
        const currentUser = sessionStorage.getItem('chat-user');
        const messageToDelete = global.messages[index];

        if (messageToDelete && messageToDelete.user === currentUser) {
            if (confirm("Weet je zeker dat je dit bericht wilt verwijderen?")) {
                global.messages.splice(index, 1);
                localStorage.setItem('group-messages', JSON.stringify(global.messages));
                renderMessages();
            }
        } else {
            alert("Je mag alleen je eigen berichten verwijderen!");
        }
    };

    const clearAll = () => {
        localStorage.removeItem('group-messages');
        renderMessages();
    };

    buttonSend.addEventListener('click', sendMessage);
    clearBtn.addEventListener('click', clearAll);

    textbar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    window.addEventListener('storage', (e) => {
        if (e.key === 'group-messages') {
            renderMessages();
        }
    });

    renderMessages();
};

window.addEventListener("load", setup);