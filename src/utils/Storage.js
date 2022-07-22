class Storage {
    #dbName = 'todoForm';
    id = 1;

    constructor() {
        try {
            this.#getId();
        } catch (e) {
            console.log(e)
        }
    }

    async #getId() {
        try {
            const data = await this.getItems();
            if(!data) return;

            this.id = data.at(-1).id + 1;
        } catch (e) {
            console.log(e);
        }
    }

    getItems() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(
                        JSON.parse(localStorage.getItem(this.#dbName))
                    )
                }, 500
            )
        })
    }

    async setItem(todoItem) {
        const localTodoItem = {...todoItem};

        if(typeof localTodoItem !== 'object') throw new Error('Should be an Object data type')

        const existingItems = await this.getItems();

        const dataToSave = existingItems ? existingItems : [];

        const currentTodo = {
            id: this.id,
            status: 'no-status',
            ...localTodoItem
        };

        dataToSave.unshift(currentTodo);

        await localStorage.setItem(
            this.#dbName,
            JSON.stringify(dataToSave)
        );

        this.id += 1;

        return dataToSave;
    }
}


export default new Storage();
