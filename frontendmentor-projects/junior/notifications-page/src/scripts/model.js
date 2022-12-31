import jsonData from './../assets/dummydata.json';

export const state = { notifications: [], unreadNotificationCount: 0 };

class Notification {
  static id = 1;
	constructor(name, type, uniqueText, date, read = false) {
		this.name = name;
    this.fullName = name.toLowerCase().split(' ').join('-')
		this.type = type;
		this.uniqueText = uniqueText;
		this.date = date;
		this.read = read;
    this.id = Notification.id++
    console.log(this.id)
	}

	getReadStatus() {
		return this.read;
	}

	getName() {
		return this.name;
	}

	getDate() {
		return this.date;
	}

	getType() {
		return this.type;
	}

	getUniqueText() {
		return this.uniqueText;
	}

	getAllInfo() {
		return {
			name: this.name,
			type: this.type,
			uniqueText: this.uniqueText,
			date: this.date,
      read: this.read,
      fullName: this.fullName
		};
	}
}

export function updateUnreadNotificationsCount() {
	state.unreadNotificationCount = state.notifications.filter(
		(n) => !n.read
	).length;
}

export function updateReadStatusNotifications() {
  state.notifications.forEach(n => {
    n.read = true;
  })
  state.unreadNotificationCount = 0;
}

function createAndAddNotification({ name, type, uniqueText, date }) {
	const newNotification = new Notification(
		name,
		type,
		uniqueText,
		date,
	);
	state.notifications.push(newNotification);
}

async function getNotifications(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) new Error('Failed to fetch data.');
		const data = await response.json();
		return data;
	} catch (err) {
		throw err;
	}
}

export async function addNotificationsToState() {
	try {
    // const url = jsonData;
		// const notifications = await getNotifications(url);
    const notifications = jsonData;
		for (const n of notifications) {
			createAndAddNotification(n);
		}
		updateUnreadNotificationsCount();
	} catch (err) {
		throw err;
	}
}

// const types = ['reaction', 'followed', 'joined-group', 'private-message', 'commented', 'left-group']
