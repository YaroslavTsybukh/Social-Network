import { Timestamp } from 'firebase/firestore'

export interface IPostField {
    id: string
    description: string
    urls: string[]
    timestamp: Timestamp
}
