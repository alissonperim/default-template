import 'dotenv/config'
import { customAlphabet } from 'nanoid'

const { CUSTOM_ALPHABET } = process.env	

export const DOMAIN = {
    USER: 'user',
    ADDRESS: 'addr'
} as const

export const nanoIdGenerator = (domain: string): string => {
    const nanoId = customAlphabet(CUSTOM_ALPHABET, 24)
    return `${domain}_${nanoId()}`
}
