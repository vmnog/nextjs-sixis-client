import React from 'react';
import PostPage from '../PostPage';
import { GlobalStyle } from '../../styles/globals';

export default {
  title: 'Example/PostPage',
  component: PostPage,
  argTypes: {
    id: {
      description: 'Chave única',
    },
    title: {
      description: 'Título principal',
    },
    content: {
      description: 'Conteúdo',
    },
    created_at: {
      description: 'Data de publicação',
    },
  },
};

const post = {
  id: '204b1a8a-a906-489b-968c-a8ecac45df65',
  title: 'O aumento do diálogo entre os diferentes setores produtivos',
  content:
    'No entanto, não podemos esquecer que a complexidade dos estudos efetuados talvez venha a ressaltar a relatividade do investimento em reciclagem técnica. Lorem ipsum dolor senectus id fusce nec litora laoreet consectetur, fermentum platea netus semper et per enim ac metus tellus, orci ac velit platea nulla nostra sagittis maecenas. eget quis mi quam aenean netus nostra turpis euismod odio, egestas mattis rutrum tempor eget morbi ante facilisis. consequat faucibus molestie fusce elit laoreet suspendisse lorem praesent, porta donec consectetur a erat aliquam malesuada ligula, malesuada sed in eros interdum nec inceptos. dolor ac tempus at mauris quis purus nostra aliquet aenean dictumst diam, habitant hendrerit cras senectus vel sit nunc nisi in lacinia quam, molestie praesent rhoncus fermentum suspendisse dictumst magna etiam luctus nulla. Porta consequat primis blandit viverra netus lorem hendrerit per erat duis sapien, aenean placerat egestas dictumst viverra primis aptent aliquet sodales amet metus, congue eu pretium eu eleifend volutpat netus ante nullam vestibulum. ut donec mattis pulvinar elit blandit posuere duis amet, hendrerit nostra risus rhoncus quisque eget purus posuere amet, arcu litora senectus a fermentum diam scelerisque. quisque faucibus maecenas aptent semper vehicula felis erat, eros habitant laoreet inceptos fusce lacus, nullam mattis imperdiet sodales vivamus condimentum. integer dolor vulputate cubilia placerat nibh fermentum habitasse laoreet, morbi potenti ad pulvinar dolor volutpat pellentesque turpis, rutrum eleifend enim ultrices taciti rutrum vehicula. Platea cursus condimentum turpis orci odio dictum mauris vehicula amet condimentum venenatis, nec sit nec vulputate venenatis magna varius posuere tempor vel ipsum taciti, eleifend consectetur ac amet tempor ultrices nisl hac orci commodo. consectetur semper arcu sagittis diam praesent cras nisl, pretium convallis sagittis augue dolor sodales, dictum habitant vivamus phasellus nec accumsan. in laoreet at urna imperdiet at augue eros litora, suspendisse aptent taciti libero a mi metus dui, sagittis purus pharetra conubia dapibus faucibus facilisis. quam taciti tristique aliquet neque leo scelerisque, risus dictumst euismod metus urna egestas, cubilia euismod quam nam molestie nec, tincidunt tristique etiam eget porttitor. Ipsum quisque fermentum egestas curae tortor pretium integer, posuere libero curabitur mollis senectus praesent class, sodales tellus vulputate adipiscing sapien auctor. rhoncus ut tincidunt cubilia etiam purus fringilla conubia, egestas sagittis pretium taciti rutrum gravida tempus tincidunt, pharetra elementum accumsan sapien duis eros. aptent rhoncus netus rutrum velit nisi aenean scelerisque, quisque luctus diam nec phasellus tristique et tincidunt, curabitur porta placerat vehicula sapien accumsan. suscipit varius luctus dolor vitae vulputate suscipit mollis quam, magna gravida tortor donec posuere etiam eget adipiscing eleifend, curabitur faucibus primis habitant pellentesque ipsum consectetur. Aliquet ullamcorper molestie donec class pulvinar nisl potenti justo suspendisse, pretium diam faucibus metus at dictum posuere lectus, purus sem imperdiet leo integer porta faucibus et. diam fames rhoncus cursus praesent vestibulum nisi cubilia faucibus, et mollis etiam massa lacus at vel etiam, volutpat et lobortis ligula ut dolor ut. morbi hendrerit sagittis nulla nostra enim vehicula lacinia eget ipsum, sit vulputate sollicitudin egestas tincidunt ad diam ultricies conubia duis, justo ultrices varius duis vitae nec fringilla etiam. himenaeos mollis pretium curae aliquam eu nec pulvinar libero convallis est class fermentum non, himenaeos nec condimentum rutrum aptent mattis egestas etiam fames aenean ut.',
  created_at: '2021-01-06T20:58:22.435Z',
};

const Template = ({ id, title, content, created_at }) => (
  <>
    <GlobalStyle />
    <PostPage post={{ id, title, content, created_at }} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  id: post.id,
  title: post.title,
  content: post.content,
  created_at: post.created_at,
};
