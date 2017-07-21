/**
 * Class representing database
 * @class
 */
class DB {
    /**
     * Create a database object
     * @constructor
     * @param {String} API - API for requests
     */
    constructor(user) {
        this.eventsStorageItem = "MYEVNT_" + user;
    }

    /**
     * Load all events
     * @returns {Promise}
     */
    loadEvents() {
        //debugger;
        var json = localStorage.getItem(this.eventsStorageItem);
        var data = JSON.parse(json || "[]");
        return data;
    }

    /**
     * Load event by ID
     * @param {String} id - ID of event
     * @returns {Promise}
     */
    loadEvent(id) {
        var all = this.loadEvents();
        return all.find(function (p) {
            return p.id == id;
        });
    }


    loadEventsByDate(date) {
        //debugger;
        return this.loadEvents().filter(p => p.cellId === date);
    }

    saveAll(events) {
        localStorage.setItem(this.eventsStorageItem, JSON.stringify(events));
    }

    /**
     * Add new event
     * @param {Object} eventData - title, description, date, status, comments...
     * @returns {Promise}
     */
    addEvent(eventData) {
        var all = this.loadEvents() || [];
        eventData.id = new Date().getTime();
        all.push(eventData);
        this.saveAll(all);
    }

    saveEventInDB(taskTitle, dateDay) {
        let key = sessionStorage.getItem("key");
        var ref = firebase.database().ref();
        let obj;
        Promise.resolve()
            .then(() => this.chekUser(key, ref, obj))
            .catch(() => this.createStructure(key, ref, obj))
            .then(() =>
                this.addData(key, ref, obj, taskTitle, dateDay)
            )
            .catch(err => console.error(err));
    }

    chekUser(key, ref, obj) {
        return new Promise((resolve, reject) => {
            ref.on("value", function (snapshot) {
                obj = snapshot.val();
                obj = obj[`${key}`];
                if (!obj || obj == null) return reject();
                resolve();
            });
        });
    }

    createStructure(key, ref, obj) {
        return new Promise((resolve, reject) => {
            obj = {};
            obj = JSON.stringify(obj);
            ref = firebase.database().ref(`${key}/`);
            ref.set(obj);
            return resolve();
        });
    }

    addData(key, ref, obj, taskTitle, dateDay) {
        debugger;
        ref.on(
            "value",
            function (snapshot) {
                obj = snapshot.val();
            },
            function (error) {
                console.log("Error: " + error.code);
            }
        );
        obj = obj[`${key}`];
        obj = JSON.parse(obj);
        let arrTitle = obj[`${dateDay}`];
        if (!arrTitle) {
            obj[`${dateDay}`] = {
                title: [],
                text: [],
                done: []
            };
            arrTitle = obj[`${dateDay}`].title;
        } else {
            arrTitle = obj[`${dateDay}`].title;
        }
        // let arrText = obj[`${dateDay}`].text;
        arrTitle.push(taskTitle);
        //arrText.push(taskDescription);
        obj = JSON.stringify(obj);
        ref = firebase.database().ref(`${key}`);
        ref.set(obj);
        return resolve();
    }

    loadEventsFromDB() {
        let key = sessionStorage.getItem("key");
        let ref = firebase.database().ref();
        let obj;
        Promise.resolve()
            .then(() => this.loadDataForCalenedarRendar(key, ref, obj))
            .catch(() => alert("загрузка"));
    }

    loadDataForCalenedarRendar(key, ref, obj) {
        return new Promise((resolve, reject) => {
            ref.on(
                "value",
                function (snapshot) {
                    obj = snapshot.val();
                    obj = obj[`${key}`];
                    obj = JSON.parse(obj);
                    let cal = document.querySelector("table");
                    for (let dateLoad in obj) {
                        debugger;
                        let loadData = obj[`${dateLoad}`].title;
                        let res = cal.querySelector(`#${dateLoad});
                        if (res != null) {
                            if (loadData.length - 1 == 0) {
                                res.innerHTML += `<div>${loadData}<button class="cross">[x]</button></div>`;
                            } else {
                                for (var i = 0; i < loadData.length; i++) {
                                    let dbArr = loadData;
                                    res.innerHTML += `<div>${dbArr[
                                        i
                                        ]}<button class="cross">[x]</button></div>`;
                                }
                            }
                        }
                    }
                    resolve();
                },
                function (error) {
                    reject();
                }
            );
        });
    }

    deleteEventInDB(dateDay, text) {
        debugger;
        if (dateDay == "") return;
        let key = sessionStorage.getItem("key");
        let ref = firebase.database().ref();
        let obj;
        Promise.resolve()
            .then(() => this.delEventFromDB(key, ref, obj, dateDay, text))
            .catch(() => alert("удаление"));
    }

    delEventFromDB(key, ref, obj, dateDay, text) {
        return new Promise((resolve, reject) => {
            ref.on(
                "value",
                function (snapshot) {
                    obj = snapshot.val();
                },
                function (error) {
                    console.log("Error: " + error.code);
                }
            );
            obj = obj[`${key}`];
            obj = JSON.parse(obj);
            let index = obj[`${dateDay}`].title.indexOf(text);
            obj[`${dateDay}`].title.splice(index, 1);
            obj[`${dateDay}`].text.splice(index, 1);
            // obj[`${dateDay}`].done.splice(index, 1);
            obj = JSON.stringify(obj);
            ref = firebase.database().ref(`${key}`);
            ref.set(obj);
            console.log(obj);
            return resolve();
        });
    }

    updateEvent(event) {
        var all = this.loadEvents();
        var found = all.find(function (p) {
            return p.id == event.id;
        });
        if (found) {
            var index = all.indexOf(found);
            all.splice(index, 1);
            all.push(event);
            this.saveAll(all);
        }
    }


    /**
     * Delete event by ID
     * @param {String} id - ID of event
     * @returns {Promise}
     */
    deleteEvent(id) {
        var all = this.loadEvents();
        var found = all.find(function (p) {
            return p.id == id;
        });
        if (found) {
            var index = all.indexOf(found);
            all.splice(index, 1);
            this.saveAll(all);
        }
    }

    /**
     * Add new comment
     * @param {Object} commentData - comment data
     * @returns {Promise}
     */
    addComment(commentData) {

    }

    /**
     * Load all event's comments
     * @param {String} eventID
     * @returns {Promise}
     */
    loadComments(eventID) {

    }


}

//export default DB;
