<div align="center">
    <img src="img/logo.png" alt="alt text" width="120" height="40">
</div>

## Showcase

1.  Create context of app

```typescript
enum Menus {
  Main = "main",
  Settings = "settings",
}

interface User {
  name: string;
  selectedMenu: Menus;
}

export interface BotContext {
  user: User;
}
```

<hr>

2.  Create actions you will use:

```typescript
const gotoMenuAction = createParametarizedAction<BotContext, Menus>(
  "goto menu",
  (menu, { send }, { user }) => {
    user.selectedMenu = menu;
    send(`Welcome to ${menu}`);
  }
);

const setRandomUsername = createAction<BotContext>(
  "set random username",
  ({ send }, { user }) => {
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);
    const randomName = ["Fish", "Sticks", "Kanye West", "Toivo", "SunBoy"];
    user.name = randomName[getRandomInt(4)];
    send(`Your name is ${user.name}`);
  }
);
```

<hr>

3.  Create menu constructors:

```typescriptreact
const SettingsMenu: R1IO.FC<BotContext> = async () => (
  <menu>
    <row>
      <button label={`Get random username`} onClick={setRandomUsername()} />
    </row>
    <row>
      <button onClick={gotoMenuAction(Menus.Settings)}>Goto main menu</button>
    </row>
  </menu>
);

const MainMenu: R1IO.FC<BotContext> = ({ user }) => (
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
```

<hr>

4.  Create router & your context filler (middleware):

```typescript
const user: User = {
  name: "Dmitriy",
  selectedMenu: Menus.Main,
};

const router = createBuilder<BotContext, Menus>(
  {
    [Menus.Main]: { build: MainMenu },
    [Menus.Settings]: { build: SettingsMenu },
  },
  ({ user }) => user.selectedMenu
);

export const RootMiddleware = createMiddleware(router, async () => ({ user }));
```

<hr>
