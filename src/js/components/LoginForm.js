/**
 * Class representing login form
 * @class
 */
class LoginForm {

    /**
     * Create a login form
     * @constructor
     */
    constructor(element, db) {
        this.element = element;
        this.db = db;
        this.renderLoginForm();
        this.show();
    }

    /**
     * Handle login form
     */
    handleSubmit() {
        var email = this.loginForm.querySelector('input[name="username"]').value;
        var pass = this.loginForm.querySelector('input[name="password"]').value;

        Promise.resolve()
            .then(() => firebase.auth().signInWithEmailAndPassword(email, pass))
            .catch(() => firebase.auth().createUserWithEmailAndPassword(email, pass))
            .then(() => {
                let user = firebase.auth().currentUser;
                let uid;
                uid = user.uid;
                var calendarContainer = document.querySelector('.calendar-container');
                var cal = new Calendar(calendarContainer);
                cal.show();
                this.hide();
                //location.hash = "monthlyView";
                sessionStorage.setItem("currentUser", email);
                sessionStorage.setItem("key", uid);
                return;
            })
            .catch(() => {
                this.handleWrongPassword();
                document.querySelector('.form-signin').reset();
            });


        // if (user.login(userName, userPassword)) {
        //   db = new DB(userName);


        //   this.handleCorrectPassword();
        // } else {
        //   this.handleWrongPassword();
        //   document.querySelector('.form-signin').reset();
        // }

    }

    handleWrongPassword() {
        this.element.querySelector('input[name="password"]').placeholder = 'Wrong password! Try again';
        this.element.querySelector('input[name="password"]').className = 'form-control my-login wrong-pass';
    }

    handleCorrectPassword() {
        this.element.querySelector('input[name="password"]').placeholder = 'Password';
        this.element.querySelector('input[name="password"]').className = 'form-control my-login';
    }

    renderLoginForm() {
        // отрендерить форму
        // повесить на форму handleSubmit
        this.loginForm = document.createElement('DIV');
        this.loginForm.className = 'container login';
        this.loginForm.innerHTML = '<form class="form-signin"> \
    <h2 class="form-signin-heading">Log In</h2> \
    <input type="text" class="form-control my-login" name="username" placeholder="Email Address" required="" autofocus=""/> \
    <input type="password" class="form-control my-login" name="password" placeholder="Password" required=""/> \
    <button class="btn btn-lg btn-block my-login-btn" type="button">Login</button> \
    </form>';
        this.element.appendChild(this.loginForm);
        var self = this;
        this.element.querySelector('.my-login-btn').addEventListener('click', function (event) {
            event.preventDefault();
            self.handleSubmit();
        });
    }

    show() {
        this.loginForm.style.display = 'block';
        header.rewriteOnLogout();
    }

    hide() {
        this.loginForm.style.display = 'none';
        header.rewriteOnLogin();

    }
}

//export default CommentForm;
