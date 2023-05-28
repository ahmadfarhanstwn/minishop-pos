import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Business{
    @PrimaryGeneratedColumn()
    business_id : number;

    @Column()
    business_username : string;

    @Column()
    business_email : string;

    @Column()
    business_name : string;

    @Column({default: true})
    business_is_active : boolean;

    @CreateDateColumn()
    business_created_at : Date;

    /*
        TODO : 
        plan
    */
}