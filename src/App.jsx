import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";
import { countAtom } from "./Store/atoms/count";

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
    </div>
  );
}

const IncreaseButton = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

const DecreaseButton = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
