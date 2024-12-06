/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { updateEmployer } from "@/lib/actions";
import { EmployerType } from "@/lib/types";

const employerFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  age: z.string().optional(),
  placeType: z.string().optional(),
  occupation: z.string().optional(),
  requestedJob: z.string().optional(),
  childrenInfo: z.string().optional(),
  petsInfo: z.string().optional(),
  healthCondition: z.string().optional(),
  cleaningRequests: z.string().optional(),
  mealRequests: z.string().optional(),
  insuranceInterest: z.string().optional(),
  budget: z.string().optional(),
  notes: z.string().optional(),
});

type EmployerFormData = z.infer<typeof employerFormSchema>;

interface EmployerEditFormProps {
  employer: Partial<EmployerType> & { _id: string };
}

export default function EmployerEditForm({ employer }: EmployerEditFormProps) {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<EmployerFormData>({
    resolver: zodResolver(employerFormSchema),
    defaultValues: {
      firstName: employer.firstName || "",
      lastName: employer.lastName || "",
      age: employer.age || "",
      placeType: employer.placeType || "",
      occupation: employer.occupation || "",
      requestedJob: employer.requestedJob || "",
      childrenInfo: employer.childrenInfo || "",
      petsInfo: employer.petsInfo || "",
      healthCondition: employer.healthCondition || "",
      cleaningRequests: employer.cleaningRequests || "",
      mealRequests: employer.mealRequests || "",
      insuranceInterest: employer.insuranceInterest || "",
      budget: employer.budget || "",
      notes: employer.notes || "",
    },
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    console.log(data);

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === "image" && value instanceof FileList) {
          const file = value[0];
          formData.append(key, file);
        } else if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      }
    });

    formData.append("id", employer._id);
    setIsPending(true);

    try {
      await updateEmployer(formData);
      setIsPending(false);
    } catch (error) {
      console.error("Employer update error:", error);
      setIsPending(false);
    }
  };

  const formFields = [
    { name: "firstName", label: "Ad" },
    { name: "lastName", label: "Soyad" },
    { name: "age", label: "Yaş" },
    { name: "placeType", label: "Yer Tipi" },
    { name: "occupation", label: "Meslek" },
    { name: "requestedJob", label: "İstenen İş" },
    { name: "childrenInfo", label: "Çocuk Bilgisi" },
    { name: "petsInfo", label: "Evcil Hayvan Bilgisi" },
    { name: "healthCondition", label: "Sağlık Durumu" },
    { name: "cleaningRequests", label: "Temizlik İstekleri" },
    { name: "mealRequests", label: "Yemek İstekleri" },
    { name: "insuranceInterest", label: "Sigorta İlgisi" },
    { name: "budget", label: "Bütçe" },
    { name: "notes", label: "Notlar" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          {formFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof EmployerFormData}
              render={({ field: fieldProps }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`${field.label} giriniz`}
                      className="resize-none"
                      {...fieldProps}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Güncelleniyor..." : "Güncelle"}
        </Button>
      </form>
    </Form>
  );
}
