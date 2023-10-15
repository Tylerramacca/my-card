import { html } from 'lit';
import '../src/my-card.js';

export default {
  title: 'MyCard',
  component: 'my-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-card
      style="--my-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
