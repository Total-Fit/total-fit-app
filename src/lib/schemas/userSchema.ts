import z from "zod";
import validateCPF from "../utils/security/validation";

const contactRegex = /^[1-9][0-9]9\d{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reRGDigits = /^(?!([0-9])\1{6,8})\d{7,9}$/;
const reCrefPEDigits = /^(?!([0-9])\1{4,8})\d{5,9}$/;
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/;
const jobHoursRegex = /^\d{2}:\d{2}$/;

const UserSchema = z
  .object({
    id: z.number().nonnegative(),
    name: z.string().min(1, { error: "Nome Completo é obrigatório" }).trim(),
    contact: z
      .string()
      .regex(contactRegex, {
        error: "Número de contato deve ser no parão brasileiro incluindo o DDD",
      })
      .trim(),
    username: z
      .string()
      .min(6, {
        error: "Nome de usuário deve ter pelo entre 6 e 30 caracteres",
      })
      .max(30, {
        error: "Nome de usuário deve ter pelo entre 6 e 30 caracteres",
      })
      .trim(),
    password: z
      .string()
      .min(8, { error: "Senha deve ter entre 8 e 16 caracteres" })
      .max(16, { error: "Senha deve ter entre 8 e 16 caracteres" })
      .regex(passwordRegex, {
        error:
          "Senha deve conter no mínimo uma letra, um número e um caractere especial",
      })
      .trim(),
    email: z
      .string()
      .regex(emailRegex, {
        error: "Insira um email válido",
      })
      .trim(),
    cpf: z
      .string()
      .length(11, { error: "CPF deve ter 11 dígitos" })
      .refine((cpf) => validateCPF(cpf), { error: "CPF inválido" }),
    rg: z
      .string()
      .min(7, { error: "RG deve ter entre 7 e 9 dígitos" })
      .max(9, { error: "RG deve ter entre 7 e 9 dígitos" })
      .regex(reRGDigits, { error: "RG inválido" }),
    dateOfBirth: z.string().regex(dateRegex, {
      error: "Data deve estar no formato ISO YYYY-MM-DD",
    }),
    address: z.string().min(5).max(100),
    instagram: z.string().min(2).max(100).nullable().default(null),
    role: z.enum(["student", "teacher", "admin"]),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .strict();

const TeacherSchema = UserSchema.extend({
  cref: z
    .string()
    .min(5, { error: "CREF-PE deve ter entre 5 e 9 dígitos" })
    .max(9, { error: "CREF-PE deve ter entre 5 e 9 dígitos" })
    .regex(reCrefPEDigits, { error: "CREF-PE inválido" }),
  academicFormation: z.string(),
  activeArea: z.string(),
  scheduler: z
    .array(
      z.object({
        dayOfWeek: z.string(),
        startTime: z.string().regex(jobHoursRegex, {
          message: "Horário deve estar no formato HH:MM",
        }),
        endTime: z.string().regex(jobHoursRegex, {
          message: "Horário deve estar no formato HH:MM",
        }),
      })
    )
    .nonempty(),
  contractValue: z.number().nonnegative(),
  bankPix: z.object({
    bank: z.string(),
    key: z.string(),
  }),
  shirtNumber: z.number().nonnegative(),
});

const StudentSchema = UserSchema.extend({
  weight: z.number().nonnegative(),
  height: z.number().nonnegative(),
  billingDay: z
    .number()
    .min(1, { error: "Dia de cobrança deve ser entre 1 e 31" })
    .max(31, { error: "Dia de cobrança deve ser entre 1 e 31" }),
  lastPaymentDate: z.string().regex(dateRegex, {
    error: "Data deve estar no formato ISO YYYY-MM-DD",
  }),
  hasMedicalRestriction: z.boolean(),
  medicalRestrictionsDetails: z
    .string()
    .min(10, {
      error: "Detalhes da restrição devem ter no mínimo 10 caracteres",
    })
    .max(500, {
      error: "Detalhes da restrição médica devem ter no máximo 500 caracteres",
    })
    .nullable()
    .default(null),
  trainingGoal: z.string(),
  trainingProgram: z
    .array(
      z.object({
        instructor: z.string(),
        label: z.enum(["Treino A", "Treino B", "Treino C"]),
        trainingDetails: z.array(
          z.object({
            exercise: z.string(),
            sets: z
              .number()
              .min(1, { error: "Séries devem ser um número positivo" }),
            reps: z
              .number()
              .min(1, { error: "Repetições devem ser um número positivo" }),
          })
        ),
      })
    )
    .nullable()
    .default(null),
});

export const CreateStudentSchema = StudentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const UpdateStudentSchema = StudentSchema.partial();

export const CreateTeacherSchema = TeacherSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const UpdateTeacherSchema = TeacherSchema.partial();

export type CreateStudentInput = z.infer<typeof CreateStudentSchema>;
export type UpdateStudentInput = z.infer<typeof UpdateStudentSchema>;
export type CreateTeacherInput = z.infer<typeof CreateTeacherSchema>;
export type UpdateTeacherInput = z.infer<typeof UpdateTeacherSchema>;

export type StudentProfileDTO = Pick<
  z.infer<typeof StudentSchema>,
  | "name"
  | "contact"
  | "email"
  | "address"
  | "weight"
  | "height"
  | "billingDay"
  | "lastPaymentDate"
  | "hasMedicalRestriction"
  | "medicalRestrictionsDetails"
  | "instagram"
  | "role"
>;

export type TeacherProfileDTO = Pick<
  z.infer<typeof TeacherSchema>,
  | "name"
  | "contact"
  | "email"
  | "cref"
  | "address"
  | "instagram"
  | "activeArea"
  | "scheduler"
  | "contractValue"
  | "shirtNumber"
  | "role"
>;
