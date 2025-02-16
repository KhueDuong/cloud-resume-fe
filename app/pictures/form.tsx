"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Loader2 } from "lucide-react";

const MAX_FILE_SIZE = 5000000;
const MAX_SMALL_FILE_SIZE = 1000000;
const MAX_MEDIUM_FILE_SIZE = 3000000;

const MAX_WIDTH = 100000;
const MAX_HEIGHT = 100000;

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
  const [submitButtonDisable, setSubmitButtonDisable] =
    useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      description: "",
      email: "",
      picture: undefined,
    },
  });

  function resizeMe(img: HTMLImageElement, strength: number) {
    const canvas = document.createElement("canvas");

    let width = img.width;
    let height = img.height;

    // calculate the width and height, constraining the proportions
    if (width > height) {
      if (width > MAX_WIDTH) {
        //height *= max_width / width;
        height = Math.round((height *= MAX_WIDTH / width));
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        //width *= max_height / height;
        width = Math.round((width *= MAX_HEIGHT / height));
        height = MAX_HEIGHT;
      }
    }

    // resize the canvas and draw the image data into it
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL("image/jpeg", strength);
  }

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the first file
    const selectedFile = event.target.files?.[0];

    if (selectedFile != undefined) {
      const reader = new FileReader();

      // convert to base64
      //reader.readAsDataURL(selectedFile);
      reader.readAsArrayBuffer(selectedFile);

      // perform actions on load
      reader.onload = async () => {
        try {
          // check if file is too large
          if (selectedFile.size > MAX_FILE_SIZE) {
            throw new Error("File is too large (> 2Mb).");
          } else {
            const url = URL.createObjectURL(selectedFile);
            console.log("alo");

            // resize image
            const image = new Image();
            image.src = url;
            image.onload = function () {
              // have to wait till it's loaded
              console.log("2");

              let resized;
              if (selectedFile.size < MAX_SMALL_FILE_SIZE) {
                resized = resizeMe(image, 1); // resized image url
              } else if (selectedFile.size < MAX_MEDIUM_FILE_SIZE) {
                resized = resizeMe(image, 0.7); // resized image url
              } else if (selectedFile.size < MAX_FILE_SIZE) {
                resized = resizeMe(image, 0.5); // resized image url
              }
              setFile(resized);
            };
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
      setSubmitButtonDisable(true);
      const res = await postNewPicture({
        base64ImageData: base64ImageString,
        fileName: file.name,
        author: values.author,
        description: values.description,
      });

      window.location.reload();
      console.log(res);
    }
  }

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-10">
      <div className="flex flex-1 bg-slate-50 rounded-md justify-center items-center border border-gray-500">
        {file ? (
          <img
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
            <Button type="submit" disabled={submitButtonDisable}>
              {submitButtonDisable ? (
                <>
                  Submitting
                  <Loader2 className="animate-spin" />
                </>
              ) : (
                <>Submit</>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
