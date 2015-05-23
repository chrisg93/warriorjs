const WARRIOR_MAX_HEALTH = 20;

class Player {

  playTurn(warrior) {

  	if( warrior.feel().isEmpty() ) {

  		if( warrior.health() < WARRIOR_MAX_HEALTH ) {
  			warrior.rest()
  		} else {
  			warrior.walk();
  		}

  	} else {
  		warrior.attack();
  	}

  }

}

global.Player = Player;
