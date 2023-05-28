import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Business{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    name : string;

    @Column({default: true})
    is_active : boolean;

    @CreateDateColumn()
    created_at : Date;

    /*
        TODO : 
        plan
    */
}