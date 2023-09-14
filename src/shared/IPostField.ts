import { Timestamp } from 'firebase/firestore'

export interface IPostField {
    id: string
    description: string
    images: string[]
    timestamp: Timestamp
}
