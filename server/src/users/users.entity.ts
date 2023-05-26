import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    business_id : number;

    @Column()
    user_id : number;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    full_name : string;

    //TODO : role,

    @Column({default: true})
    is_active : boolean;

    @CreateDateColumn()
    created_at : Date;
}