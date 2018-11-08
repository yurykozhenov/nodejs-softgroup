"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
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
exports.Database = Database;
