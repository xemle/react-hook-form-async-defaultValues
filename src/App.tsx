import { useForm } from 'react-hook-form';
import './App.css'

let called = 1;

let createDefaultValues = () => {
  let isFirst = true;
  return () =>
    new Promise((resolve) => {
      console.log(`Called ${called} times`);
      called++;
      const data = {
        isFirst,
      };
      setTimeout(() => resolve(data), isFirst ? 2000 : 1000);
      isFirst = false;
    });
};

const defaultValues = createDefaultValues()

function App() {
  const { watch } = useForm({
    defaultValues
  })

  const isFirst = watch('isFirst')

  return (
    <>
      <h1>react-hook-form</h1>
      <h2>async defaultValues in StrictMode</h2>
      <div className="card">
        isFirst: {isFirst ? "true" : "false"} (type {typeof isFirst})
      </div>
    </>
  )
}

export default App
