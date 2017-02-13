import {ProvinceDivition1} from './province-divition1'

export class ProvinceDivition1Service{
    getProvinceDivitions1(): [ProvinceDivition1]{

        let p: [ProvinceDivition1] = [
            new ProvinceDivition1(1, "Lanus"),
            new ProvinceDivition1(2, "Avellaneda"),
            new ProvinceDivition1(3, "Lomas de Zamora"),
            new ProvinceDivition1(4, "Otras")
        ];

        return p;
    }
}