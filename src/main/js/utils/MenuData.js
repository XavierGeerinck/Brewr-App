module.exports = {
    init: function() {
        localStorage.setItem('activeMenuItemId', 0);
        
        localStorage.setItem('activeMenuSourceId', 0);

        localStorage.setItem('menu_items', JSON.stringify([
            {
                icon_class: "fa fa-bars",
                name: "All projects",
                isActive: true
            },
            {
                icon_class: "fa fa-check-circle",
                name: "Installed"
            },
            {
                icon_class: "fa fa-cloud",
                name: "Available"
            }
        ]));

        localStorage.setItem('menu_sources', JSON.stringify([
            {
                avatar: "./img/avatar.png",
                name: "Personal",
                isActive: true
            },
            {
                avatar: "./img/avatar.png",
                name: "Company A"
            },
            {
                avatar: "./img/avatar.png",
                name: "Company B"
            }
        ]));
    }
};
