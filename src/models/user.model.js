export default class User {
    constructor(nickname, inviteCode) {
      this.id = ''
      this.roomId = ''
      this.owner = false
      this.nickname = nickname
      this.inviteCode = inviteCode
    }
  }