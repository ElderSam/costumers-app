import { Entity, PrimaryGeneratedColumn, Column, getRepository, Repository, DeepPartial, CreateDateColumn, Timestamp } from 'typeorm';
import { maritalStatusType } from './../types';

let repository: Repository<Costumer>;

interface CostumerInterface {
    name: string,
    birth_date: string,
    marital_status: maritalStatusType,
    CPF: string,
    city: string,
    country_state: string
}

@Entity('costumers')
class Costumer {

    @PrimaryGeneratedColumn()
    id: number;
    //generationStrategy: 'increment'

    @Column({
        type: "varchar",
        length: 50,
        //unique: true,
    })
    name: string;

    @Column({ type: "date" })
    birth_date: string;

    @Column({
        type: "enum",
        enum: [1, 2, 3, 4, 5] //  marital status: 1-Single 2-Married 3-Separated 4-Divorced 5-Widower
    })
    marital_status: maritalStatusType;

    @Column({
        type: "varchar",
        length: 11,
        unique: true,
    })
    CPF: string; // document

    @Column({ type: "varchar", length: 30 })
    city: string;

    @Column({ type: "varchar", length: 2 })
    country_state: string; // initials, e.g.: SP, RJ

    @CreateDateColumn()
    created_at: Timestamp;

    /* ------------------- Methods ----------------------- */
    static async list(id = '0') {
        const repository = getRepository(Costumer);

        if(id !== '0' && id !== undefined) {
            /* ------------- List By Id ------------- */
            return await repository.createQueryBuilder("costumers") 
            .where("id = :id", { id })
            .getOne();
        }

        /* ------------- List All ------------- */
        return await repository.find();
        /*return await repository.createQueryBuilder("costumers") //https://typeorm.io/#/select-query-builder/how-to-create-and-use-a-querybuilder
            .select([
                "id",
                "name",
                "birth_date",
                "marital_status",
                "CPF",
                "city",
                "country_state",
                "created_at"
            ])
            .getRawMany();*/
    }

    static async findByColumn(column: string, value: string) {
        const repository = getRepository(Costumer);

        const auxQuery = `LOWER("${column}") = LOWER(:value)`;

        return await repository.createQueryBuilder("costumers")
            .where(auxQuery, { value })
            .getOne();
    }

    static async insert(costumer: CostumerInterface) {
        repository = getRepository(Costumer);

        await repository.save(costumer); // save on Database

        const auxCostumer = repository.create(costumer); // save on Database
        return await repository.save(auxCostumer);
    }

    static async update(id: string, costumer: object) {
        repository = getRepository(Costumer);

        repository.createQueryBuilder("costumers")
            .update(Costumer)
            .set(costumer)
            .where("id = :id", { id })
            .execute();
    }

    static async delete(id: string) {
        repository = getRepository(Costumer);

        return await repository.delete(id)
    }
}

export default Costumer;