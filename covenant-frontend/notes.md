import React, { useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const items = [
  {
    id: "anonaadhaar",
    label: "Anon Aadhaar",
  },
  {
    id: "zkemail",
    label: "ZK Email",
  },
  {
    id: "semaphore",
    label: "Semaphore",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const CovenantSigners = ({
  handleSignersChange,
  defaultAddress,
}: {
  handleSignersChange: (data: { items: string[] }) => void;
  defaultAddress: `0x${string}`; // Default wallet address
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [], // Empty array initially
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    handleSignersChange(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-col">
                <div className="space-y-2">
                  <Label htmlFor="">Signers</Label>
                  <CreatableReactSelect
                    isMulti
                    defaultValue={[
                      { value: defaultAddress, label: defaultAddress },
                    ]}
                    onChange={(selectedOptions) => {
                      // Convert selected options to array of values
                      const selectedValues = selectedOptions.map(
                        (option) => option.value
                      );
                      // Update form field value
                      field.onChange(selectedValues);
                    }}
                  />
                </div>
                <div className="mt-2 space-y-2">
                  <Label htmlFor="">Observers</Label>
                  <CreatableReactSelect isMulti />
                </div>
              </div>
              <div className="my-4">
                <FormDescription>Required Signed Verifications</FormDescription>
              </div>
              {items.map((item) => (
               
               
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CovenantSigners;






























"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
