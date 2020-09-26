export default class User {
    constructor(username, inviteCode) {
      this.id = ''
      this.roomId = ''
      this.owner = false
      this.username= username
      this.inviteCode = inviteCode
    }
  }