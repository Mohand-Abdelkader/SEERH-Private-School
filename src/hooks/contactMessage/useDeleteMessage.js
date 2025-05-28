import { deleteMessage } from "../../services/servicesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useDeleteMessage() {
  const queryClient = useQueryClient();
  const { mutate: deleteContactMessage, isLoading } = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      // Invalidate the query to refetch messages after deletion
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
    },
    onError: (error) => {
      console.error("Error deleting contact message:", error);
    },
  });

  return { deleteContactMessage, isLoading };
}
