'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
    this.date = [new Date().getMonth(), new Date().getDate()];
    this.id = (Date.now() + '').slice(-10);
    this.count = 0;
  }
}

class Running extends Workout {
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.name = 'Running';
    this.cadence = cadence;
    this.calculatePace();
  }

  calculatePace() {
    if (this.duration && this.distance)
      this.pace = Math.round(this.duration / this.distance);
    else this.pace = 0;
  }
}

class Cycling extends Workout {
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.name = 'Cycling';
    this.elevationGain = elevationGain;
    this.calculateSpeed();
  }

  calculateSpeed() {
    if (this.distance && this.duration)
      this.speed = Math.round(this.distance / (this.duration / 60));
    else this.speed = 0;
  }
}

class App {
  constructor() {
    this.map = L.map('map');
    this._getWorkouts();
    this._getPosition();
    this._showForm();
    this._toggleElevationField();
    this._newWorkout();
    this._toggleLocation();
  }

  _getWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts'));
    this.workouts = [];
    if (workouts) {
      workouts.forEach(workout => {
        if (workout.name === 'Running')
          this.workouts.push(
            new Running(
              workout.distance,
              workout.duration,
              workout.coords,
              workout.cadence
            )
          );
        else
          this.workouts.push(
            new Cycling(
              workout.distance,
              workout.duration,
              workout.coords,
              workout.elevationGain
            )
          );
      });
    }
  }

  _loadWorkouts() {
    for (let workout of this.workouts) {
      if (workout.name === 'Running') {
        this._addRunningWorkoutSummary(workout);
      } else {
        this._addCyclingWorkoutSummary(workout);
      }
      this._addWorkoutMarker(`${workout.name.toLowerCase()}-popup`, workout);
    }
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this._loadMap([latitude, longitude]);
        this._loadWorkouts();
      },
      function () {
        alert('Could not get your position.');
      }
    );
  }

  _loadMap(position) {
    this.map.setView(position, 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  _showForm() {
    this.map.on('click', mapEvent => {
      form.classList.remove('hidden');
      inputDistance.focus();
      this.lastClicked = mapEvent;
    });
  }

  _toggleLocation() {
    containerWorkouts.addEventListener('click', e => {
      const target = e.target.closest('.workout');
      if (target) {
        const workout = this.workouts.find(el => el.id === target.dataset.id);
        workout.count++;
        this.map.setView(workout.coords);
      }
    });
  }

  _toggleElevationField() {
    inputType.addEventListener('change', function (e) {
      inputCadence.parentElement.classList.toggle('form__row--hidden');
      inputElevation.parentElement.classList.toggle('form__row--hidden');
    });
  }

  _clearFormData() {
    inputType.value = 'running';
    inputDistance.value = '';
    inputDuration.value = '';
    inputCadence.value = '';
    inputElevation.value = '';
  }

  _validateData() {
    const data = this._getFormData();
    if (data.every(el => el)) return true;
    else {
      alert(
        'Invalid data, please ensure all fields are filled out with integers and resubmit.'
      );
    }
  }

  _getFormData() {
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const coords = [this.lastClicked.latlng.lat, this.lastClicked.latlng.lng];
    const cadence = Number(inputCadence.value);
    const elevationGain = Number(inputElevation.value);
    if (inputType.value === 'running')
      return [distance, duration, coords, cadence];
    else return [distance, duration, coords, elevationGain];
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  _newWorkout() {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (this._validateData()) {
        form.classList.add('hidden');
        if (inputType.value === 'running') {
          const newWorkout = new Running(...this._getFormData());
          this.workouts.push(newWorkout);
          this._addRunningWorkoutSummary(newWorkout);
          this._addWorkoutMarker('running-popup', newWorkout);
        } else {
          const newWorkout = new Cycling(...this._getFormData());
          this.workouts.push(newWorkout);
          this._addCyclingWorkoutSummary(newWorkout);
          this._addWorkoutMarker('cycling-popup', newWorkout);
        }
        this._clearFormData();
        this._setLocalStorage();
      }
    });
  }

  _addWorkoutMarker(markerClass, workoutObject) {
    const currentObj = this;
    const popupText = `${workoutObject.name === 'Running' ? '🏃‍♂️' : '🚴‍♀️'} ${
      workoutObject.name
    } on ${months[workoutObject.date[0]]} ${workoutObject.date[1]}`;
    const marker = L.marker(workoutObject.coords)
      .addTo(currentObj.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          content: popupText,
          autoClose: false,
          closeOnClick: false,
          className: markerClass,
        })
      )
      .openPopup();
    currentObj.map.setView(workoutObject.coords);
  }

  _addRunningWorkoutSummary(workoutObject) {
    const workoutHtml = `<li class="workout workout--running" data-id="${
      workoutObject.id
    }">
      <h2 class="workout__title">Running on ${months[workoutObject.date[0]]} ${
      workoutObject.date[1]
    }</h2>
    <img class="workout-button" src="images/edit-button.png">
      <div class="workout__details">
        <span class="workout__icon">🏃‍♂️</span>
        <span class="workout__value">${workoutObject.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workoutObject.duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workoutObject.pace}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workoutObject.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    form.insertAdjacentHTML('afterend', workoutHtml);
  }

  _addCyclingWorkoutSummary(workoutObject) {
    const workoutHtml = `<li class="workout workout--cycling" data-id="${
      workoutObject.id
    }">
    <h2 class="workout__title">Cycling on ${months[workoutObject.date[0]]} ${
      workoutObject.date[1]
    }</h2>
    <div class="workout__details">
      <span class="workout__icon">🚴‍♀️</span>
      <span class="workout__value">${workoutObject.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workoutObject.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workoutObject.speed}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workoutObject.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
    form.insertAdjacentHTML('afterend', workoutHtml);
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
