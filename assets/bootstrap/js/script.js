            fetch('/navbar.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('nav').innerHTML = html);

             fetch('/login/login.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('login').innerHTML = html);

            fetch('/login/nacionality.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('nacionality').innerHTML = html);

            fetch('/login/state.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('states').innerHTML = html); 

            fetch('/footer.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('footer').innerHTML = html); 