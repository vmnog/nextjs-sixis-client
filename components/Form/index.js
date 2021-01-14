import React, { useEffect } from 'react';
import * as Yup from 'yup';

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
    validationSchema: Yup.object({
      titulo: Yup.string().required('O campo título é obrigatório'),
      conteudo: Yup.string().required('O campo conteúdo é obrigatório'),
    }),
    onSubmit: (values) => handlePublish(values),
  });

  const handlePublish = async (values) => {
    await api.post('posts', {
      title: values.titulo,
      content: values.conteudo,
    });

    router.push('/');
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        {formik.touched.titulo && formik.errors.titulo && (
          <span>{formik.errors.titulo}</span>
        )}
        <Input
          label="Título"
          name="titulo"
          value={formik.values.titulo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength={50}
        />
        {formik.touched.conteudo && formik.errors.conteudo && (
          <span>{formik.errors.conteudo}</span>
        )}
        <Input
          label="Conteúdo"
          name="conteudo"
          value={formik.values.conteudo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button type="submit" label="Publicar" style="filled" />
      </form>
    </Container>
  );
};

export default Form;
