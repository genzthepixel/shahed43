import { useMutation, useQuery } from "@tanstack/react-query";
import type { Message } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();
  return useQuery<Message[]>({
    queryKey: ["messages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSendMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      content,
    }: {
      name: string;
      email: string;
      content: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.sendMessage(name, email, content);
    },
  });
}
