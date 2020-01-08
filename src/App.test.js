import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store.js'
import App from './App';


describe('Card Component', () => {
    it('renders Card component without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer.
            create(<Card id="1" title="First Card" content="Lorem ipsum"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})


describe('List component', () => {

    it('renders component without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key="1" header="First List" cards={[{id:"1",title:"First Card",content:"Lorem ipsum"}]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it('renders the UI as expected', () => {
        const treeOne = renderer.
            create(<List key="2" header="First List" cards={[{id:"1",title:"First Card",content:"Lorem ipsum"}]} />)
            .toJSON();
        expect(treeOne).toMatchSnapshot();
    })
  
})
