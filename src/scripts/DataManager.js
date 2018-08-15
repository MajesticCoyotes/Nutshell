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
        value: () => {
            return fetch("http://localhost:8088/tasks")
            .then(response => response.json())
        }
    },
    getArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles")
            .then(response => response.json())
        }
    },
    getEvents: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/events?_sort=id&_order=desc`)
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
    saveEvent: {
        value: (eventId, event) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
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
    editEvent: {
        value: (eventID, newEvent) => {
            return fetch(`http://localhost:8088/events/${eventID}`, {
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