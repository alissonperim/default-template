import { BaseDomain } from '@shared/domain'
import { Column } from 'typeorm'


export class User extends BaseDomain {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    name!: string

    @Column(
        {
            name: 'last_name',
            type: 'varchar',
            length: 120,
        }
    )
    lastName!: string

    @Column(
        {
            name: 'phone_number',
            type: 'varchar',
            length: 14,
            unique: true,
        }
    )
    phoneNumber!: string

    @Column(
        {
            name: 'email',
            type: 'varchar',
            length: 120,
            unique: true,
        },
    )
    email!: string

    @Column(
        {
            name: 'birth_date',
            type: 'date',
            nullable: true,
        }
    )
    birthDate!: Date
}
