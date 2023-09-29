import React from 'react';
import config from '../../config.json';
import State from '../utils/structure/State';
import { History } from './history/interface';
import User from '../utils/structure/User';
import File from '../utils/structure/File';

export const Ps1 = (params: { user: User; dir: File }) => {
  let user = params.user;
  let dir = params.dir;
  return (
    <div>
      <span className="text-dark-blue">
        {user?.username ?? 'I have no name!'}
      </span>
      <span className="text-dark-gray">@</span>
      <span className="text-dark-foreground">
        {config.ps1_hostname}
      </span>
      <span className="text-dark-gray">
        :{dir?.getPathForUser(user) ?? '/'}${' '}
      </span>
    </div>
  );
};

export default Ps1;
