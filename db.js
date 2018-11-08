exports.Database = class {
    constructor() {
        this.state = [
            {   
                id: 2
             }
        ];
    }

    read(id) {
        if (id) {
            return this.state.find(item => item.id === Number(id));
        }
        
        return this.state;
    }

    write(data) {
        this.state = data;
    }
}
