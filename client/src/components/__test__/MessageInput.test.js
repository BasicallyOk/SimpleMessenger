// this is the react testing library functions. Render will render out the component so we can test it, screen is going to be used to query child components
import {render, screen} from '@testing-library/react';
// this will simulate what a real user can do
import userEvent from '@testing-library/user-event';
// Very important, we must import what we're testing
import MessageInput from '../MessageInput'

describe('<MessageInput />', () => {
    describe('typing a message and clicking the send button', () => {
        let sendHandler
        beforeEach(async () => {
            sendHandler = jest.fn().mockName('sendHandler');
            render(<MessageInput onSend={sendHandler} />);
            await userEvent.type(
                screen.getByTestId('messageBox'),
                'New Message'
            )
        })

        it('shows up in the message box', () => {
            expect(screen.getByTestId('messageBox').value).toEqual('New Message');
        })

        it('clears the message box when we send the message and disable the send button', async () => {
            await userEvent.click(
                screen.getByTestId('sendButton')
            );
            expect(screen.getByTestId('messageBox').value).toEqual('');
            expect(screen.getByTestId('sendButton')).toBeDisabled;
        })

        it('calls handleSend when we send a message', async () => {
            await userEvent.click(
                screen.getByTestId('sendButton')
            );
            expect(sendHandler).toHaveBeenCalledWith('New Message')
        })
    })
})