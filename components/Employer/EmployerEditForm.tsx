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
    { name: "firstName", label: "Musterinin Adi Nedir?" },
    { name: "lastName", label: "Musterinin Soyadi Nedir?" },
    { name: "age", label: "Musterinin Kac Yasinda?" },
    { name: "placeType", label: "Musteri Nasil Bir Evde Oturuyor?" },
    {
      name: "occupation",
      label: "Musteri Ne Is Yapiyor? Hangi Meslekle Ugrasiyor?",
    },
    {
      name: "requestedJob",
      label:
        "Musteri Ne Gibi Isler Yaptirmak Istiyor? Elemandan Beklentisi Nedir?",
    },
    {
      name: "childrenInfo",
      label:
        "Musterinin Cocugu Var Mi? Varsa Kac Yaslarinda Kac Cocugu Var? Onlara Bakilsin Istiyor Mu?",
    },
    {
      name: "petsInfo",
      label:
        "Musterinin Evcil Hayvani Var Mi? Varsa Kac Tane? Boyutlari Nedir? Hayvana Bakilsin Istiyor Mu?",
    },
    {
      name: "healthCondition",
      label:
        "Musterinin Saglik Problemi Var Mi? Kendisine Bakilmasini Istiyor Mu?",
    },
    {
      name: "cleaningRequests",
      label: "Musterinin Temizlik Talebi Var Mi? Ne Siklikta Istiyor?",
    },
    {
      name: "mealRequests",
      label:
        "Musteri Yemek Yapilsin Istiyor Mu? Yemek ile Ilgili Tercihi Var Mi?",
    },
    {
      name: "insuranceInterest",
      label: "Musteri Elemana Sigorta Yapmak Istiyor Mu?",
    },
    { name: "budget", label: "Musterinin Elemanin Maasi icin Butcesi Nedir?" },
    { name: "notes", label: "Musteri ile Ilgili Notlarinizi Girin" },
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
