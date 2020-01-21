import React from 'react';
import Card from './Card';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('Card component', () => {
    //Smoke Test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />,div);
        ReactDOM.unmountComponentAtNode(div);
    })

    //Snapshot Test
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Card title="First List" content="Fix the bugs" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
