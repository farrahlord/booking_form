export const InputValidationByType: Record<
  "text" | "email" | "tel",
  RegExp | undefined
> = {
  text: undefined,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  tel: /^\d*$/,
};
