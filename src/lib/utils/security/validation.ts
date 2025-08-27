const reCPFDigits = /^(?!([0-9])\1{10})\d{11}$/;

const validateCPF = (cpf: string): boolean => {
  if (!cpf) return false;
  if (!reCPFDigits.test(cpf)) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const calc = (sliceLen: number) => {
    const nums = cpf.slice(0, sliceLen).split("").map(Number);
    const factor = sliceLen + 1;
    const sum = nums.reduce((acc, n, i) => acc + n * (factor - i), 0);
    const mod = (sum * 10) % 11;

    return mod === 10 ? 0 : mod;
  };

  const dv1 = calc(9);
  const dv2 = calc(10);

  return dv1 === Number(cpf[9]) && dv2 === Number(cpf[10]);
};

export default validateCPF;
