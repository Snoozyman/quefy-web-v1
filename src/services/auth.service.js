import Api from '../Api'

class AuthService {
  async join(user) {
    let response = await Api.post('join', { 
        nickname: user.nickname,
        inviteCode: user.inviteCode
    })
    if(response.data.accessToken){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data
  }

  logout() {
    let user = localStorage.getItem('user')
    if(user.role) {
        Api.delete('room/' + user.roomId)
    }
    localStorage.removeItem('user');
  }

  create() {
    return Api.get('create' + 'create');
  }
}

export default new AuthService();