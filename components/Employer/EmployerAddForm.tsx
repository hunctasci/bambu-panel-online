/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { addEmployer } from "@/lib/actions";

export default function EmployerForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      placeType: "",
      occupation: "",
      requestedJob: "",
      childrenInfo: "",
      petsInfo: "",
      healthCondition: "",
      cleaningRequests: "",
      mealRequests: "",
      insuranceInterest: "",
      budget: "",
      notes: "",
    },
  });

  const transformFormData = (data: any) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString()); // Append all as strings
      }
    });
    return formData;
  };

  const onSubmit = async (data: any) => {
    const formData = transformFormData(data);
    setIsPending(true);

    try {
      await addEmployer(formData);
      setIsPending(false);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad</FormLabel>
                <FormControl>
                  <Textarea placeholder="Adınızı girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Soyad</FormLabel>
                <FormControl>
                  <Textarea placeholder="Soyadınızı girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Age */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yaş</FormLabel>
                <FormControl>
                  <Textarea placeholder="Yaşınızı girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Place Type */}
          <FormField
            control={form.control}
            name="placeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yer Tipi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Yer tipini girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Occupation */}
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meslek</FormLabel>
                <FormControl>
                  <Textarea placeholder="Mesleğinizi girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Requested Job */}
          <FormField
            control={form.control}
            name="requestedJob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İstenen İş</FormLabel>
                <FormControl>
                  <Textarea placeholder="İstenen iş giriniz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Children Info */}
          <FormField
            control={form.control}
            name="childrenInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Çocuklar Hakkında</FormLabel>
                <FormControl>
                  <Textarea placeholder="Çocuklar hakkında bilgi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pets Info */}
          <FormField
            control={form.control}
            name="petsInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Evcil Hayvanlar</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Evcil hayvanlar hakkında bilgi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Health Condition */}
        <FormField
          control={form.control}
          name="healthCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sağlık Durumu</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Sağlık durumu hakkında bilgi"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cleaning Requests */}
        <FormField
          control={form.control}
          name="cleaningRequests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Temizlik Talepleri</FormLabel>
              <FormControl>
                <Textarea placeholder="Temizlik talepleri" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Meal Requests */}
        <FormField
          control={form.control}
          name="mealRequests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Yemek Talepleri</FormLabel>
              <FormControl>
                <Textarea placeholder="Yemek talepleri" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Insurance Interest */}
        <FormField
          control={form.control}
          name="insuranceInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sigorta İlgisi</FormLabel>
              <FormControl>
                <Textarea placeholder="Sigorta ile ilgili bilgi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Budget */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bütçe</FormLabel>
              <FormControl>
                <Textarea placeholder="Bütçenizi girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notes */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notlar</FormLabel>
              <FormControl>
                <Textarea placeholder="Notlar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
