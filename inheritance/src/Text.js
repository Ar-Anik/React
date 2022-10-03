// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Emoji from './Emoji';

// eslint-disable-next-line no-unused-vars
class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am From Text Class', '\uD83D\uDC9C');

        return super.render(decoratedText);
    }
}

export default Text;
