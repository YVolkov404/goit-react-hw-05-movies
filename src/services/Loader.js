import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      // visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '-30px',
        right: '50%',
        transform: 'translate(50%, 50%)',
        zIndex: '99999',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#72bf80', '#e53a35', '#fffd82', '#e53a35', '#72bf80']}
    />
  );
};
