import { AppDataSource } from '@infra/data/datasource'
import { DataSource, EntityTarget, Repository } from 'typeorm'

export class DataSourceSingleton {
    private static instance: DataSourceSingleton
    dataSource: DataSource 
    private constructor() {
        this.dataSource = null
    }
    
    public static getInstance(): DataSourceSingleton {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance;
    }

    public static getRepositoy<T>(E: EntityTarget<T>): Repository<T> {
        return this.getInstance().dataSource.getRepository(E)
    }

    public async initialize(): Promise<DataSource> {
        this.dataSource = AppDataSource()
        if (!this.dataSource.isInitialized) {
            await this.dataSource.initialize().then(() => console.log('Database connected'))
        }

        return this.dataSource
    }
}
