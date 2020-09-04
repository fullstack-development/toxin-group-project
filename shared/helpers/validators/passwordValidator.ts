const passwordValidator = (password: string): string | null => {
  const errorMessage = (password && password.length < 8 ? 'Пароль должен содержать минимум 8 символов' : null);
  return errorMessage;
};

export { passwordValidator };
