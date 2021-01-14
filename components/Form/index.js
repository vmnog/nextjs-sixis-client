import React from 'react';
import Input from '../Input';
import Button from '../Button';

import { useFormik } from 'formik';
import { Container } from './styles';
import { useRouter } from 'next/router';
import { api } from '../../services/axios';

const Form = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      titulo: '',
      conteudo: '',
    },
    onSubmit: (values) => handlePublish(values),
  });

  const handlePublish = async (values) => {
    console.log({ values });

    const { data } = await api.post('posts', {
      title: values.titulo,
      content: values.conteudo,
    });

    console.log({ data });

    router.push('/');
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Título"
          value={formik.values.titulo}
          onChange={formik.handleChange}
        />
        <Input
          label="Conteúdo"
          value={formik.values.conteudo}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          label="Publicar"
          onClick={() => {}}
          style="filled"
        />
      </form>
    </Container>
  );
};

export default Form;
