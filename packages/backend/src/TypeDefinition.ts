import Dataloader from 'dataloader';

import { IUser } from './modules/user/UserModel';
import User from './modules/user/UserLoader';
import { IWine } from './modules/wine/WineModel';

type Key = string;

export type Dataloaders = {
  UserLoader: Dataloader<Key, IUser>;
  WineLoader: Dataloader<Key, IWine>;
};

export type GraphQLContext = {
  user?: User;
  dataloaders: Dataloaders;
};
