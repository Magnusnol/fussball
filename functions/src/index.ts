import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

// export * from './app/player/new-player.trigger';

export * from './app/button.request';
export * from './app/create-team.trigger';
export * from './app/game-close.trigger';
export * from './app/player/player-stat.trigger';
export * from './app/table.callable';


