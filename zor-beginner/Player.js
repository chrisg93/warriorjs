const WARRIOR_MAX_HEALTH = 20;

class Player {

  constructor() {
	this._health     = WARRIOR_MAX_HEALTH;

	this._directions = {
		backward     : {
			done     : false,
			opposite : 'forward',
			value    : 'backward'
		},
		forward      : {
			done     : false,
			opposite : 'backward',
			value    : 'forward'
		}
	};
  }

  playTurn(warrior) {
	this._warrior = warrior;
	this._react();
	this._health = this._warrior.health();
  }

  _getDirection() {
	for( let dir in this._directions ) {
		if( this._directions[dir].done === false ) {
			return this._directions[dir].value;
		}
	}
	throw new Error("No direction");
  }

  _getOppositeDirection(direction) {
	for( let dir in this._directions ) {
		if( this._directions[dir].value === direction ) {
			return this._directions[dir].opposite;
		}
	}
	throw new Error("No direction");
  }

  _isCaptive(direction) {
	return this._warrior.feel(direction).isCaptive();
  }

  _isClear(direction) {
	return this._warrior.feel(direction).isEmpty();
  }

  _markAsExpored(direction) {
	for(let dir in this._directions) {
		if( this._directions[dir].value === direction ) {
			this._directions[dir].done = true;
			break;
		}
	}
  }

  _react() {
	let direction = this._getDirection();

	if( this._warrior.feel(direction).isWall()) {
		this._markAsExpored(direction)
	} else if( this._isClear(direction) ) {
		this._sectorClear(direction);
	} else if( this._isCaptive(direction) ) {
		this._warrior.rescue(direction);
	} else {
		this._warrior.attack(direction);
	}
  }

  _sectorClear(direction) {
	if( this._warrior.health() === WARRIOR_MAX_HEALTH || this._health > this._warrior.health() ) {
		if( this._warrior.health() < 9 ) {
			this._warrior.walk(this._getOppositeDirection(direction));
		} else {
			this._warrior.walk(direction);
		}
	} else {
		this._warrior.rest();
	}
  }

}

global.Player = Player;
