/*
    Module created by: Madi
    PURPOSE: Performs all CRUD operations to the database
*/

const getData = Object.create(null, {
    getUsers: {
        value: () => {
            return fetch("http://localhost:8088/users")
            .then(response => response.json())
        }
    },
    getUserEmails: {
        value: (loginEmail) => {
            return fetch(`http://localhost:8088/users?email=${loginEmail}`)
            .then(response => response.json())
        }
    },
    getTasks: {
        value: (userID) => {
            return fetch(`http://localhost:8088/users/${userID}/tasks?_sort=date&_order=asc`)
            .then(response => response.json())
        }
    },
    getTaskByID: {
        value: (taskID) => {
            return fetch(`http://localhost:8088/tasks/${taskID}`)
            .then(response => response.json())
        }
    },
    getMessages: {
        value: () => {
            return fetch("http://localhost:8088/messages")
            .then(response => response.json())
        }
    },
    getArticles: {
        value: (userID) => {
            return fetch(`http://localhost:8088/users/${userID}/articles?_sort=id&_order=desc`)
            .then(response => response.json())
        }
    },
    getEvents: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/events?_sort=date&_order=asc`)
            .then(response => response.json())
        }
    }
})

const saveData = Object.create(null, {
    saveUser: {
        value: (users) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(users)
            })
            .then(response => response.json())
        }
    },
    saveTask: {
        value: (task) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(task)
            })
            .then(response => response.json())
        }
    },
    saveArticle: {
        value: (article) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(article)
            })
            .then(response => response.json())
        }
    },
    saveMessages: {
        value: (article) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(article)
            })
            .then(response => response.json())
        }
    },
    saveEvent: {
        value: (event) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(event)
            })
            .then(response => response.json())
        }
    }
})

const editData = Object.create(null, {
    editCheckbox: {
        value: (taskID, checkbox) => {
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(checkbox)
            })
            .then(response => response.json())
        }
    },
    editTask: {
        value: (taskID, newTask) => {
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            })
            .then(response => response.json())
        }
    },
    editArticle: {
        value: (articleID, newArticle) => {
            return fetch(`http://localhost:8088/articles/${articleID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newArticle)
            })
            .then(response => response.json())
        }
    },
    editMessage: {
        value: (messageID, newMessage) => {
            return fetch(`http://localhost:8088/messages/${messageID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            })
            .then(response => response.json())
        }
    },
    editEvent: {
        value: (eventId, newEvent) => {
            return fetch(`http://localhost:8088/events/${eventId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEvent)
            })
            .then(response => response.json())
        }
    }
})

const deleteData = Object.create(null, {
    deleteTask: {
        value: (taskID) => {
            return fetch(`http://localhost:8088/tasks/${taskID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    deleteArticle: {
        value: (articleID) => {
            return fetch(`http://localhost:8088/articles/${articleID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    deleteMessage: {
        value: (messageID) => {
            return fetch(`http://localhost:8088/messages/${messageID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    deleteEvent: {
        value: (eventID) => {
            return fetch(`http://localhost:8088/events/${eventID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    }
})

module.exports = {getData, saveData, editData, deleteData}