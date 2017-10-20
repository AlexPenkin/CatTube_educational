import UserPane from './UserPane';
import {userPaneUsername, userPaneLink, userPaneButton} from './UserPane.css';

describe('UserPane component must:', () => {
    const props = {
        username: 'Alexander',
        isOpen: true
    }
    const wrapperWithoutProps = mount(<UserPane />);
    const wrapperWithProps = mount(<UserPane {...props}/>);

    it('have default props', () => {
        expect(wrapperWithoutProps.props().username).toEqual('Guest');
        expect(wrapperWithoutProps.props().isOpen).toEqual(false);
    })

    it('have assigned props', () => {
        expect(wrapperWithProps.props().username).toEqual(props.username);
        expect(wrapperWithProps.props().isOpen).toEqual(props.isOpen);
    })

    it(`have element with class ${userPaneUsername}`, () => {
        expect(wrapperWithProps.exists(`.${userPaneUsername}`)).toBeTruthy();
    })

    const linkCount = 3;
    const links = wrapperWithProps.find(`.${userPaneLink}`);
    it(`have ${linkCount} elements with class ${userPaneLink}`, () => {
        expect(links.length).toEqual(3);
    })

    const linkNames = ['Your Profile', 'Favorites', 'Settings'];

    for (let i = 0; i < linkCount; i++) {
        it(`${i + 1} element with text ${linkNames[i]}`, () => {
            expect(links.at(i).text()).toEqual(linkNames[i]);
        })
    }

    const logoutButtonText = 'Log Out';
    it(`have button with class ${userPaneButton} and text ${logoutButtonText}`, () => {
        const button = wrapperWithProps.find(`.${userPaneButton}`);
        expect(button.length).toEqual(1);
        expect(button.text()).toEqual(logoutButtonText);
    })

    it(`not have button with class ${userPaneButton} and text ${logoutButtonText}`, () => {
        const button = wrapperWithoutProps.find(`.${userPaneButton}`);
        expect(button.length).toEqual(0);
    })
})