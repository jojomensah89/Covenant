<<<<<<< HEAD
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
=======
"use client";
import React, { useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { MultiValue } from "react-select";

import { Label } from "@/components/ui/label";

// const CovenantSigners = () => {
//   //   const [signers, setSigners] = useState<MultiValue>({});
//   return (
//     <div className="flex flex-col">
//       <div className="space-y-2">
//         <Label htmlFor="">Signers</Label>
//         <CreatableReactSelect isMulti />
//       </div>
//       <div className="mt-2 space-y-2">
//         <Label htmlFor="">Observers</Label>
//         <CreatableReactSelect isMulti />
//       </div>
//     </div>
//   );
// };

// export default CovenantSigners;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
<<<<<<< HEAD
import { Checkbox } from "./ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

const requiredVerifications = [
=======
import { toast } from "@/components/ui/use-toast";

const items = [
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
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

<<<<<<< HEAD
const formSchema = z.object({
  requiredVerifications: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  // checked: z.boolean().default(false).optional(),
  creator: z.string(),
  observers: z.number().min(1).max(3),
  // requiredVerifications: z.array(z.string()),
});

const CovenantSigners = ({
  handleSignersChange,
  defaultAddress,
}: {
  handleSignersChange: (formData: {
    creator: string;
    observers: number;
    requiredVerifications: string[];
  }) => void;
  defaultAddress: `0x${string}` | undefined;
}) => {
  const [numberOfObservers, setNumberOfObservers] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // checked: false,
      creator: defaultAddress,
      observers: numberOfObservers,
      requiredVerifications: ["anonaadhaar", "zkemail", "semaphore"],
      // requiredVerifications: [],
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    handleSignersChange({
      creator: defaultAddress ?? "",
      observers: numberOfObservers ?? 1, // Use the updated numberOfObservers value
      requiredVerifications: values?.requiredVerifications, // Extract requiredVerifications from form values
    });

    console.log(values);
=======
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function CovenantSigners() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
<<<<<<< HEAD
          name="creator"
          render={({ field }) => (
            // <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
            //   <FormControl>
            //     <Checkbox
            //       checked={field.}
            //       onCheckedChange={field.onChange}
            //     />
            //   </FormControl>
            //   <div className="space-y-1 leading-none">
            //     <FormLabel>
            //       Use different settings for my mobile devices
            //     </FormLabel>
            //     <FormDescription>
            //       You can manage your mobile notifications in the{" "}
            //     </FormDescription>
            //   </div>
            // </FormItem>
            <FormItem>
              <FormLabel>Creator of Agreement Address</FormLabel>
              <FormControl>
                <Input {...field} type="text" disabled value={defaultAddress} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="observers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Witnesses</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => {
                    setNumberOfObservers(parseInt(e.target.value));
                  }}
                  value={numberOfObservers}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="my-4">
          <FormDescription>Required Signed Verifications</FormDescription>
        </div>
        {requiredVerifications.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="requiredVerifications"
            render={({ field }) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== item.id)
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              );
            }}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CovenantSigners;
=======
          name="items"
          render={() => (
            <FormItem>
              <div className="flex flex-col">
                <div className="space-y-2">
                  <Label htmlFor="">Signers</Label>
                  <CreatableReactSelect isMulti />
                </div>
                <div className="mt-2 space-y-2">
                  <Label htmlFor="">Observers</Label>
                  <CreatableReactSelect isMulti />
                </div>
              </div>
              <div className="my-4">
                <FormDescription>
                  Required Signed Verifications
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
