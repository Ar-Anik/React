import Bracket from './Bracket';
import Emoji from './Emoji';
import Text from './Text_And_Bracket';

function App(){
  return (
    <>
      <Text />

      <br />
      <br />

      <Emoji>
          {({addEmoji}) => <Text addEmoji={addEmoji} />}
      </Emoji>

      <br />
      <br />

      <Bracket>
          {({addBracket}) => <Text addBracket={addBracket} />} 
      </Bracket>

      <br />
      <br />

      <Emoji>
          {({ addEmoji }) => ( 

            <Bracket>

                { ({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} /> }

            </Bracket>

          )}
      </Emoji>

      <br />
      <br />

      <Bracket>
            
          {({addBracket}) => (
              <Emoji>

                {({addEmoji}) => <Text addBracket={addBracket} addEmoji={addEmoji} />}

              </Emoji>
          )}
            
      </Bracket>

    </>
  );

}

export default App;
