import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
};
