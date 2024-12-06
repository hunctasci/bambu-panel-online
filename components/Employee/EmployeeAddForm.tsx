/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import { addEmployee } from "@/lib/actions";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export default function EmployeeForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      phoneNumber: "",
      maritalStatus: "",
      smoking: "",
      residencyPermit: "",
      experience: "",
      competencies: "",
      references: "",
      salaryExpectation: "",
      residencyExpectation: "",
      preferredDistrict: "",
      image: "",
      notes: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsPending(true);
    const formData = new FormData();

    // Append form fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && value instanceof FileList) {
        const file = value[0];
        formData.append(key, file);
        console.log(file);
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });

    try {
      await addEmployee(formData);
      console.log("Form submitted successfully:", Object.fromEntries(formData));
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Ad girin" {...field} />
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
                  <FormLabel>Soyad</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Soyad girin" {...field} />
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
                  <FormLabel>Yaş</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Yaş girin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Contact and Status Section */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adres</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Adres girin" {...field} />
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
                  <FormLabel>Telefon Numarası</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Telefon Numarası girin" {...field} />
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
                  <FormLabel>Medeni Durum</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Medeni Durum girin" {...field} />
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
                  <FormLabel>Sigara Kullanımı</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Sigara kullanımı hakkında bilgi girin"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="residencyPermit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Oturma Izni</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Oturma Izni bilgisi girin"
                    {...field}
                  />
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
                <FormLabel>Deneyim</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Deneyiminiz hakkında bilgi girin"
                    {...field}
                  />
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
                <FormLabel>Beceriler</FormLabel>
                <FormControl>
                  <Textarea placeholder="Becerileri girin" {...field} />
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
                <FormLabel>Referanslar</FormLabel>
                <FormControl>
                  <Textarea placeholder="Referanslari girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Professional Info Section */}

          <FormField
            control={form.control}
            name="salaryExpectation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ucret Beklentisi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ucret Beklentisi girin" {...field} />
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
                <FormLabel>Oturum Beklentisi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Oturum Beklentisi girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Info Section */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="preferredDistrict"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bolge Tercihi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Bolge Tercihi girin" {...field} />
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
                <FormLabel>Notlar</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notlar girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Special handling for the Image field */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fotoğraf</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept={ACCEPTED_IMAGE_TYPES.join(",")}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file ? e.target.files : ""); // Handle optional field
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
          {isPending ? "Ekleniyor..." : "Ekle"}
        </Button>
      </form>
    </Form>
  );
}
