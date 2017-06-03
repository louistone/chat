const localEndPoint = 'http://localhost:8080';

export module ServerEndPoints {
  export const login = localEndPoint + '/auth/login';
  export const signup = localEndPoint + '/auth/signup';
  export const io = localEndPoint + '/';
  export const addContact = localEndPoint + '/contacts/add';
  export const users = localEndPoint +'/users';
  export const messages = localEndPoint + '/messages'
}
