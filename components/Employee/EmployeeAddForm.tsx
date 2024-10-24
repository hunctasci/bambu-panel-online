"use client";

import * as React from "react";
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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { competencyOptions } from "@/models/Employee";
import { addEmployee } from "@/lib/actions";
import { employeeFormSchema } from "@/lib/Schemas/employeeFormSchema";

// Infer the schema type
type EmployeeFormData = z.infer<typeof employeeFormSchema>;

export default function EmployeeForm() {
  const form = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      competencies: [],
      address: "",
      phoneNumber: "",
      maritalStatus: "Bekar",
      hasChildren: false,
      previousEmployers: "",
      references: "",
      worksWithPets: false,
      nationality: "",
      residencyPermit: false,
      travelRestriction: false,
      notes: "",
      photo: undefined,
    },
  });

  const onSubmit = async (data: EmployeeFormData) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === "birthDate") {
          const [day, month, year] = value.split(".");
          formData.append(key, `${year}-${month}-${day}`);
        } else if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item));
        } else if (key === "photo" && value instanceof FileList) {
          // Log file details
          const file = value[0];

          // Append file to FormData
          formData.append(key, file);
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    try {
      console.log("Submitting form data:", Object.fromEntries(formData));
      await addEmployee(formData);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad</FormLabel>
                <FormControl>
                  <Input placeholder="Adınızı girin" {...field} />
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
                  <Input placeholder="Soyadınızı girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doğum Tarihi</FormLabel>
                <FormControl>
                  <Input
                    placeholder="GG/AA/YYYY"
                    {...field}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 2 && value.length <= 4) {
                        value = `${value.slice(0, 2)}.${value.slice(2)}`;
                      } else if (value.length > 4) {
                        value = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 8)}`;
                      }
                      field.onChange(value);
                    }}
                  />
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
                  <Input placeholder="Telefon numaranızı girin" {...field} />
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Medeni Durum Seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Evli">Evli</SelectItem>
                    <SelectItem value="Bekar">Bekar</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasChildren"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Çocuk Sahibi mi?</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="competencies"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Yeterlilik</FormLabel>
              </div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {competencyOptions.map((item) => (
                  <FormField
                    key={item.value}
                    control={form.control}
                    name="competencies"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres</FormLabel>
              <FormControl>
                <Input placeholder="Adresinizi girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="previousEmployers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Önceki İşverenler</FormLabel>
              <FormControl>
                <Input placeholder="Önceki işverenlerinizi girin" {...field} />
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
                <Input placeholder="Referanslarınızı girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="worksWithPets"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Evcil Hayvan ile Çalışır Mı?</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Uyruk</FormLabel>
              <FormControl>
                <Input placeholder="Uyruk" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="residencyPermit"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Oturum İzni Var mı?</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="travelRestriction"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Seyahat Kısıtlaması Var mı?</FormLabel>
              </div>
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
                <Input placeholder="Ek notlar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="photo" // Ensure this matches your API expectation
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fotoğraf (Opsiyonel)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept={ACCEPTED_IMAGE_TYPES.join(",")}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file ? e.target.files : undefined); // Handle optional field
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit" className="w-full md:w-auto">
          Gönder
        </Button>
      </form>
    </Form>
  );
}
