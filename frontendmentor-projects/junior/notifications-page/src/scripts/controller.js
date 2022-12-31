import * as model from './model.js';
import view from './view.js';

async function controlLoadNotifications() {
  await model.addNotificationsToState()
  view.renderAllNotifications(model.state.notifications)
  view.updateNotificationCount(model.state.unreadNotificationCount)
}

function controlNotificationReadStatus() {
  view.clearUnseenNotifications()
  model.updateReadStatusNotifications()
  view.updateNotificationCount(model.state.unreadNotificationCount)
}

function controlNotificationClick(id) {
  const notif = model.state.notifications.find(n => n.id === Number(id))
  notif.read = true;
  model.updateUnreadNotificationsCount()
  view.updateNotificationCount(model.state.unreadNotificationCount)
}

function init() {
  view.addHandlerLoadNotifications(controlLoadNotifications)
  view.addHandlerMarkAllRead(controlNotificationReadStatus)
  view.addHandlerNotificationClick(controlNotificationClick)
}

init()
