const WARRIOR_MAX_HEALTH = 20;

class Player {

  constructor() {
  	this._health = WARRIOR_MAX_HEALTH;
  }

  playTurn(warrior) {
  	this._warrior = warrior;
  	this._react();
  	this._health = this._warrior.health();
  }

  _sectorClear() {
	if( this._warrior.health() === WARRIOR_MAX_HEALTH || this._health > this._warrior.health() ) {
		this._warrior.walk();
	} else {
		this._warrior.rest();
	}
  }

  _react() {
  	this._isClear() ? this._sectorClear() : this._warrior.attack();
  }

  _isClear() {
  	return this._warrior.feel().isEmpty();
  }

}

global.Player = Player;
