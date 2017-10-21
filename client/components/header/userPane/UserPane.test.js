import UserPane from './UserPane';
import {userPaneUsername, userPaneLink, userPaneButton, userPane} from './UserPane.css';

describe('UserPane component must:', () => {
    const props = {
        username: 'Alexander',
        isOpen: true,
        closePane: jest.fn(),
        logout: jest.fn()
    }
    const wrapperWithoutProps = mount(<UserPane logout={props.logout} closePane={props.closePane}/>);
    const wrapperWithProps = mount(<UserPane {...props}/>);

    it('have default props', () => {
        expect(wrapperWithoutProps.props().username).toEqual('Guest');
        expect(wrapperWithoutProps.props().isOpen).toEqual(false);
        expect(wrapperWithoutProps.props().closePane).toEqual(props.closePane);
    })

    it('have assigned props', () => {
        expect(wrapperWithProps.props().username).toEqual(props.username);
        expect(wrapperWithProps.props().isOpen).toEqual(props.isOpen);
        expect(wrapperWithProps.props().closePane).toEqual(props.closePane);
    })

    it('does not show when prop isShown default or false', () => {
        expect(wrapperWithProps.props().username).toEqual(props.username);

    })

    it(`have element with class ${userPaneUsername}`, () => {
        expect(wrapperWithoutProps.find(`.${userPane}`).length).toEqual(0);
    })

    const linkCount = 3;
    const links = wrapperWithProps.find(`a.${userPaneLink}`);
    it(`have ${linkCount} elements with class ${userPaneLink}`, () => {
        expect(links.length).toEqual(3);
    })

    const linkNames = ['Your Profile', 'Favorites', 'Settings'];

    for (let i = 0; i < linkCount; i++) {
        it(`${i + 1}th element with text ${linkNames[i]}`, () => {
            expect(links.at(i).text()).toEqual(linkNames[i]);
        })
    }

    const button = wrapperWithProps.find(`.${userPaneButton}`);
    const logoutButtonText = 'Log Out';
    it(`have button with class ${userPaneButton} and text ${logoutButtonText}`, () => {
        expect(button.length).toEqual(1);
        expect(button.text()).toEqual(logoutButtonText);
    })

    it(`have properly react on button click`, () => {
        button.simulate('click');
        button.simulate('click');
        expect(props.logout.mock.calls.length).toBe(2);
    })

    it(`not have button with class ${userPaneButton} and text ${logoutButtonText}`, () => {
        const button = wrapperWithoutProps.find(`.${userPaneButton}`);
        expect(button.length).toEqual(0);
    })
})