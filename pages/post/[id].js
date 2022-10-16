import { useState } from 'react';

const Blogpost = ({ id }) => {
  const [textValue, setTextValue] = useState('');
  console.log(props);

  return (
    <div className="w-full px-10 py-10">
      <h1 className="font-bold">Dynamic Route bases on id post</h1>
      <p>id: {props.id}</p>

      <div className="pt-20">
        <input
          type="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          className
        />
      </div>
    </div>
  );
};

export const getServerSideProps = (context) => {
  //const {id} = context.params;
  return {
    props: { id: context.params.id },
  };
};
export default Blogpost;
