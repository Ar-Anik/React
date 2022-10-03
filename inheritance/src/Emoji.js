import React from 'react';

// eslint-disable-next-line no-unused-vars
class Emoji extends React.Component {
    // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    // eslint-disable-next-line react/require-render-return
    render(decoratedText) {
        // eslint-disable-next-line no-unused-vars
        let text = 'This comes from Emoji Class';

        if(decoratedText)
            text = decoratedText;

        return <div>{ text }</div>;
    }
}

export default Emoji;
