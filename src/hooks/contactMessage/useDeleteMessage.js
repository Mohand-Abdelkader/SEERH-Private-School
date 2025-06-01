import { deleteMessage } from "../../services/servicesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export function useDeleteMessage() {
  const queryClient = useQueryClient();
  const { mutate: deleteContactMessage, isLoading } = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      // Invalidate the query to refetch messages after deletion
      queryClient.invalidateQueries({ queryKey: ["contactMessages"] });
      toast.success("Contact message deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting contact message:", error);
      toast.error("Error deleting contact message");
    },
  });

  return { deleteContactMessage, isLoading };
}
