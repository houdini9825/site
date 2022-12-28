
export const state = []


class Notification {

  constructor(name, type, uniqueText, date, imgPath) {
    this.name = name;
    this.type = type;
    this.uniqueText = uniqueText;
    this.imgPath = imgPath;
    this.date = date;
  }

  getName() {
    return this.name
  }

  getDate() {
    return this.date
  }

  getType() {
    return this.type
  }

  getImgPath() {
    return this.imgPath
  }

  getUniqueText() {
    return this.uniqueText
  }

  getAllInfo() {
    return {name: this.name, type: this.type, uniqueText: this.uniqueText, imgPath: this.imgPath, date: this.date}
  }
}

export function createAndAddNotification(name, type, uniqueText, date, imgPath) {
  const newNotification = new Notification(name, type, uniqueText, imgPath, date)
  state.push(newNotification)
}

// const types = ['reaction', 'followed', 'joined-group', 'private-message', 'commented', 'left-group']

