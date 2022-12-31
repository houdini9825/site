import images from 'url:./../assets/images/*.webp'


class View {
   static typesText = {'reaction': 'reacted to your recent post', 'followed': 'followed you', 'joined-group': 'has joined your group', 'private-message': 'sent you a private message', 'comment': 'commented on your picture', 'left-group': 'left the group'}
   #notificationsParentElement = document.querySelector('.notifications-container')
   #headerContainer = document.querySelector('header')


   #generatePictureHTML() {
    return `<img src="${images['image-chess']}" alt="" class="notification-img">`
   }

   #generatePrivateMessageHTML(notification) {
      return `<p class="private-message">${notification.uniqueText}</p>`
   }

   #checkIfRead(status) {
      return status ? '' : 'not-seen';
   }


   #renderSingleNotification(notification) {
      const html = 
   `<div class="notification ${this.#checkIfRead(notification.read)}" data-val="${notification.id}">
      <div class="notification-left-container">
         <img src="${images[`avatar-${notification.fullName}`]}" alt="" class="profile-img" />
         <div class="notification-text-container">
            <p class="notification-description">
               <span class="person-name">${notification.name} </span>${View.typesText[notification.type]}
               <span class="notification-entity">${notification.type !== 'private-message' ? notification.uniqueText: ''}</span>
            </p>
            <p class="time-since-occurred">${notification.date}</p>
            ${notification.type === 'private-message' ? this.#generatePrivateMessageHTML(notification) : ''}
         </div>
      </div>
      ${notification.type === 'comment' ? this.#generatePictureHTML() : ''}
   </div>`

   this.#notificationsParentElement.insertAdjacentHTML('beforeend', html)
   }

   renderAllNotifications(notificationsData) {
      for (const notification of notificationsData) {
         this.#renderSingleNotification(notification)
      }
   }

   updateNotificationCount(count) {
      const countElement = document.querySelector('.notification-number')
      countElement.textContent = count;
   }

   clearUnseenNotifications() {
      const notifications = document.querySelectorAll('.notification')

      notifications.forEach(n => {
         n.classList.remove('not-seen')
      })
   }


   addHandlerNotificationClick(handler) {
      this.#notificationsParentElement.addEventListener('click', function(e) {
         const notif = e.target.closest('.notification')
         if (!notif) return
         notif.classList.remove('not-seen')
         handler(notif.dataset.val)
      })
   }

   addHandlerLoadNotifications(handler) {
      window.addEventListener('load', handler)
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