import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage as createContactMessageApi } from "../../services/servicesApi";
export function useCreateContactMessage() {
  const queryClient = useQueryClient();
  const { mutate: createContactMessage, isPending } = useMutation({
    mutationFn: createContactMessageApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
      console.log("Contact message created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating contact message:", error);
    },
  });
  return { createContactMessage, isPending };
}
