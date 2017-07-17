 /**
 * Class representing a user
 * @class
 */
 class User {
   /**
    * Create a user
    * @constructor
    */
   constructor() {
     this.isUserLogin = false;
     this.name = "";
   }

   /**
    * Login user
    * @param {String} name - Username
    * @param {String} password - User password
    * @returns {Promise} Returns promise
    */
   login(name, password) {
     var users = this.loadUsers();
     var user = users.find(function(p) { return p.name === name; });
     if (user) {
        this.isUserLogin = user.password === password;
     } else {
        user = { name: name, password: password };
        users.push(user);
        this.saveUsers(users);
        this.isUserLogin = true;
     }
     if (this.isUserLogin) {
       this.name = user.name;
     }
     return this.isUserLogin;
     // if true - isUserLogin = true
     // if not registered - create new user
   }

   /**
    * Logout user
    *
    *
    */
   logout() {
     this.isUserLogin = false;
     this.name = "";
   }
   
   loadUsers() {
     var json = localStorage.getItem('MYUSERS');
     var data = JSON.parse(json || "[]");
     return data;
   }

   saveUsers(users) {
     localStorage.setItem('MYUSERS', JSON.stringify(users));
   }
 }

 //export default User;
