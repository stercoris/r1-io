import R1IO, {
  createAction,
  createRouter,
  createMiddleware,
  createParametarizedAction,
} from '../dist';

enum Menus {
  Main = 'main',
  Settings = 'settings',
}

interface User {
  name: string;
  selectedMenu: Menus;
}

export interface BotContext {
  user: User;
}

const gotoMenuAction = createParametarizedAction<BotContext, Menus>(
  'goto menu',
  async (menu, {send}, {user}) => {
    user.selectedMenu = menu;
    await send(`Welcome to ${menu}`);
  }
);

const setRandomUsername = createAction<BotContext>(
  'set random username',
  async ({send}, {user}) => {
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);
    const randomName = ['Fish', 'Sticks', 'Kanye West', 'Toivo', 'SunBoy'];
    user.name = randomName[getRandomInt(4)];
    await send(`Your name is ${user.name}`);
  }
);

const SettingsMenu: R1IO.FC<BotContext> = async () => (
  <menu>
    <row>
      <button label='Get random username' onClick={setRandomUsername()} />
    </row>
    <row>
      <button onClick={gotoMenuAction(Menus.Settings)}>Goto main menu</button>
    </row>
  </menu>
);

const MainMenu: R1IO.FC<BotContext> = function ({user}) {
  return (
    <menu>
      <row>
        <button label={`Hello ${user.name}`} />
      </row>
      <row>
        <button onClick={gotoMenuAction(Menus.Settings)}>
          Goto settings menu
        </button>
      </row>
    </menu>
  );
};

const user: User = {
  name: 'Dmitriy',
  selectedMenu: Menus.Main,
};

const router = createRouter<BotContext, Menus>(
  {
    [Menus.Main]: {build: MainMenu},
    [Menus.Settings]: {build: SettingsMenu},
  },
  ({user}) => user.selectedMenu
);

export const RootMiddleware = createMiddleware(router, async () => ({user}));
