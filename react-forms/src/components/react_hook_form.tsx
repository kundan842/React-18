import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  // destructuring regsiter, handleSubmit function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);
  const onSubmit = (data: FieldValues) => {
    // console.log(errors);
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        />
        {errors.name?.type == "required" && (
          <p className="text-danger">name is requured</p>
        )}
        {errors.name?.type == "minLength" && (
          <p className="text-danger">minimum 3 charcater is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age", { required: true, max: 100 })}
          type="number"
          className="form-control"
        />
        {errors.age?.type == "required" && (
          <p className="text-danger">age is required</p>
        )}
        {errors.age?.type == "max" && (
          <p className="text-danger">max age can be 100</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default Form;
