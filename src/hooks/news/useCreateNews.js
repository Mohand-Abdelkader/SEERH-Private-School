import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNews as createNewsApi } from "../../services/servicesApi";
import toast from "react-hot-toast";
export function useCreateNews() {
  const queryClient = useQueryClient();
  const { mutate: createNews, isPending } = useMutation({
    mutationFn: createNewsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success("News created successfully");
    },
    onError: (error) => {
      console.error("Error creating news:", error);
      toast.error("Error creating news");
    },
  });
  return { createNews, isPending };
}
