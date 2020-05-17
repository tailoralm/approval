import { Status } from './status';

export class Solicitation {
    id: number;
    name: string;
    description: string;0
    price: number;
    status: Status;
    observation: string;

    constructor(){
        this.status = Status.PENDENTE;
        this.observation = '';
    }
}
