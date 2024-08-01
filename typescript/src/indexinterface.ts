import { TodoAuthor } from "./interface/todo";
import { OtherUser, User } from "./interface/user";

// interface user
const userFromInterface: User = {
    id: 1,
    username: 'john.doe',
    password: 'password',
    isActive: true,
    userStatus() {
        console.log('Terakhir login ....');
    },
    address: 'Tangerang'
}

console.log({ userFromInterface });

const userFromTypeAlias: OtherUser = {
    id: 1,
    username: 'maria',
    password: 'password',
    isActive: false,
    userStatus() {
        console.log('Terakhir login ....');
    },
}

console.log({ userFromTypeAlias });

type METHOD= 'GET' | 'POST' | 'PUT' | 'DEL'


const methodAPI: METHOD = 'GET';
// const methodAPI: METHOD = 'PATHC'; akan terjadi error karena PATCH bukan bagian dari METHOD


// interface todo
const todo: TodoAuthor = {
    id: 1,
    task: 'Makan',
    isComplete: true,
    createdAt: '',
    updatedBy: '',

}

todo.task = 'Makan'