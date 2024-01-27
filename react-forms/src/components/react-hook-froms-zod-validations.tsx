import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import z, { INVALID } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// in z object define the form inout fields with its type
const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast of 3 character" }),
  age: z
    .number({ invalid_type_error: "age is required" })
    .min(18, { message: "minimun age should be 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  // destructuring regsiter, handleSubmit function
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
          {...register("name")}
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
