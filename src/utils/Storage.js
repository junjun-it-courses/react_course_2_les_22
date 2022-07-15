class Storage {
    #dbName = 'todoForm';
    id = 1;

    constructor() {
        this.#getId();
    }

    #getId() {
        const data =  this.getItems();
        if(!data) return;

        this.id = this.getItems().at(-1).id + 1;
    }

    getItems() {
        return JSON.parse(localStorage.getItem(this.#dbName));
    }

    setItem(todoItem) {
        const localTodoItem = {...todoItem};

        if(typeof localTodoItem !== 'object') throw new Error('Should be an Object data type')

        const existingItems = this.getItems();

        const dataToSave = existingItems ? existingItems : [];

        const currentTodo = {
            id: this.id,
            status: 'no-status',
            ...localTodoItem
        };

        dataToSave.unshift(currentTodo);

        localStorage.setItem(
            this.#dbName,
            JSON.stringify(dataToSave)
        );

        this.id += 1;

        return dataToSave;
    }
}


export default new Storage();
