"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { postNewPicture } from "../api/pictures";

const MAX_FILE_SIZE = 200000;

// form schema
const formSchema = z.object({
  author: z.string().min(1).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  description: z.string().min(1).max(100),
  picture: z
    .any()
    .refine((files) => files?.size <= MAX_FILE_SIZE, `Max file size is 2MB.`),
});

export function ImageForm() {
  const [file, setFile] = useState<any>(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      description: "",
      email: "",
      picture: undefined,
    },
  });
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the first file
    const selectedFile = event.target.files?.[0];

    if (selectedFile != undefined) {
      const reader = new FileReader();

      // convert to base64
      reader.readAsDataURL(selectedFile);

      // perform actions on load
      reader.onload = async () => {
        try {
          const base64Data = reader.result as string;

          // check if file is too large
          if (selectedFile.size > 20000) {
            throw new Error("File is too large (> 2Mb).");
          } else {
            setFile(base64Data);
          }
        } catch (error) {
          console.error(error);
          setFile(null);
        }
      };
    }
  };
  async function onFileSubmit(values: z.infer<typeof formSchema>) {
    //formSchema.parse(form);
    console.log("Form data is valid:", form);
    if (file != undefined) {
      // remove metadata "data:image/png"
      const base64ImageString = file.replace(/^data:image\/[a-z]+;base64,/, "");
      // post via API to server
      const res = await postNewPicture({
        base64ImageData: base64ImageString,
        fileName: file.name,
        author: values.author,
        description: values.description,
      });
      console.log(res);
    }
  }

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-10">
      <div className="flex flex-1 bg-slate-50 rounded-md justify-center items-center border border-gray-500">
        {file ? (
          <Image
            src={file}
            alt="Uploaded preview"
            className="max-w-full max-h-48 rounded-md"
          />
        ) : (
          <span className="text-gray-500">Preview your image</span>
        )}
      </div>
      <div className="h-[550px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFileSubmit)}
            className="space-y-8 "
          >
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="khuebanhzai" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="duonghoangkhue.2004@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="picture"
              render={({ field: { ref, name, onBlur, onChange } }) => (
                <FormItem>
                  <FormLabel>Upload your file</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        onChange(file); // Update form state
                        onFileUpload(e); // Run custom file handling logic
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
