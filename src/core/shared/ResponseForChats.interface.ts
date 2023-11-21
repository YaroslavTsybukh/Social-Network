import { Timestamp, Unsubscribe } from 'firebase/firestore'
import { IUser } from './user.interface.ts'

export interface IChatInfo {
    date: Timestamp
    userInfo: {
        displayName: string
        uid: string
    }
}
export interface IChatsInfo {
    [uid: string]: IChatInfo
}

export interface ISearchedChatsFromServer {
    data: IChatInfo
    unsub: Unsubscribe
}

export interface IUserChatsFromServer {
    data: IChatsInfo
    unsub: Unsubscribe
}

export interface IFriendsFromServer {
    data: IUser[]
    unsub: Unsubscribe
}
