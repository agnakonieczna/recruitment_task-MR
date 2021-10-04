import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

const HouseForm = ({ addSingleHouse }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onFormSubmit = (data) => {
    addSingleHouse(data);
    setFormSubmitted(true);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>Adres</label>
        <input {...register('address', { required: true })} type='text' />
        {errors.address && <p>Pole wymagane</p>}
        <label>Liczba pięter</label>
        <input {...register('floorsNumber', { required: true })} type='number' />
        {errors.floorsNumber && <p>Pole wymagane</p>}
        <label>Opis</label>
        <textarea {...register('description', { required: true })} error={errors.description} />
        {errors.description && <p>Pole wymagane</p>}
        <label>Etykieta</label>
        <input type='text' {...register('label', { required: true })} error={errors.label} />
        {errors.label && <p>Pole wymagane</p>}
        <button>Dodaj</button>
      </form>
      {formSubmitted && <Redirect to='/house-list' />}
    </section>
  );
};

export default HouseForm;
