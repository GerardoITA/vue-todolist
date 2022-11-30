const { createApp } = Vue
createApp({
    data() {
        return {
            errore: false,
            errorDisplay: `error`,
            errorNoDisplay: `noError`,
            inputText: ``,
            inputObject: {
                text: this.inputText, 
                done: false
            },
            circle: `fa-regular fa-circle`,
            circleCheck: `fa-regular fa-circle-check`,
            tasks: [
                { text: 'Fare i compiti', done: true },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ]


        }
    },
    methods: {
        addTask(){
            if(this.inputText.length > 4){
                this.tasks.unshift(this.inputObject);
                console.log(this.inputText);
                console.log(this.tasks);
                this.inputText = ``;  
                this.errore = false;
            } else {
                this.errore = true;
            }
              
        },
        removeTask(indice){
            this.tasks.splice(indice, 1)
        },
       changeTaskStatus(indice){
            if (this.tasks[indice].done = false){
                this.tasks[indice].done = true
                console.log(this.tasks[indice].done)
            } else {
                this.tasks[indice].done = false
                console.log(this.tasks[indice].done)
            }
        } 
    }
}).mount(`#app`)

