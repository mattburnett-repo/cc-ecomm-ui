import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import ItemQuantity  from '../../widgets/ItemQuantity';

describe('<ItemQuantity /> feature tests', () => {
    beforeEach(() => render(<ItemQuantity />));

    it('should render an item-quantity-selector element', () => {
        screen.getByRole('presentation', { name: /item-quantity-selector/i})
    })
    it('should select options', () => {
        window.alert = () => {}; // https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        let theVals = screen.getAllByRole('presentation', {name: /item-quantity-selector/i});

        fireEvent.change(theVals[0], { target: { value: 7 } })
        let options = theVals[0];
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeFalsy();
        expect(options[5].selected).toBeFalsy();
        expect(options[6].selected).toBeTruthy();
        expect(options[7].selected).toBeFalsy();
        expect(options[8].selected).toBeFalsy();
        expect(options[9].selected).toBeFalsy();
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<ItemQuantity /> ).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature
