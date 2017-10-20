import AuthInput from './AuthInput';

describe('Authentification inputs:', () => {
    const props = {
        name: 'login',
        type: 'text',
        postName: 'login',
        value: 'test',
        placeholder: 'Enter login',
        handler: jest.fn(),
        img: 'ss',
        validation: jest.fn()
    }

    const wrapper = mount(
        <AuthInput { ...props }/>
    );

    for (let i in props) {
        if(typeof props[i] !== 'function') {
            it(`Has prop ${i}`, () => {
                expect(wrapper.props()[i]).toEqual(props[i]);
            });
        }
    }

    it('Has one input', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });

    const invokeTimes = 100;

    it(`Handler must invokes ${invokeTimes} times and has right arguments`, () => {
        const input = wrapper.find('input');
        for (let i = 0; i < invokeTimes; i++) {
            input.simulate('change', {target:{
                value: `test ${i + 1}`
            }});
        }
        expect(props.handler.mock.calls.length).toBe(invokeTimes);
        for (let i = 0; i < invokeTimes; i++) {
            expect(props.handler.mock.calls[i][0]).toBe(`${props.postName}`);
            expect(props.handler.mock.calls[i][1]).toBe(`test ${i + 1}`);
        }
    });

});