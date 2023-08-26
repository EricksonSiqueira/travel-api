export const missingFieldTextResponse = <T>(
  receivedFields: T,
  requiredFields: (keyof T)[]
) => {
  const missingFields = requiredFields.filter(
    (requiredField) => !receivedFields[requiredField]
  );

  if (!missingFields.length) {
    return '';
  }

  return `Missing fields: ${missingFields.join(', ')}`;
};
