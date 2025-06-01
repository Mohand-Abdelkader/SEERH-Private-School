import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage as createContactMessageApi } from "../../services/servicesApi";
import toast from "react-hot-toast";
export function useCreateContactMessage() {
  const queryClient = useQueryClient();
  const { mutate: createContactMessage, isPending } = useMutation({
    mutationFn: createContactMessageApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
      toast.success("We Received Your Message, We Will Contact You Soon");
    },
    onError: (error) => {
      console.error("Error creating contact message:", error);
      toast.error("Error creating contact message");
    },
  });
  return { createContactMessage, isPending };
}
