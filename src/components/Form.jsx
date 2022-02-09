import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from './UI/Input';
import Button from './UI/Button';
import { addItemAction } from '../store/itemsReducer';
import { changeVisibility } from '../store/visibilitySlice';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

function Form() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    const item = {
      id: Date.now(),
      name: data.name,
      price: parseFloat(data.price),
      completed: false,
    };

    dispatch(addItemAction(item));
    dispatch(changeVisibility());
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {errors.name && <span>{errors.name.message}</span>}
      <Controller
        defaultValue=""
        name="name"
        control={control}
        rules={{ required: 'Введіть назву товару' }}
        render={({ field }) => (
          <Input
            placeholder="Найменування товару"
            {...field}
          />
        )}
      />
      {errors.price && <span>{errors.price.message}</span>}
      <Controller
        defaultValue=""
        name="price"
        control={control}
        rules={{
          required: 'Введіть ціну товару',
          min: {
            value: 10,
            message: 'Ціна не може бути нижче 0',
          },
        }}
        render={({ field }) => (
          <Input
            type="number"
            placeholder="Ціна"
            onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
            {...field}
          />
        )}
      />
      <Button type="submit">
        Додати
      </Button>
    </StyledForm>
  );
}

export default Form;
