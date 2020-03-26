import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';



// tslint:disable-next-line: class-name
export class inMemomyDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
        {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
        {id: 1, name: 'Saude', description: 'Plano de Saude e Remedios'},
        {id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
        {id: 1, name: 'Salario', description: 'Recebimento de Salário'},
        {id: 1, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];

        return {categories};
    }
}
