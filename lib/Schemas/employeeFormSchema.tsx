import { z } from "zod";
import { isValid, parse } from "date-fns";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const employeeFormSchema = z.object({
  firstName: z.string().min(2, { message: "Ad en az 2 karakter olmalı." }),
  lastName: z.string().min(2, { message: "Soyad en az 2 karakter olmalı." }),
  birthDate: z.string().refine(
    (val) => {
      const parsed = parse(val, "dd.MM.yyyy", new Date());
      return isValid(parsed);
    },
    { message: "Geçerli bir tarih giriniz (GG.AA.YYYY)" },
  ),

  address: z.string().min(5, { message: "Adres en az 5 karakter olmalı." }),
  phoneNumber: z.string().min(10, { message: "Telefon numarası geçersiz." }),
  maritalStatus: z.enum(["Evli", "Bekar"]),
  hasChildren: z.boolean(),
  previousEmployers: z.string().optional(),
  references: z.string().optional(),
  worksWithPets: z.boolean(),
  nationality: z.string().min(2, { message: "Uyruk gerekli." }),
  residencyPermit: z.boolean(),
  travelRestriction: z.boolean(),
  notes: z.string().optional(),
  photo: z
    .any()
    .optional()
    .refine(
      (files) =>
        !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE,
      `Maksimum dosya boyutu 5MB.`,
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      "Sadece .jpg, .jpeg, .png ve .webp formatları kabul edilir.",
    ),
});
