import Api from '../Api'

class AuthService {
  async join(user) {
    let response = await Api.post('q/join', { 
        username: user.username,
        inviteCode: user.inviteCode
    })
    if(response.data.accessToken){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data
  }

  logout() {
    let user = localStorage.getItem('user')
    if(user.owner) {
        Api.delete('room/' + user.roomId)
    }
    localStorage.removeItem('user');
  }

  create() {
    return Api.get('create');
  }
}

export default new AuthService();