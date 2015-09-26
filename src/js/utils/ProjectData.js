module.exports = {
    init: function() {
        localStorage.setItem('projects', JSON.stringify([
            {
                avatar: "./assets/img/avatar.png",
                name: "Gmail Front-end",
                creator: "Google",
                state: "running"
            },
            {
                avatar: "./assets/img/avatar.png",
                name: "Gmail Back-end",
                creator: "Google",
                state: "installed"
            },
            {
                avatar: "./assets/img/avatar.png",
                name: "Chat Server",
                creator: "Facbook",
                state: "New update"
            },
            {
                avatar: "./assets/img/avatar.png",
                name: "Front-end",
                creator: "Facebook",
                state: ""
            },
            {
                avatar: "./assets/img/avatar.png",
                name: "Servant",
                creator: "me",
                state: ""
            },
            {
                avatar: "./assets/img/avatar.png",
                name: "Tetris HTML5",
                creator: "me",
                state: ""
            }
        ]));
    }
};
