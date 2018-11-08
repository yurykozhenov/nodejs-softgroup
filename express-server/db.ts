export class Database {
    state: any[];

    constructor() {
        this.state = [
            {   
                id: 2
             }
        ];
    }

    read(id?: string | number) {
        if (id) {
            return this.state.find(item => item.id === Number(id));
        }
        
        return this.state;
    }

    write(data: any[]) {
        this.state = data;
    }
}
