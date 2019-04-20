import Dataloader from 'dataloader';

import { IUser } from './modules/user/UserModel';
import User from './modules/user/UserLoader';
import { IBeer } from './modules/beer/BeerModel';

type Key = string;

export type Dataloaders = {
  UserLoader: Dataloader<Key, IUser>;
  BeerLoader: Dataloader<Key, IBeer>;
};

export type GraphQLContext = {
  user?: User;
  dataloaders: Dataloaders;
};
