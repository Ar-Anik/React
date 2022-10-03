function Text({addEmoji, addBracket}) {
    let txt = "This is comes From Text Function";

    if(addEmoji)
        txt = addEmoji(txt, '\uD83D\uDC9C');

    if(addBracket)
        txt = addBracket(txt);

    return <div> {txt} </div>;
}

export default Text;
