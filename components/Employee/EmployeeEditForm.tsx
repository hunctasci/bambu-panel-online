/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { updateEmployee } from "@/lib/actions";
import { EmployeeType } from "@/lib/types";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

interface EmployeeEditFormProps {
  employee: Partial<EmployeeType> & { _id: string };
}

export default function EmployeeEditForm({ employee }: EmployeeEditFormProps) {
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      age: employee.age,
      address: employee.address,
      phoneNumber: employee.phoneNumber,
      maritalStatus: employee.maritalStatus,
      smoking: employee.smoking,
      residencyPermit: employee.residencyPermit,
      experience: employee.experience,
      petsInfo: employee.petsInfo,
      competencies: employee.experience,
      references: employee.references,
      salaryExpectation: employee.salaryExpectation,
      residencyExpectation: employee.residencyExpectation,
      preferredDistrict: employee.preferredDistrict,
      notes: employee.notes,
      image: employee.image,
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

    formData.append("id", employee._id);
    setIsPending(true);

    try {
      await updateEmployee(formData);
      setIsPending(false);
    } catch (error) {
      console.error("Employee update error:", error);
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personelin Ismi Nedir?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personelin Soyadi Nedir?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Soyad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personel Kac Yasinda?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Yas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Nerede Oturuyor? Adresi Nedir? Nerede Oturuyor?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Adres" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personelin Telefon Numarasi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Telefon Numarasi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Evli mi? Cocugu Var Mi? Varsa Kac Yasinda?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Medeni durum" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="smoking"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personel Sigara iciyor Mu?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sigara kullaniyor mu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="residencyPermit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personelin Oturma Izni Var Mi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Oturum izni var mi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personelin Daha Onceki Deneyimleri Nedir?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Deneyim girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="competencies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Neler Yapabiliyor? Becerileri Neler?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Becerileri girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="petsInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Evcil Hayvan Olan Evde Calisir Mi? Hayvan Bakmayi
                  Biliyor Mu?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Evcil Hayvan Bilgisi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="references"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personelin Referansi Var Mi? Tavsiye Eden Biri Var Mi?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Referans girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salaryExpectation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personel Ne Kadar Maas Istiyor?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Maas Beklentisi girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="residencyExpectation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Oturum Iznine Ihtiyac Duyuyor Mu? Yatili Calismak
                  Istiyor Mu?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="oturum beklentisi girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredDistrict"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Personel Nerede Calismak Istiyor? Semt Tercihi Var Mi?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tercih edilen bolge girin"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fotograf</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept={ACCEPTED_IMAGE_TYPES.join(",")}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file ? e.target.files : undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personel Ile Ilgili Notlariniz Neler?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter notes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
          {isPending ? "Updating..." : "Update"}
        </Button>
      </form>
    </Form>
  );
}
