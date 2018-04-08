import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  omahaRaw: string;
  
  // PCS : Problem Classification Scheme
  @Column()
  pcsDomain: string;

  @Column()
  pcsProblem: number;

  @Column()
  pcsSign: number;

  // IS: Intervention Scheme
  @Column({ nullable: true })
  isLevel: string;
  
  @Column({ nullable: true })
  isService: string;
  
  // PRSO: Problem Rating Scale for Outcomes
  @Column({ nullable: true })
  prsoKnowledge: number;

  @Column({ nullable: true })
  prsoBehavior: number;

  @Column({ nullable: true })
  prsoStatus: number;

  @Column({ type: "datetime", nullable: false })
  timestamp: Date;
}