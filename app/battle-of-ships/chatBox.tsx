import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  message: z.string().min(1).max(100),
});

interface ChatBoxProps {
  name: string;
}

type Message = {
  name: string;
  content: string;
};

export default function ChatBox(chatBoxProps: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connection, setConnection] = useState<HubConnection>();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    startConnection();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollIntoView(false);
  };

  const startConnection = async () => {
    try {
      // declare connection
      const newConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5115/chatHub")
        .build();

      // start the connection
      await newConnection.start();

      // listen for new message
      newConnection.on("New Message", (name, content) => {
        const newMessage: Message = { name, content };
        setMessages((message) => [...message, newMessage]);
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
    sendMessage(chatBoxProps.name, values.message);
  };

  const MessagesBox = useMemo(() => {
    return (
      <>
        {...messages.map((message, index) => (
          <div key={index} className="flex flex-row">
            <div
              className={`${
                message.name == chatBoxProps.name
                  ? "text-blue-800"
                  : "text-red-700"
              }`}
            >
              {message.name} :
            </div>
            <div>{message.content}</div>
          </div>
        ))}
      </>
    );
  }, [messages]);

  return (
    <>
      <div className="rounded-xl w-[350px] bg-stone-500 p-5">
        <ScrollArea className="h-[200px] rounded-md border">
          <div className="px-4 py-2" ref={chatContainerRef}>
            <div>{MessagesBox}</div>
          </div>
        </ScrollArea>

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
                    <Input placeholder="..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
}
