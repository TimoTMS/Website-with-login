// script.js (robust & diagnostisch)
(() => {
    // Diagnostic
    console.log('script.js geladen');

    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    // show what we found
    console.log('wrapper:', wrapper);
    console.log('registerLink:', registerLink);
    console.log('loginLink:', loginLink);
    console.log('btnPopup:', btnPopup);
    console.log('iconClose:', iconClose);

    // helper: safe addEventListener
    function safeOn(el, ev, fn) {
        if (!el) {
            console.warn(`Element für EventListener nicht gefunden: ${ev}`);
            return;
        }
        el.addEventListener(ev, fn);
        console.log(`Listener gesetzt: ${ev} auf`, el);
    }

    // Wechsel: Login -> Register
    safeOn(registerLink, 'click', (e) => {
        e.preventDefault();
        if (!wrapper) return;
        wrapper.classList.add('active');
        console.log('wrapper.active gesetzt (Register sichtbar)');
    });

    // Wechsel: Register -> Login
    safeOn(loginLink, 'click', (e) => {
        e.preventDefault();
        if (!wrapper) return;
        wrapper.classList.remove('active');
        console.log('wrapper.active entfernt (Login sichtbar)');
    });

    // Popup öffnen (Navbar Login)
    safeOn(btnPopup, 'click', (e) => {
        e.preventDefault();
        if (!wrapper) return;
        wrapper.classList.add('active-popup');
        console.log('wrapper.active-popup gesetzt (Popup sichtbar)');
    });

    // Popup schließen (X)
    safeOn(iconClose, 'click', (e) => {
        e.preventDefault();
        if (!wrapper) return;
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active');
        console.log('Popup geschlossen (active-popup & active entfernt)');
    });
})();
