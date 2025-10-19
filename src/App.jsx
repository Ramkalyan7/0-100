import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./Store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <CountRenderer />
    </RecoilRoot>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <p>{count}</p>
      <IncreaseButton />
      <DecreaseButton />
      <EvenCountRenderer/>
    </div>
  );
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return(
    <>
      {isEven ? <p>Count is event</p>:<p>Count is Odd</p>}
    </>
  )
}

const IncreaseButton = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(c=>c+1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

const DecreaseButton = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(c=>c-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
