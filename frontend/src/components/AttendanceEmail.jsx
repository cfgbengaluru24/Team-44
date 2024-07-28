import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const AttendanceEmail = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emails: [{ email: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails",
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9EDC9]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Absent Students
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id}>
              <label
                htmlFor={`email-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Student {index + 1}'s email
              </label>
              <div className="flex space-x-2">
                <input
                  id={`email-${index}`}
                  type="email"
                  {...register(`emails.${index}.email`, { required: true })}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.emails?.[index]?.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-1 text-[#a9b838]"
                >
                  Remove
                </button>
              </div>
              {errors.emails?.[index]?.email && (
                <span className="text-red-500 text-sm">
                  Email is required
                </span>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ email: "" })}
            className="w-full bg-[#a9b838] text-white py-2 px-4 rounded-md hover:bg-[#5e671a] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add Email
          </button>
          <button
            type="submit"
            className="w-full bg-[#a9b838] text-white py-2 px-4 rounded-md hover:bg-[#5e671a] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttendanceEmail;
