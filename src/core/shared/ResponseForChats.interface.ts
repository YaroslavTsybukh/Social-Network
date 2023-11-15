import { IUser } from './user.interface.ts'
import { Unsubscribe } from 'firebase/firestore'

export interface IDataFromServer {
    data: IUser[]
    unsub: Unsubscribe
}
