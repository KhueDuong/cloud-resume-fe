import React, { useEffect, useState } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(4).max(50),
  message: z.string().min(0).max(100),
});

export default function ChatBox() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("alo");
  const [connection, setConnection] = useState<HubConnection>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  useEffect(() => {
    document.body.style.overflow = "auto";
    startConnection();
  }, []);

  const startConnection = async () => {
    try {
      // declare connection
      const newConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5115/chatHub")
        .build();

      // start the connection
      await newConnection.start();

      // listen for new message
      newConnection.on("New Message", (name, message) => {
        setMessage(message);
      });

      // set the connection
      setConnection(newConnection);
    } catch (error) {
      console.error("Cannot start SignalR connection");
    }
  };

  const sendMessage = async (name: string, message: string) => {
    await connection?.invoke("Send", name, message);
  };

  const onMessageSubmit = (values: z.infer<typeof formSchema>) => {
    sendMessage(values.name, values.message);
  };

  const onNameSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.name);
    setName(values.name);
  };

  return (
    <>
      <div className="rounded-xl w-[900px] bg-stone-500 p-5">
        {!name ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onNameSubmit)}
              className="space-y-8 "
            >
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
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onMessageSubmit)}
              className="space-y-8 "
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>message</FormLabel>
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>message</FormLabel>
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

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        )}
      </div>
    </>
  );
}
