class View {
   static typesText = {'reaction': 'reacted to your recent post', 'followed': 'followed you', 'joined-group': 'has joined your group', 'private-message': 'sent you a private message', 'comment': 'commented on your picture', 'left-group': 'left the group'}
   #notificationsParentElement = document.querySelector('.notifications-container')
   #headerContainer = document.querySelector('header')

   generatePrivateMessageHTML() {

   }

   generatePictureCommentHTML() {
    
   }

   generateGenericHTML() {

   }

   renderSingleNotification() {

   }

   renderAllNotifications() {

   }

   updateNotificationCount() {

   }

   clearUnseenNotifications() {

   }

   addHandlerMarkAllRead(handler) {
      this.#headerContainer.addEventListener('click', function(e) {
        const element = e.target.closest('.mark-as-read')
        if (!element) return

        handler()
      })
   }
}

export default new View()