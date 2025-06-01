import { deleteNews as deleteNewsApi } from "../../services/servicesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export function useDeleteNews() {
  const queryClient = useQueryClient();
  const { mutate: deleteNews, isLoading } = useMutation({
    mutationFn: deleteNewsApi,
    onSuccess: () => {
      // Invalidate the query to refetch messages after deletion
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting news:", error);
      toast.error("Error deleting news");
    },
  });

  return { deleteNews, isLoading };
}
