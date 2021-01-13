import PublishContainer from '../containers/PublishContainer';
import RouterMiddleware from '../components/RouterMiddleware';

const Publish = () => {
  return (
    <RouterMiddleware>
      <PublishContainer />
    </RouterMiddleware>
  );
};

export default Publish;
