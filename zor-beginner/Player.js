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

  _isCaptive() {
  	return this._warrior.feel().isCaptive();
  }

  _react() {
  	if( this._isClear() ) {
  		this._sectorClear();
  	} else if( this. _isCaptive() ) {
  		this._warrior.rescue();
  	} else {
  		this._warrior.attack();
  	}
  }

  _isClear() {
  	return this._warrior.feel().isEmpty();
  }

}

global.Player = Player;
