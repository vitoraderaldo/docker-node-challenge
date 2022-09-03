import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;
}