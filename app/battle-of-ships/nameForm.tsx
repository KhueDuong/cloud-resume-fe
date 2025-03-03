import React, { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(4).max(50),
});

interface ChatBoxProps {
  setName: (name: string) => void;
}

export default function NameForm(chatBoxProps: ChatBoxProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onNameSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.name);
    chatBoxProps.setName(values.name);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNameSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your name to start</FormLabel>
                <FormControl>
                  <Input placeholder="khuebanhzai" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
