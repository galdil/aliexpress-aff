import { useState } from 'react';
import MyInput from '../../Components/MyInput/MyInput';
import reqFromOpenAi from './openAiGateway';

const injectComponent = async (inputValue: string): Promise<void> => {
  const componentText = await reqFromOpenAi(inputValue);
  const appElement = document.getElementsByClassName('App')[0];
  const container = document.createElement('div');
  container.innerHTML = componentText;
  appElement.appendChild(container);
};

const ComponentMaker = (): JSX.Element => {
  const [applied, setApplied] = useState<boolean>(false);
  return (
    <>
      <MyInput
        placeholder="Enter component description"
        onInputApply={(inputValue: string): void => {
          injectComponent(inputValue);
          setApplied(true);
        }}
      />
      <br />
      {applied
      && <span>Here you go</span>}
    </>
  );
};

export default ComponentMaker;
