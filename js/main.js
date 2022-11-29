const { createApp } = Vue
createApp({
    data() {
        return {
            error: false,
            inputText: ``,
            inputObject: {
                text: `${this.inputText}`, done: false
            },
            circle: `fa-regular fa-circle`,
            circleCheck: `fa-regular fa-circle-check`,
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ]


        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputObject);
            console.log(this.tasks)
        },
        removeTask(indice){
            this.tasks.splice(indice, 1)
        }

    }
}).mount(`#app`)

