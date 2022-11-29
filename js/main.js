const { createApp } = Vue
createApp({
    data() {
        return {
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
            
        }

    }
}).mount(`#app`)

