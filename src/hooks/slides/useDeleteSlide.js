import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSlide } from "../../services/servicesApi";
import { toast } from "react-toastify";
export const useDeleteSlide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSlide,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("Slide deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete slide");
    },
  });
};
