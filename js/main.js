const { createApp } = Vue
createApp({
    data() {
        return {
            error: false,
            inputText: ``,
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ]


        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputText);
            console.log(this.tasks)
        },
        removeTask(indice){
            this.tasks.splice(indice, 1)
        }

    }
}).mount(`#app`)

