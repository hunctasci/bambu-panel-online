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
                <FormLabel>Musterinin Adi Nedir?</FormLabel>
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
                <FormLabel>Musterinin Soyadi Nedir?</FormLabel>
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
                <FormLabel>Musterinin Kac Yasinda?</FormLabel>
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
                <FormLabel>Musteri Nasil Bir Evde Oturuyor?</FormLabel>
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
                <FormLabel>
                  Musteri Ne Is Yapiyor? Hangi Meslekle Ugrasiyor?
                </FormLabel>
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
                <FormLabel>
                  Musteri Ne Gibi Isler Yaptirmak Istiyor? Elemandan Beklentisi
                  Nedir?
                </FormLabel>
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
                <FormLabel>
                  Musterinin Cocugu Var Mi? Varsa Kac Yaslarinda Kac Cocugu Var?
                  Onlara Bakilsin Istiyor Mu?
                </FormLabel>
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
                <FormLabel>
                  Musterinin Evcil Hayvani Var Mi? Varsa Kac Tane? Boyutlari
                  Nedir? Hayvana Bakilsin Istiyor Mu?
                </FormLabel>
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
              <FormLabel>
                Musterinin Saglik Problemi Var Mi? Kendisine Bakilmasini Istiyor
                Mu?
              </FormLabel>
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
              <FormLabel>
                Musterinin Temizlik Talebi Var Mi? Ne Siklikta Istiyor?
              </FormLabel>
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
              <FormLabel>
                Musteri Yemek Yapilsin Istiyor Mu? Yemek ile Ilgili Tercihi Var
                Mi?
              </FormLabel>
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
              <FormLabel>Musteri Elemana Sigorta Yapmak Istiyor Mu? </FormLabel>
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
              <FormLabel>
                Musterinin Elemanin Maasi icin Butcesi Nedir?
              </FormLabel>
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
              <FormLabel>Musteri ile Ilgili Notlarinizi Girin</FormLabel>
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
