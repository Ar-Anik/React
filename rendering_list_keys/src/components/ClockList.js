import Clock from "./Clock";

function ClockList({quantities = []}){
    return (
        <>
        <div>
            {quantities.map((key, index) =>
                <Clock key={index}/>
            )}
        </div>
        <div>
            {quantities.map(() =>
                <Clock key={Math.random()} />
            )}
        </div>
        <div>
            {quantities.map((key) =>
                <Clock key={key} />
            )}
        </div>
        </>
    )
}

export default ClockList;