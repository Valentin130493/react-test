import { ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "redux/store";
import { imagesArr } from "assets";
import { Header } from './Header';

export default {
  title: 'Navigation/Header',
  component: Header,
}

const StoryStore = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const Template: ComponentStory<typeof Header> = (args) => <StoryStore><Header {...args} /></StoryStore>;

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  type: false,
  logo: <imagesArr.Logo />
};

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  type: true,
  logo: <imagesArr.Logo />,
  user: {
    avtar: "https://dummyimage.com/50x50",
    name: 'Esther Howard',
    email: 'estherhoward@example.com'
  }
};
