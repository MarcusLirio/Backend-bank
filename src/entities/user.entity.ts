import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne
} from "typeorm";
import { Account } from "./account.entity";
import { Exclude } from "class-transformer";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @OneToOne(() => Account, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  account: Account;
}
